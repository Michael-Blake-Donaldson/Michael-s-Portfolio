"use client";

import { useEffect, useRef, useState } from "react";

export type ProjectModelKey = "earth" | "raidbase" | "planthaven";

type ProjectAtlasSceneProps = {
  className?: string;
  focusProject?: ProjectModelKey;
  onSelectProject?: (project: ProjectModelKey) => void;
};

const projectColors: Record<ProjectModelKey, number> = {
  earth: 0x8fd6c5,
  raidbase: 0xd87954,
  planthaven: 0xa8b86b,
};

export default function ProjectAtlasScene({
  className = "",
  focusProject,
  onSelectProject,
}: ProjectAtlasSceneProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const selectProjectRef = useRef(onSelectProject);
  const [sceneState, setSceneState] = useState<"loading" | "ready" | "fallback">("loading");

  useEffect(() => {
    selectProjectRef.current = onSelectProject;
  }, [onSelectProject]);

  useEffect(() => {
    const host = hostRef.current;

    if (!host) {
      return;
    }

    let disposed = false;
    let cleanupScene: (() => void) | undefined;

    const createScene = async () => {
      try {
        const THREE = await import("three");

        if (disposed) {
          return;
        }

        const renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: true,
        });
        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.18;
        renderer.domElement.className = "project-atlas-canvas";
        renderer.domElement.dataset.testid = "project-atlas-canvas";
        host.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
        camera.position.set(focusProject ? 3.8 : 5.8, focusProject ? 3.25 : 5.1, focusProject ? 5.4 : 7.8);
        camera.lookAt(0, 0, 0);

        const atlas = new THREE.Group();
        atlas.rotation.set(-0.12, -0.22, 0);
        scene.add(atlas);

        const geometries: import("three").BufferGeometry[] = [];
        const materials: import("three").Material[] = [];
        const projectGroups = new Map<ProjectModelKey, import("three").Group>();
        const animatedObjects: Array<{ key: ProjectModelKey; object: import("three").Object3D }> = [];
        const clickTargets: import("three").Object3D[] = [];

        const registerMaterial = <T extends import("three").Material>(material: T) => {
          materials.push(material);
          return material;
        };

        const registerGeometry = <T extends import("three").BufferGeometry>(geometry: T) => {
          geometries.push(geometry);
          return geometry;
        };

        const stoneMaterial = registerMaterial(new THREE.MeshStandardMaterial({
          color: 0x282820,
          metalness: 0.08,
          roughness: 0.92,
        }));
        const tableGeometry = registerGeometry(new THREE.CylinderGeometry(3.5, 3.68, 0.28, 64));
        const table = new THREE.Mesh(tableGeometry, stoneMaterial);
        table.position.y = -0.5;
        atlas.add(table);

        const tableEdgeMaterial = registerMaterial(new THREE.LineBasicMaterial({
          color: 0xf4ead8,
          opacity: 0.17,
          transparent: true,
        }));
        const tableEdges = registerGeometry(new THREE.EdgesGeometry(tableGeometry));
        atlas.add(new THREE.LineSegments(tableEdges, tableEdgeMaterial));

        [1.18, 2.15, 3.05].forEach((radius, index) => {
          const ringGeometry = registerGeometry(new THREE.TorusGeometry(radius, 0.012, 8, 96));
          const ringMaterial = registerMaterial(new THREE.MeshBasicMaterial({
            color: index === 1 ? 0x8fd6c5 : 0xf4ead8,
            opacity: index === 1 ? 0.2 : 0.1,
            transparent: true,
          }));
          const ring = new THREE.Mesh(ringGeometry, ringMaterial);
          ring.position.y = -0.34 + index * 0.003;
          ring.rotation.x = -Math.PI / 2;
          atlas.add(ring);
        });

        const markerGeometry = registerGeometry(new THREE.CylinderGeometry(0.72, 0.78, 0.16, 32));
        const projectPositions: Record<ProjectModelKey, [number, number, number]> = focusProject
          ? {
              earth: [0, 0, 0],
              raidbase: [0, 0, 0],
              planthaven: [0, 0, 0],
            }
          : {
              earth: [-1.75, -0.27, 0.78],
              raidbase: [1.72, -0.27, 0.72],
              planthaven: [0.12, -0.27, -1.72],
            };

        const createProjectGroup = (key: ProjectModelKey) => {
          const color = projectColors[key];
          const group = new THREE.Group();
          const [x, y, z] = projectPositions[key];
          group.position.set(x, y, z);
          group.userData.projectKey = key;

          const markerMaterial = registerMaterial(new THREE.MeshPhysicalMaterial({
            color: 0x3a3930,
            metalness: 0.12,
            roughness: 0.74,
          }));
          const marker = new THREE.Mesh(markerGeometry, markerMaterial);
          marker.userData.projectKey = key;
          clickTargets.push(marker);
          group.add(marker);

          const markerRingGeometry = registerGeometry(new THREE.TorusGeometry(0.64, 0.022, 10, 64));
          const markerRingMaterial = registerMaterial(new THREE.MeshBasicMaterial({ color, opacity: 0.68, transparent: true }));
          const markerRing = new THREE.Mesh(markerRingGeometry, markerRingMaterial);
          markerRing.position.y = 0.1;
          markerRing.rotation.x = -Math.PI / 2;
          group.add(markerRing);

          projectGroups.set(key, group);
          atlas.add(group);
          return group;
        };

        const earthGroup = createProjectGroup("earth");
        const earthColor = projectColors.earth;
        const earthGeometry = registerGeometry(new THREE.IcosahedronGeometry(focusProject === "earth" ? 0.88 : 0.58, 3));
        const earthMaterial = registerMaterial(new THREE.MeshStandardMaterial({
          color: 0x315b58,
          emissive: earthColor,
          emissiveIntensity: 0.18,
          metalness: 0.22,
          roughness: 0.56,
          wireframe: true,
        }));
        const globe = new THREE.Mesh(earthGeometry, earthMaterial);
        globe.position.y = focusProject === "earth" ? 1.05 : 0.75;
        globe.userData.projectKey = "earth";
        clickTargets.push(globe);
        earthGroup.add(globe);
        animatedObjects.push({ key: "earth", object: globe });

        [-0.72, 0.76].forEach((rotation, index) => {
          const orbitGeometry = registerGeometry(new THREE.TorusGeometry(focusProject === "earth" ? 1.04 : 0.7, 0.018, 8, 72));
          const orbitMaterial = registerMaterial(new THREE.MeshBasicMaterial({
            color: index === 0 ? earthColor : 0xe7b85f,
            opacity: 0.5,
            transparent: true,
          }));
          const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
          orbit.position.y = globe.position.y;
          orbit.rotation.set(Math.PI / 2 + rotation * 0.18, rotation, rotation * 0.4);
          orbit.userData.projectKey = "earth";
          clickTargets.push(orbit);
          earthGroup.add(orbit);
        });

        const raidGroup = createProjectGroup("raidbase");
        const raidColor = projectColors.raidbase;
        const raidCoreGeometry = registerGeometry(new THREE.IcosahedronGeometry(focusProject === "raidbase" ? 0.48 : 0.32, 1));
        const raidMaterial = registerMaterial(new THREE.MeshStandardMaterial({
          color: raidColor,
          emissive: raidColor,
          emissiveIntensity: 0.34,
          metalness: 0.28,
          roughness: 0.4,
        }));
        const raidCore = new THREE.Mesh(raidCoreGeometry, raidMaterial);
        raidCore.position.y = focusProject === "raidbase" ? 1.05 : 0.72;
        raidCore.userData.projectKey = "raidbase";
        clickTargets.push(raidCore);
        raidGroup.add(raidCore);
        animatedObjects.push({ key: "raidbase", object: raidCore });

        const raidNodeGeometry = registerGeometry(new THREE.SphereGeometry(focusProject === "raidbase" ? 0.14 : 0.1, 14, 14));
        const raidLinePoints: number[] = [];
        const raidRadius = focusProject === "raidbase" ? 0.94 : 0.66;
        for (let index = 0; index < 6; index += 1) {
          const angle = (index / 6) * Math.PI * 2;
          const x = Math.cos(angle) * raidRadius;
          const z = Math.sin(angle) * raidRadius;
          const node = new THREE.Mesh(raidNodeGeometry, raidMaterial);
          node.position.set(x, raidCore.position.y + Math.sin(angle * 2) * 0.12, z);
          node.userData.projectKey = "raidbase";
          clickTargets.push(node);
          raidGroup.add(node);
          raidLinePoints.push(0, raidCore.position.y, 0, x, node.position.y, z);
        }
        const raidLinesGeometry = registerGeometry(new THREE.BufferGeometry());
        raidLinesGeometry.setAttribute("position", new THREE.Float32BufferAttribute(raidLinePoints, 3));
        const raidLineMaterial = registerMaterial(new THREE.LineBasicMaterial({ color: raidColor, opacity: 0.56, transparent: true }));
        raidGroup.add(new THREE.LineSegments(raidLinesGeometry, raidLineMaterial));

        const plantGroup = createProjectGroup("planthaven");
        const plantColor = projectColors.planthaven;
        const stemGeometry = registerGeometry(new THREE.CylinderGeometry(0.055, 0.075, focusProject === "planthaven" ? 1.35 : 0.92, 12));
        const plantMaterial = registerMaterial(new THREE.MeshStandardMaterial({
          color: plantColor,
          emissive: plantColor,
          emissiveIntensity: 0.24,
          metalness: 0.08,
          roughness: 0.58,
        }));
        const stem = new THREE.Mesh(stemGeometry, plantMaterial);
        stem.position.y = focusProject === "planthaven" ? 0.78 : 0.56;
        stem.userData.projectKey = "planthaven";
        clickTargets.push(stem);
        plantGroup.add(stem);

        const leafGeometry = registerGeometry(new THREE.SphereGeometry(focusProject === "planthaven" ? 0.48 : 0.32, 20, 12));
        [-1, 1].forEach((direction) => {
          const leaf = new THREE.Mesh(leafGeometry, plantMaterial);
          leaf.scale.set(1.18, 0.24, 0.58);
          leaf.position.set(direction * (focusProject === "planthaven" ? 0.44 : 0.31), focusProject === "planthaven" ? 1.12 : 0.79, 0);
          leaf.rotation.z = direction * 0.52;
          leaf.rotation.y = direction * 0.32;
          leaf.userData.projectKey = "planthaven";
          leaf.userData.baseRotationZ = leaf.rotation.z;
          clickTargets.push(leaf);
          plantGroup.add(leaf);
          animatedObjects.push({ key: "planthaven", object: leaf });
        });

        const seedGeometry = registerGeometry(new THREE.SphereGeometry(focusProject === "planthaven" ? 0.28 : 0.2, 18, 14));
        const seed = new THREE.Mesh(seedGeometry, plantMaterial);
        seed.scale.y = 0.7;
        seed.position.y = 0.18;
        seed.userData.projectKey = "planthaven";
        clickTargets.push(seed);
        plantGroup.add(seed);

        if (focusProject) {
          (["earth", "raidbase", "planthaven"] as ProjectModelKey[]).forEach((key) => {
            const group = projectGroups.get(key);
            if (group) {
              group.visible = key === focusProject;
            }
          });
        } else {
          const connectionPoints: number[] = [];
          const keys: ProjectModelKey[] = ["earth", "raidbase", "planthaven", "earth"];
          for (let index = 0; index < keys.length - 1; index += 1) {
            const from = projectPositions[keys[index]];
            const to = projectPositions[keys[index + 1]];
            connectionPoints.push(from[0], -0.14, from[2], to[0], -0.14, to[2]);
          }
          const connectionGeometry = registerGeometry(new THREE.BufferGeometry());
          connectionGeometry.setAttribute("position", new THREE.Float32BufferAttribute(connectionPoints, 3));
          const connectionMaterial = registerMaterial(new THREE.LineDashedMaterial({
            color: 0xf4ead8,
            dashSize: 0.14,
            gapSize: 0.11,
            opacity: 0.18,
            transparent: true,
          }));
          const connections = new THREE.LineSegments(connectionGeometry, connectionMaterial);
          connections.computeLineDistances();
          atlas.add(connections);
        }

        scene.add(new THREE.HemisphereLight(0xf4ead8, 0x10110e, 1.7));
        const keyLight = new THREE.DirectionalLight(0x8fd6c5, 2.25);
        keyLight.position.set(3.8, 6, 4.5);
        scene.add(keyLight);
        const warmLight = new THREE.PointLight(0xd87954, 2.1, 14);
        warmLight.position.set(-4, 1.5, 4);
        scene.add(warmLight);

        const captureMode = window.location.hostname === "localhost"
          && new URLSearchParams(window.location.search).has("capture");
        const reducedMotion = captureMode || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const raycaster = new THREE.Raycaster();
        const pointer = new THREE.Vector2(5, 5);
        let hoveredProject: ProjectModelKey | undefined;
        let frameId = 0;
        let pointerX = 0;
        let pointerY = 0;

        const resize = () => {
          const width = Math.max(host.clientWidth, 1);
          const height = Math.max(host.clientHeight, 1);
          renderer.setSize(width, height, false);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        };

        const updatePointer = (event: PointerEvent) => {
          const bounds = host.getBoundingClientRect();
          pointer.x = ((event.clientX - bounds.left) / Math.max(bounds.width, 1)) * 2 - 1;
          pointer.y = -((event.clientY - bounds.top) / Math.max(bounds.height, 1)) * 2 + 1;
          pointerX = pointer.x;
          pointerY = pointer.y;

          raycaster.setFromCamera(pointer, camera);
          const hit = raycaster.intersectObjects(clickTargets, false)[0];
          const nextProject = hit?.object.userData.projectKey as ProjectModelKey | undefined;

          if (nextProject !== hoveredProject) {
            hoveredProject = nextProject;
            host.dataset.hoveredProject = nextProject ?? "";
            host.style.cursor = nextProject && selectProjectRef.current ? "pointer" : "grab";
          }
        };

        const clearPointer = () => {
          hoveredProject = undefined;
          host.dataset.hoveredProject = "";
          host.style.cursor = "grab";
          pointerX = 0;
          pointerY = 0;
        };

        const selectProject = () => {
          if (hoveredProject) {
            selectProjectRef.current?.(hoveredProject);
          }
        };

        const render = (time = 0) => {
          const drift = reducedMotion ? 0 : time * 0.000045;
          atlas.rotation.y = -0.22 + drift + pointerX * 0.08;
          atlas.rotation.x = -0.12 + pointerY * 0.04;

          projectGroups.forEach((group, key) => {
            const isHovered = key === hoveredProject;
            const targetScale = isHovered ? 1.1 : 1;
            group.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), reducedMotion ? 1 : 0.08);
          });

          animatedObjects.forEach(({ key, object }, index) => {
            if (key === "earth") {
              object.rotation.y = time * 0.00028;
              object.rotation.x = 0.12;
            } else if (key === "raidbase") {
              object.rotation.y = time * 0.00042;
            } else {
              const baseRotationZ = Number(object.userData.baseRotationZ ?? 0);
              const leafSway = Math.sin(time * 0.0012 + index) * 0.08;
              object.rotation.z += (baseRotationZ + leafSway - object.rotation.z) * 0.025;
            }
          });

          renderer.render(scene, camera);

          if (captureMode && !host.dataset.captureFrame) {
            host.dataset.captureFrame = renderer.domElement.toDataURL("image/png");
          }

          if (!reducedMotion) {
            frameId = window.requestAnimationFrame(render);
          }
        };

        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(host);
        host.addEventListener("pointermove", updatePointer);
        host.addEventListener("pointerleave", clearPointer);
        host.addEventListener("click", selectProject);
        resize();
        render();
        setSceneState("ready");

        cleanupScene = () => {
          window.cancelAnimationFrame(frameId);
          resizeObserver.disconnect();
          host.removeEventListener("pointermove", updatePointer);
          host.removeEventListener("pointerleave", clearPointer);
          host.removeEventListener("click", selectProject);
          geometries.forEach((geometry) => geometry.dispose());
          materials.forEach((material) => material.dispose());
          renderer.dispose();
          renderer.forceContextLoss();

          if (host.contains(renderer.domElement)) {
            host.removeChild(renderer.domElement);
          }
        };
      } catch {
        if (!disposed) {
          setSceneState("fallback");
        }
      }
    };

    void createScene();

    return () => {
      disposed = true;
      cleanupScene?.();
    };
  }, [focusProject]);

  return (
    <div
      aria-hidden="true"
      className={`project-atlas-scene project-atlas-${sceneState} ${className}`.trim()}
      data-focus-project={focusProject ?? "atlas"}
      ref={hostRef}
    >
      <span className="project-atlas-fallback" />
    </div>
  );
}
