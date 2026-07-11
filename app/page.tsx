"use client";

import { useEffect, useRef, useState } from "react";

const navItems = [
  { href: "#work", label: "Exhibits" },
  { href: "#skills", label: "Toolmarks" },
  { href: "#experience", label: "Timeline" },
  { href: "#contact", label: "Contact" },
];

type FeaturedProject = {
  name: string;
  specimen: string;
  era: string;
  category: string;
  status: string;
  summary: string;
  problem: string;
  role: string;
  outcome: string;
  engineering: string[];
  evidence: string[];
  lesson: string;
  hiringValue: string;
  architecture: {
    layer: string;
    detail: string;
  }[];
  decisions: {
    choice: string;
    reason: string;
    tradeoff: string;
  }[];
  interviewAngles: string[];
  nextSteps: string[];
  plate: {
    artifact: string;
    signal: string;
    metric: string;
    traces: string[];
  };
  stack: string[];
  visual: "earth" | "raidbase" | "planthaven";
};

const featuredProjects: FeaturedProject[] = [
  {
    name: "Earth 3D Dashboard",
    specimen: "Specimen 01",
    era: "Spatial systems",
    category: "Interactive data visualization",
    status: "Flagship build",
    summary:
      "A 3D globe dashboard that turns layered real-world datasets into a browser interface people can explore.",
    problem:
      "Dense visual data becomes hard to read when every layer competes for attention and every toggle forces the interface to work harder than it should.",
    role:
      "Designed the data-layer model, built the browser experience, improved render performance, and added accessibility support for a visual-heavy tool.",
    outcome:
      "Improved rendering performance by roughly 35% through draw-call reduction, batching, caching, and incremental loading.",
    engineering: [
      "Modular dataset toggles without forcing complete application re-renders.",
      "Semantic labels and ARIA roles for screen-reader accessibility.",
      "Performance-minded rendering strategy for dense visual layers.",
    ],
    evidence: [
      "Performance work centered on fewer draw calls, batching, caching, and incremental loading.",
      "Layer controls were designed so exploration feels immediate instead of heavy.",
      "Accessibility notes were added for a visual-first interface that still needs semantic structure.",
    ],
    lesson:
      "The best data tools do not only render impressive visuals. They help people build a mental model quickly.",
    hiringValue:
      "Shows I can make a complex visual interface readable, performant, and accessible instead of only impressive.",
    architecture: [
      {
        layer: "Interaction model",
        detail:
          "Layer toggles were treated as structured UI state so datasets can be explored without making the whole surface feel heavy.",
      },
      {
        layer: "Rendering path",
        detail:
          "Draw-call reduction, batching, caching, and incremental loading kept visual density from turning into interaction lag.",
      },
      {
        layer: "Accessibility layer",
        detail:
          "Semantic controls, ARIA labels, and plain-language layer names help a visual-first experience remain understandable.",
      },
    ],
    decisions: [
      {
        choice: "Keep datasets modular",
        reason: "Recruiters can see I understand component boundaries and state isolation.",
        tradeoff: "More structure up front, but fewer tangled updates when layers change.",
      },
      {
        choice: "Optimize before adding more effects",
        reason: "A dashboard needs to feel immediate before it earns extra visual treatment.",
        tradeoff: "Some animation ideas waited until the base render path was healthier.",
      },
      {
        choice: "Describe visual data with semantic UI",
        reason: "Accessibility is part of engineering quality, especially when the main feature is visual.",
        tradeoff: "It required more careful naming and control design than a canvas-only build.",
      },
    ],
    interviewAngles: [
      "How I found and reduced rendering bottlenecks in a WebGL-heavy interface.",
      "How I would explain the project to a nontechnical stakeholder who still needs to trust the data.",
      "What telemetry I would add next: render time, layer toggle latency, and saved-view usage.",
    ],
    nextSteps: [
      "Add saved layer presets so users can return to useful views.",
      "Add performance telemetry around layer changes and initial load.",
      "Expand keyboard navigation for dense visual exploration.",
    ],
    plate: {
      artifact: "Layered atlas shard",
      signal: "Spatial data made readable",
      metric: "35% render gain",
      traces: ["Dataset toggles", "Canvas performance", "Semantic controls"],
    },
    stack: ["React", "JavaScript", "WebGL", "Data visualization", "ARIA"],
    visual: "earth",
  },
  {
    name: "RaidBase",
    specimen: "Specimen 02",
    era: "Community systems",
    category: "Team-finding platform",
    status: "Release-ready alpha",
    summary:
      "A full-stack platform for finding groups, forming squads, sharing clips, and building community reputation.",
    problem:
      "Gaming communities often depend on scattered chats, manual coordination, and fragile trust signals when players are trying to find reliable groups.",
    role:
      "Owned product flows across onboarding, authentication, profiles, LFG posts, squads, clips, reputation, moderation, and account lifecycle work.",
    outcome:
      "Demonstrates broad full-stack ownership across secure user flows, relational data modeling, testing, and deployment-minded architecture.",
    engineering: [
      "Relational model for users, squads, clips, reputation, and moderation.",
      "Account export and deletion workflows for lifecycle completeness.",
      "Testing plan spanning unit, integration, and browser flows.",
    ],
    evidence: [
      "Release-ready alpha scope includes onboarding, authentication, profiles, LFG posts, squads, clips, and moderation.",
      "Account lifecycle flows were planned as first-class product work rather than late cleanup.",
      "The schema connects community behavior to trust, reputation, and team formation.",
    ],
    lesson:
      "Full-stack ownership is product ownership. The database, account flows, and empty states all shape user trust.",
    hiringValue:
      "Best proof of full-stack product ownership across auth, relational data, trust systems, testing, and account lifecycle work.",
    architecture: [
      {
        layer: "Identity and onboarding",
        detail:
          "Authentication, profiles, onboarding, and account settings create the foundation for reliable community behavior.",
      },
      {
        layer: "Domain model",
        detail:
          "Users, squads, LFG posts, clips, reputation, and moderation are modeled as connected parts of one product system.",
      },
      {
        layer: "Lifecycle and trust",
        detail:
          "Account export, deletion, reporting, and moderation paths are treated as core flows because trust is a feature.",
      },
    ],
    decisions: [
      {
        choice: "Model trust as data",
        reason: "Reputation, clips, squads, and moderation need structure, not only profile copy.",
        tradeoff: "The schema becomes more thoughtful, but the product can support safer community behavior.",
      },
      {
        choice: "Plan account lifecycle early",
        reason: "Export and deletion flows show product maturity and privacy awareness.",
        tradeoff: "It adds backend complexity before the flashier social features are finished.",
      },
      {
        choice: "Test around journeys",
        reason: "A team-finding app succeeds or fails through multi-step user flows.",
        tradeoff: "Journey tests take more setup, but catch issues unit tests can miss.",
      },
    ],
    interviewAngles: [
      "How the schema maps real community behavior into users, squads, posts, clips, and reputation.",
      "How I would reduce the MVP while protecting the trust and safety pieces that matter.",
      "Where I would add integration tests around onboarding, squad creation, and account deletion.",
    ],
    nextSteps: [
      "Deploy a seeded demo so recruiters can inspect the main flows quickly.",
      "Add a moderation dashboard with review queues and audit history.",
      "Add browser tests for onboarding, LFG creation, squad joining, and account deletion.",
    ],
    plate: {
      artifact: "Community ledger tablet",
      signal: "Trust modeled as product data",
      metric: "Full-stack alpha",
      traces: ["Auth journeys", "Reputation model", "Lifecycle flows"],
    },
    stack: ["Next.js", "PostgreSQL", "Prisma", "NextAuth", "Docker", "Vitest"],
    visual: "raidbase",
  },
  {
    name: "PlantHaven",
    specimen: "Specimen 03",
    era: "Commerce systems",
    category: "Full-stack e-commerce",
    status: "Flagship build",
    summary:
      "An API-driven commerce experience with product browsing, authentication, checkout, and order-data handling.",
    problem:
      "A familiar storefront still needs disciplined engineering: secure routes, fast queries, clean state, and a checkout path that does not feel stitched together.",
    role:
      "Built protected routes, checkout flows, API state synchronization, and an indexed PostgreSQL schema.",
    outcome:
      "Reduced query response time by roughly 30-40% and load time by roughly 25-35% through indexing, lazy loading, caching, and frontend optimization.",
    engineering: [
      "JWT-based authentication with protected account and checkout routes.",
      "Indexed PostgreSQL schema for faster product and order queries.",
      "Performance work across lazy loading, caching, and API synchronization.",
    ],
    evidence: [
      "Indexed schema work reduced query response time by roughly 30-40%.",
      "Lazy loading and caching reduced load time by roughly 25-35%.",
      "Protected routes and API state synchronization gave the commerce flow a sturdier foundation.",
    ],
    lesson:
      "A familiar product surface is a good test of engineering discipline because the details are easy for users to feel.",
    hiringValue:
      "Shows practical full-stack discipline in secure commerce flows, API-driven state, database indexing, and performance work.",
    architecture: [
      {
        layer: "Protected commerce flow",
        detail:
          "Authentication and protected routes keep account and checkout paths separated from public product browsing.",
      },
      {
        layer: "API and state sync",
        detail:
          "Product, cart, checkout, and order data are kept predictable through clear API boundaries and frontend state updates.",
      },
      {
        layer: "Data performance",
        detail:
          "PostgreSQL indexing, lazy loading, caching, and frontend optimization target the places users feel slowness first.",
      },
    ],
    decisions: [
      {
        choice: "Index product and order queries",
        reason: "Commerce users feel slow search, product pages, and order history immediately.",
        tradeoff: "Indexes need care, but they make the most common reads much healthier.",
      },
      {
        choice: "Protect account and checkout routes",
        reason: "Security needs to be visible in the product structure, not only mentioned in the stack list.",
        tradeoff: "Routing and state handling become stricter, but the user flow is safer.",
      },
      {
        choice: "Optimize familiar surfaces",
        reason: "A standard storefront is a strong test because users already know how it should feel.",
        tradeoff: "The work is less flashy, but it exposes real engineering judgment.",
      },
    ],
    interviewAngles: [
      "How I improved query response and load time through indexing, caching, and lazy loading.",
      "How I would test the checkout path from protected route to order confirmation.",
      "Why ordinary commerce screens are a useful proving ground for state, security, and performance.",
    ],
    nextSteps: [
      "Add an admin catalog view for inventory and product updates.",
      "Add checkout test coverage around happy paths, failures, and empty-cart states.",
      "Add lightweight analytics for product discovery, cart abandonment, and load-time regressions.",
    ],
    plate: {
      artifact: "Commerce garden seal",
      signal: "Secure flows with faster data",
      metric: "30-40% query gain",
      traces: ["Protected routes", "Indexed queries", "Checkout state"],
    },
    stack: ["React", "Supabase", "PostgreSQL", "Stripe", "REST APIs", "JWT"],
    visual: "planthaven",
  },
];

const secondaryProjects = [
  {
    name: "DRASTIC Planner",
    catalog: "Field Note A",
    category: "Desktop decision-support system",
    summary:
      "Python desktop app with a modular computation engine, lightweight ETL pipeline, async processing, validation checks, and tests.",
    stack: ["Python", "PySide6", "ETL", "Desktop apps"],
  },
  {
    name: "TradeU",
    catalog: "Field Note B",
    category: "Student service exchange concept",
    summary:
      "Marketplace architecture for verified students, credit-based trades, profiles, reviews, reputation, and abuse prevention.",
    stack: ["TypeScript", "React", "Supabase", "Product strategy"],
  },
  {
    name: "PIA",
    catalog: "Field Note C",
    category: "Apartment intelligence platform",
    summary:
      "Full-stack concept for saved searches, price-change tracking, listing scores, renter alerts, and user-specific data.",
    stack: ["Java", "React", "JWT", "Scheduled workflows"],
  },
];

const toolTrays = [
  {
    id: "interface",
    label: "Interface tools",
    note: "The visible artifact",
    signal: "I shape product screens so users can understand what to do next.",
    skills: ["React", "Next.js", "TypeScript", "HTML", "CSS", "Tailwind", "Responsive UI"],
    appearsIn: ["Earth 3D Dashboard", "RaidBase", "PlantHaven"],
    proof: "Strongest signal: turning messy workflows into clear, responsive interfaces.",
  },
  {
    id: "systems",
    label: "System tools",
    note: "The structure beneath",
    signal: "I connect interfaces to durable models, APIs, auth, and product rules.",
    skills: ["Node.js", "REST APIs", "PostgreSQL", "Supabase", "Prisma", "SQL", "Auth flows"],
    appearsIn: ["RaidBase", "PlantHaven", "PIA"],
    proof: "Strongest signal: database-backed product flows with authentication and lifecycle thinking.",
  },
  {
    id: "proof",
    label: "Proof tools",
    note: "The verification layer",
    signal: "I care about whether the build works after the first happy-path demo.",
    skills: ["Git", "GitHub", "Docker", "GitHub Actions", "Vitest", "Playwright", "Validation"],
    appearsIn: ["RaidBase", "DRASTIC Planner", "PlantHaven"],
    proof: "Strongest signal: testing plans around real journeys, not only isolated functions.",
  },
  {
    id: "polish",
    label: "Polish tools",
    note: "The refinement pass",
    signal: "I look for the performance, accessibility, and security details users feel.",
    skills: ["WebGL", "Chrome DevTools", "Caching", "Accessibility", "JWT", "HTTPS", "Section 508"],
    appearsIn: ["Earth 3D Dashboard", "PlantHaven", "Unscripted Inc."],
    proof: "Strongest signal: measured performance work plus accessibility-aware interface decisions.",
  },
] as const;

const timeline = [
  {
    role: "Full-Stack Software Engineer Intern",
    org: "Unscripted Inc.",
    layer: "Layer 01",
    signal: "Professional software delivery",
    meta: "Remote | May 2024-September 2024",
    detail:
      "Contributed to full-stack development with React, REST APIs, frontend performance debugging, Agile planning, and collaborative iteration. Reduced unnecessary React re-renders and improved load time by roughly 25%.",
  },
  {
    role: "General Merchandise Manager",
    org: "Target",
    layer: "Layer 02",
    signal: "Operational leadership under pressure",
    meta: "Orlando, Florida | December 2025-Present",
    detail:
      "Leads an $8M+ business area across inventory, merchandising, fulfillment, and guest experience while managing and developing approximately 30 employees. Improved inventory accuracy to 98%+ and reduced shrink by roughly 15%.",
  },
  {
    role: "Operations Coordinator",
    org: "The Walt Disney Company",
    layer: "Layer 03",
    signal: "Cross-team coordination and process improvement",
    meta: "Orlando, Florida | 2022-Present",
    detail:
      "Coordinated high-volume operations across departments, supported 50+ employees, and improved inventory accuracy by 18% through workflow optimization and consistent follow-through.",
  },
  {
    role: "B.S. Software Engineering",
    org: "Southern New Hampshire University",
    layer: "Layer 04",
    signal: "Formal engineering foundation",
    meta: "Expected 2027",
    detail:
      "Focused on software security, testing, UI/UX, computer graphics, systems analysis and design, databases, and full-stack application development.",
  },
];

const proofPoints = [
  { value: "35%", label: "rendering performance gain on a WebGL dashboard" },
  { value: "30+", label: "team members led in high-volume operations" },
  { value: "6", label: "software artifacts across web, data, desktop, and product" },
  { value: "2027", label: "B.S. Software Engineering expected completion" },
];

const targetRoles = ["Junior Full-Stack Engineer", "Associate Software Engineer", "Frontend Engineer", "Product Engineer"];

const hiringSignals = [
  {
    title: "Builds complete product flows",
    detail:
      "Projects cover authentication, protected routes, data models, performance, accessibility, account lifecycle work, and user-facing polish.",
  },
  {
    title: "Turns ambiguity into systems",
    detail:
      "My strongest work starts with messy workflows: finding teams, tracking listings, exploring data, or supporting decisions.",
  },
  {
    title: "Brings real leadership maturity",
    detail:
      "Managing high-volume operations taught me ownership, follow-through, prioritization, and calm communication under pressure.",
  },
];

const recruiterEvidence = [
  "RaidBase shows end-to-end full-stack product ownership.",
  "Earth 3D Dashboard shows visual engineering, performance work, and accessibility awareness.",
  "PlantHaven shows secure commerce flows, database indexing, and API-driven state.",
];

const profileLinks = [
  {
    label: "GitHub",
    detail: "Code vault",
    href: "https://github.com/Michael-Blake-Donaldson",
    icon: "fossil",
    external: true,
  },
  {
    label: "LinkedIn",
    detail: "Field profile",
    href: "https://www.linkedin.com/in/mikedonaldson1/",
    icon: "tablet",
    external: true,
  },
  {
    label: "Email",
    detail: "Send a note",
    href: "mailto:blake18465@gmail.com",
    icon: "sealed-note",
  },
  {
    label: "Resume",
    detail: "Resume scroll",
    href: "/MichaelDonaldson_TechResume.pdf",
    icon: "scroll",
    download: true,
  },
] as const;

type ProfileLink = (typeof profileLinks)[number];

function ArtifactIcon({ icon }: { icon: ProfileLink["icon"] }) {
  return (
    <span className={`artifact-icon artifact-icon-${icon}`} aria-hidden="true">
      <span className="artifact-icon-mark" />
    </span>
  );
}

function FieldTagLogo({
  onActivate,
  active,
}: {
  onActivate: () => void;
  active: boolean;
}) {
  return (
    <button
      className={`brand-mark ${active ? "brand-mark-active" : ""}`}
      type="button"
      onClick={onActivate}
      aria-label="Open recruiter field brief"
    >
      <span className="brand-tag-code">MD</span>
      <span className="brand-tag-label">Hire brief</span>
      <span className="brand-tag-pin" aria-hidden="true" />
    </button>
  );
}

function ProfileArtifactLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`profile-artifacts ${className}`} aria-label="Profile and contact links">
      {profileLinks.map((link) => (
        <a
          className="profile-artifact-link"
          href={link.href}
          key={link.label}
          target={"external" in link && link.external ? "_blank" : undefined}
          rel={"external" in link && link.external ? "noreferrer" : undefined}
          download={"download" in link && link.download ? true : undefined}
          aria-label={`${link.label}: ${link.detail}`}
        >
          <ArtifactIcon icon={link.icon} />
          <span>
            <strong>{link.label}</strong>
            <small>{link.detail}</small>
          </span>
        </a>
      ))}
    </div>
  );
}

function DinoRunner() {
  return (
    <div className="dino-runner" aria-hidden="true">
      <div className="track-line" />
      <div className="tiny-dino">
        <span className="dino-tail" />
        <span className="dino-body" />
        <span className="dino-neck" />
        <span className="dino-head" />
        <span className="dino-leg leg-one" />
        <span className="dino-leg leg-two" />
      </div>
      <span className="track-print print-one" />
      <span className="track-print print-two" />
      <span className="track-print print-three" />
    </div>
  );
}

function RelicScene() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = sceneRef.current;
    let cleanupScene: (() => void) | undefined;
    let cancelled = false;

    if (!host) {
      return;
    }

    const createScene = async () => {
      const THREE = await import("three");

      if (cancelled) {
        return;
      }

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
      camera.position.set(0, 0, 5.4);

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.domElement.className = "relic-3d-canvas";
      host.appendChild(renderer.domElement);

      const group = new THREE.Group();
      group.rotation.set(-0.16, -0.42, 0.06);
      scene.add(group);

      const tabletGeometry = new THREE.BoxGeometry(2.35, 1.42, 0.18, 5, 4, 1);
      const tabletMaterial = new THREE.MeshStandardMaterial({
        color: 0xd7c196,
        metalness: 0.04,
        roughness: 0.86,
      });
      const tablet = new THREE.Mesh(tabletGeometry, tabletMaterial);
      group.add(tablet);

      const edgeGeometry = new THREE.EdgesGeometry(tabletGeometry);
      const edgeMaterial = new THREE.LineBasicMaterial({
        color: 0x5b4a36,
        opacity: 0.52,
        transparent: true,
      });
      tablet.add(new THREE.LineSegments(edgeGeometry, edgeMaterial));

      const lineGeometry = new THREE.BoxGeometry(0.92, 0.035, 0.02);
      const lineMaterial = new THREE.MeshBasicMaterial({ color: 0x211d17 });
      [-0.32, -0.12, 0.1].forEach((y, index) => {
        const line = new THREE.Mesh(lineGeometry, lineMaterial);
        line.position.set(-0.22, y, 0.105);
        line.scale.x = index === 1 ? 0.78 : 1;
        tablet.add(line);
      });

      const dotGeometry = new THREE.SphereGeometry(0.055, 12, 12);
      const mineralMaterial = new THREE.MeshBasicMaterial({ color: 0x8fd6c5 });
      const clayMaterial = new THREE.MeshBasicMaterial({ color: 0xd87954 });
      [
        { x: 0.62, y: 0.34, material: mineralMaterial },
        { x: 0.72, y: -0.25, material: clayMaterial },
      ].forEach((dot) => {
        const marker = new THREE.Mesh(dotGeometry, dot.material);
        marker.position.set(dot.x, dot.y, 0.12);
        tablet.add(marker);
      });

      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(
          [
            -1.8, 0.92, -0.24, -1.2, -0.82, 0.12, -0.35, 1.02, -0.18, 0.28, -0.9, 0.16, 1.15, 0.76,
            -0.12, 1.72, -0.46, 0.08,
          ],
          3,
        ),
      );
      const particleMaterial = new THREE.PointsMaterial({
        color: 0x8fd6c5,
        opacity: 0.42,
        size: 0.045,
        transparent: true,
      });
      group.add(new THREE.Points(particleGeometry, particleMaterial));

      scene.add(new THREE.AmbientLight(0xf4ead8, 1.55));
      const keyLight = new THREE.DirectionalLight(0x8fd6c5, 1.6);
      keyLight.position.set(2.8, 2.4, 4);
      scene.add(keyLight);
      const warmLight = new THREE.PointLight(0xd87954, 1.2, 8);
      warmLight.position.set(-2, -1.6, 3);
      scene.add(warmLight);

      const resize = () => {
        const width = Math.max(host.clientWidth, 1);
        const height = Math.max(host.clientHeight, 1);
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const resizeObserver = new ResizeObserver(resize);
      let frameId = 0;

      const render = (time = 0) => {
        group.rotation.y = -0.42 + Math.sin(time * 0.00045) * 0.18;
        group.rotation.x = -0.16 + Math.sin(time * 0.00032) * 0.04;
        group.position.y = Math.sin(time * 0.0005) * 0.05;
        renderer.render(scene, camera);

        if (!reducedMotion) {
          frameId = window.requestAnimationFrame(render);
        }
      };

      resizeObserver.observe(host);
      resize();
      render();

      cleanupScene = () => {
        window.cancelAnimationFrame(frameId);
        resizeObserver.disconnect();
        tabletGeometry.dispose();
        tabletMaterial.dispose();
        edgeGeometry.dispose();
        edgeMaterial.dispose();
        lineGeometry.dispose();
        lineMaterial.dispose();
        dotGeometry.dispose();
        mineralMaterial.dispose();
        clayMaterial.dispose();
        particleGeometry.dispose();
        particleMaterial.dispose();
        renderer.dispose();

        if (host.contains(renderer.domElement)) {
          host.removeChild(renderer.domElement);
        }
      };
    };

    void createScene();

    return () => {
      cancelled = true;
      cleanupScene?.();
    };
  }, []);

  return <div className="relic-3d-scene" ref={sceneRef} aria-hidden="true" />;
}

function HeroArtifact() {
  return (
    <div className="hero-artifact" aria-label="History inspired software artifact display">
      <div className="artifact-image" aria-hidden="true" />
      <RelicScene />
      <div className="artifact-ring ring-one" aria-hidden="true" />
      <div className="artifact-ring ring-two" aria-hidden="true" />
      <div className="strata-card strata-top">
        <span>Excavation layer</span>
        <strong>Problem</strong>
      </div>
      <div className="strata-card strata-middle">
        <span>Tool layer</span>
        <strong>System design</strong>
      </div>
      <div className="strata-card strata-bottom">
        <span>Impact layer</span>
        <strong>Clearer workflow</strong>
      </div>
      <div className="code-tablet" aria-hidden="true">
        <span>workflow.find()</span>
        <span>model.refine()</span>
        <span>ship.measure()</span>
      </div>
      <DinoRunner />
    </div>
  );
}

function HiringSnapshot() {
  return (
    <section className="hiring-snapshot" aria-label="Hiring snapshot">
      <div className="hiring-snapshot-copy">
        <p className="eyebrow">Recruiter field brief</p>
        <h2>What hiring teams should know in the first minute.</h2>
      </div>
      <div className="role-chip-row" aria-label="Target roles">
        {targetRoles.map((role) => (
          <span key={role}>{role}</span>
        ))}
      </div>
      <div className="hiring-signal-grid">
        {hiringSignals.map((signal) => (
          <article className="hiring-signal-card" key={signal.title}>
            <h3>{signal.title}</h3>
            <p>{signal.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FieldAssistantGuide() {
  return (
    <section className="field-assistant" aria-label="Suggested portfolio path">
      <div className="assistant-dino" aria-hidden="true">
        <span className="assistant-tail" />
        <span className="assistant-body" />
        <span className="assistant-neck" />
        <span className="assistant-head" />
        <span className="assistant-leg assistant-leg-one" />
        <span className="assistant-leg assistant-leg-two" />
      </div>
      <div className="assistant-copy">
        <p className="eyebrow">Fossil trail</p>
        <h2>Follow the strongest hiring evidence without digging through everything.</h2>
      </div>
      <ol className="assistant-steps">
        <li>
          <span>01</span>
          <strong>Scan proof</strong>
          <p>Start with outcomes and role fit.</p>
        </li>
        <li>
          <span>02</span>
          <strong>Open field notes</strong>
          <p>Review architecture, decisions, tradeoffs, and proof.</p>
        </li>
        <li>
          <span>03</span>
          <strong>Check tool tray</strong>
          <p>Connect skills to project evidence.</p>
        </li>
      </ol>
    </section>
  );
}

function ProjectVisual({ project }: { project: FeaturedProject }) {
  return (
    <div className={`artifact-preview artifact-${project.visual}`} role="img" aria-label={`${project.name} exhibit preview`}>
      <div className="specimen-label">
        <span>{project.specimen}</span>
        <strong>{project.era}</strong>
      </div>
      <div className="plate-caption">
        <span>{project.plate.artifact}</span>
        <strong>{project.plate.metric}</strong>
      </div>
      <div className="specimen-slab" aria-hidden="true">
        <span className="slab-line line-one" />
        <span className="slab-line line-two" />
        <span className="slab-line line-three" />
        <span className="slab-pin pin-one" />
        <span className="slab-pin pin-two" />
        <span className="slab-pin pin-three" />
        {project.visual === "earth" && (
          <div className="fossil-globe">
            <span className="globe-ridge ridge-one" />
            <span className="globe-ridge ridge-two" />
            <span className="globe-ridge ridge-three" />
            <span className="globe-node node-one" />
            <span className="globe-node node-two" />
            <span className="globe-node node-three" />
          </div>
        )}
        {project.visual === "raidbase" && (
          <div className="community-tablet">
            <span className="tablet-rail" />
            <span className="tablet-panel panel-one" />
            <span className="tablet-panel panel-two" />
            <span className="tablet-row row-one" />
            <span className="tablet-row row-two" />
          </div>
        )}
        {project.visual === "planthaven" && (
          <div className="garden-ledger">
            <span className="leaf leaf-one" />
            <span className="leaf leaf-two" />
            <span className="leaf leaf-three" />
            <span className="ledger-block" />
          </div>
        )}
        <div className="plate-traces">
          {project.plate.traces.map((trace) => (
            <span key={trace}>{trace}</span>
          ))}
        </div>
      </div>
      <p className="plate-signal">{project.plate.signal}</p>
    </div>
  );
}

function ArchitectureDiagram({ project }: { project: FeaturedProject }) {
  return (
    <div className={`architecture-diagram diagram-${project.visual}`} aria-label={`${project.name} system flow`}>
      <div className="diagram-rail" aria-hidden="true" />
      {project.architecture.map((item, index) => (
        <article className="diagram-node" key={item.layer}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{item.layer}</strong>
        </article>
      ))}
      <article className="diagram-node diagram-outcome">
        <span>Impact</span>
        <strong>{project.plate.metric}</strong>
      </article>
    </div>
  );
}

function ToolTray() {
  const [activeTrayId, setActiveTrayId] = useState<(typeof toolTrays)[number]["id"]>(toolTrays[0].id);
  const activeTray = toolTrays.find((tray) => tray.id === activeTrayId) ?? toolTrays[0];

  return (
    <section className="section-block tool-tray-section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">Tool tray</p>
        <h2>Skills grouped by the job they do in the product.</h2>
      </div>
      <div className="tool-tray">
        <div className="tool-tray-tabs" role="tablist" aria-label="Skill categories">
          {toolTrays.map((tray) => (
            <button
              aria-controls={`tool-panel-${tray.id}`}
              aria-selected={activeTray.id === tray.id}
              className="tool-tab"
              id={`tool-tab-${tray.id}`}
              key={tray.id}
              onClick={() => setActiveTrayId(tray.id)}
              role="tab"
              type="button"
            >
              <span>{tray.note}</span>
              <strong>{tray.label}</strong>
            </button>
          ))}
        </div>
        <article
          aria-labelledby={`tool-tab-${activeTray.id}`}
          className="tool-tray-panel"
          id={`tool-panel-${activeTray.id}`}
          role="tabpanel"
        >
          <p className="tool-tray-signal">{activeTray.signal}</p>
          <div className="tool-chip-grid">
            {activeTray.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <div className="tool-proof-grid">
            <div>
              <span>Shows up in</span>
              <strong>{activeTray.appearsIn.join(" | ")}</strong>
            </div>
            <div>
              <span>Hiring signal</span>
              <strong>{activeTray.proof}</strong>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function HiringBriefModal({
  onClose,
  onOpenProject,
}: {
  onClose: () => void;
  onOpenProject: (project: FeaturedProject) => void;
}) {
  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <section
        className="case-modal hiring-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="hiring-brief-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal-topline">
          <span>Recruiter Field Brief</span>
          <button type="button" className="close-button" onClick={onClose} aria-label="Close hiring brief">
            Close
          </button>
        </div>
        <p className="eyebrow">Michael Donaldson | Full-stack software engineer</p>
        <h2 id="hiring-brief-title">A quick read for hiring teams.</h2>
        <p className="modal-summary">
          I am aiming for junior, associate, frontend, full-stack, and product engineering roles where I can combine
          hands-on implementation with product thinking, performance awareness, and real ownership.
        </p>

        <div className="brief-section">
          <h3>Role fit</h3>
          <div className="role-chip-row modal-role-chips" aria-label="Target roles">
            {targetRoles.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>
        </div>

        <div className="hiring-signal-grid modal-signal-grid">
          {hiringSignals.map((signal) => (
            <article className="hiring-signal-card" key={signal.title}>
              <h3>{signal.title}</h3>
              <p>{signal.detail}</p>
            </article>
          ))}
        </div>

        <div className="brief-section">
          <h3>Evidence to review</h3>
          <ul className="modal-list evidence-list">
            {recruiterEvidence.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="brief-project-actions">
            {featuredProjects.map((project) => (
              <button key={project.name} type="button" onClick={() => onOpenProject(project)}>
                Open {project.name}
              </button>
            ))}
          </div>
        </div>

        <div className="brief-section">
          <h3>Next actions</h3>
          <ProfileArtifactLinks className="brief-artifact-links" />
        </div>
      </section>
    </div>
  );
}

function CaseStudyModal({
  project,
  onClose,
  onPrevious,
  onNext,
}: {
  project: FeaturedProject;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}) {
  const [activeTab, setActiveTab] = useState("brief");
  const [copied, setCopied] = useState(false);

  const tabs = [
    { id: "brief", label: "Brief" },
    { id: "architecture", label: "Architecture" },
    { id: "decisions", label: "Decisions" },
    { id: "proof", label: "Proof" },
    { id: "interview", label: "Interview" },
    { id: "next", label: "Next" },
  ];

  const projectBrief = [
    `${project.name} | ${project.category}`,
    `Hiring signal: ${project.hiringValue}`,
    `Role: ${project.role}`,
    `Outcome: ${project.outcome}`,
    `Stack: ${project.stack.join(", ")}`,
  ].join("\n");

  const copyProjectBrief = async () => {
    try {
      await navigator.clipboard.writeText(projectBrief);
      setCopied(true);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = projectBrief;
      textArea.setAttribute("readonly", "");
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
    }
  };

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <section
        className="case-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal-topline">
          <span>{project.specimen}</span>
          <button type="button" className="close-button" onClick={onClose} aria-label="Close case study">
            Close
          </button>
        </div>
        <p className="eyebrow">{project.category}</p>
        <h2 id="case-study-title">{project.name}</h2>
        <p className="modal-summary">{project.summary}</p>

        <div className="field-note-actions">
          <button type="button" className="copy-note-button" onClick={copyProjectBrief}>
            {copied ? "Summary copied" : "Copy recruiter summary"}
          </button>
        </div>

        <div className="field-note-snapshot" aria-label={`${project.name} hiring summary`}>
          <article>
            <span>What it proves</span>
            <strong>{project.hiringValue}</strong>
          </article>
          <article>
            <span>My role</span>
            <strong>{project.role}</strong>
          </article>
          <article>
            <span>Primary outcome</span>
            <strong>{project.outcome}</strong>
          </article>
        </div>

        <div className="case-tabs" role="tablist" aria-label={`${project.name} case study sections`}>
          {tabs.map((tab) => (
            <button
              aria-controls={`case-panel-${tab.id}`}
              aria-selected={activeTab === tab.id}
              className="case-tab-button"
              id={`case-tab-${tab.id}`}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          aria-labelledby={`case-tab-${activeTab}`}
          className="case-tab-panel"
          id={`case-panel-${activeTab}`}
          role="tabpanel"
        >
          {activeTab === "brief" ? (
            <div className="field-note-grid">
              <article className="field-note-card wide">
                <span>Field question</span>
                <h3>What problem was worth solving?</h3>
                <p>{project.problem}</p>
              </article>
              <article className="field-note-card">
                <span>Candidate signal</span>
                <h3>Why this matters to hiring teams</h3>
                <p>{project.hiringValue}</p>
              </article>
              <article className="field-note-card">
                <span>Lesson retained</span>
                <h3>What stayed with me</h3>
                <p>{project.lesson}</p>
              </article>
            </div>
          ) : null}

          {activeTab === "architecture" ? (
            <div className="architecture-panel">
              <ArchitectureDiagram project={project} />
              <div className="architecture-map">
                {project.architecture.map((item, index) => (
                  <article className="architecture-step" key={item.layer}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{item.layer}</h3>
                      <p>{item.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : null}

          {activeTab === "decisions" ? (
            <div className="decision-grid">
              {project.decisions.map((decision) => (
                <article className="decision-card" key={decision.choice}>
                  <h3>{decision.choice}</h3>
                  <p>{decision.reason}</p>
                  <span>{decision.tradeoff}</span>
                </article>
              ))}
            </div>
          ) : null}

          {activeTab === "proof" ? (
            <div className="proof-panel">
              <div className="proof-ledger">
                <article>
                  <span>Measured result</span>
                  <strong>{project.outcome}</strong>
                </article>
                <article>
                  <span>Engineering moves</span>
                  <ul className="modal-list compact-list">
                    {project.engineering.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </div>
              <div>
                <h3>Evidence log</h3>
                <div className="evidence-card-grid">
                  {project.evidence.map((item, index) => (
                    <article className="evidence-card" key={item}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p>{item}</p>
                    </article>
                  ))}
                </div>
                <div className="stack-list modal-stack" aria-label={`${project.name} technology stack`}>
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          {activeTab === "interview" ? (
            <div className="talk-track-panel">
              <div>
                <span>Interview use</span>
                <h3>Questions this project helps me answer</h3>
                <p>
                  These are the strongest conversation paths I would use in an interview, because they connect the
                  project to technical judgment rather than only describing features.
                </p>
              </div>
              <ol className="talk-track-list">
                {project.interviewAngles.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          ) : null}

          {activeTab === "next" ? (
            <div className="next-steps-panel">
              <div>
                <span>Next excavation</span>
                <h3>What I would improve with more time</h3>
                <p>
                  A good field note should show judgment after the first build. These next steps show how I would keep
                  hardening the project instead of treating it as finished forever.
                </p>
              </div>
              <ul className="modal-list next-step-list">
                {project.nextSteps.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <div className="modal-nav" aria-label="Browse case studies">
          <button type="button" onClick={onPrevious}>
            Previous exhibit
          </button>
          <button type="button" onClick={onNext}>
            Next exhibit
          </button>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);
  const [hiringBriefOpen, setHiringBriefOpen] = useState(false);

  useEffect(() => {
    if (!selectedProject && !hiringBriefOpen) {
      document.body.classList.remove("modal-open");
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setHiringBriefOpen(false);
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProject, hiringBriefOpen]);

  const selectedProjectIndex = selectedProject
    ? featuredProjects.findIndex((project) => project.name === selectedProject.name)
    : -1;

  const selectPreviousProject = () => {
    if (selectedProjectIndex < 0) {
      return;
    }

    const previousIndex = (selectedProjectIndex - 1 + featuredProjects.length) % featuredProjects.length;
    setSelectedProject(featuredProjects[previousIndex]);
  };

  const selectNextProject = () => {
    if (selectedProjectIndex < 0) {
      return;
    }

    const nextIndex = (selectedProjectIndex + 1) % featuredProjects.length;
    setSelectedProject(featuredProjects[nextIndex]);
  };

  const openHiringBrief = () => {
    setSelectedProject(null);
    setHiringBriefOpen(true);
  };

  return (
    <main className="site-shell">
      <a className="skip-link" href="#work">
        Skip to selected work
      </a>

      <header className="site-header" aria-label="Primary navigation">
        <FieldTagLogo active={hiringBriefOpen} onActivate={openHiringBrief} />
        <nav className="nav-links" aria-label="Portfolio sections">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Full-Stack Software Engineer | Orlando, Florida</p>
          <h1>Ancient curiosity, modern software tools.</h1>
          <p className="hero-subhead">
            I love history, dinosaurs, and the long story of people solving problems with better tools. Now I build
            full-stack products that turn messy workflows into clear, usable systems.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button button-primary" href="#work">
              Explore exhibits <span aria-hidden="true">-&gt;</span>
            </a>
            <button className="button button-secondary" type="button" onClick={openHiringBrief}>
              Open hiring brief
            </button>
          </div>
          <ProfileArtifactLinks className="hero-artifact-links" />
        </div>

        <HeroArtifact />
      </section>

      <section className="proof-strip" aria-label="Portfolio proof points">
        {proofPoints.map((item) => (
          <div className="proof-item" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <HiringSnapshot />
      <FieldAssistantGuide />

      <section className="intro-section" aria-label="About Michael">
        <p>
          This portfolio treats each project like a field discovery: the problem I uncovered, the system I shaped, and
          the outcome the user can actually feel. It is a warmer way to show technical work without pretending software
          is only dashboards and neon grids.
        </p>
        <p>
          My operations background matters here too. Leading teams in high-volume environments taught me how to notice
          friction, prioritize what matters, communicate clearly, and keep ownership through the finish line.
        </p>
      </section>

      <section className="section-block" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected exhibits</p>
          <h2>Project artifacts with the engineering story preserved.</h2>
        </div>

        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.name}>
              <ProjectVisual project={project} />
              <div className="project-content">
                <div className="project-kicker">
                  <span>{project.category}</span>
                  <span>{project.status}</span>
                </div>
                <h3>{project.name}</h3>
                <p className="project-summary">{project.summary}</p>
                <div className="project-detail-grid">
                  <div>
                    <h4>Field note</h4>
                    <p>{project.problem}</p>
                  </div>
                  <div>
                    <h4>Measured result</h4>
                    <p>{project.outcome}</p>
                  </div>
                </div>
                <div className="stack-list" aria-label={`${project.name} technology stack`}>
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <button type="button" className="button artifact-button" onClick={() => setSelectedProject(project)}>
                  Open field notes
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block more-work" aria-label="More projects">
        <div className="section-heading compact">
          <p className="eyebrow">More field notes</p>
          <h2>Smaller discoveries that show range beyond one stack.</h2>
        </div>
        <div className="secondary-grid">
          {secondaryProjects.map((project) => (
            <article className="secondary-card" key={project.name}>
              <p className="card-label">{project.catalog}</p>
              <h3>{project.name}</h3>
              <p className="secondary-category">{project.category}</p>
              <p>{project.summary}</p>
              <div className="stack-list quiet" aria-label={`${project.name} technology stack`}>
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <ToolTray />

      <section className="section-block experience-section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Timeline strata</p>
          <h2>Software execution backed by leadership in real operational pressure.</h2>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline-item" key={`${item.role}-${item.org}`}>
              <div className="timeline-marker" aria-hidden="true" />
              <div>
                <p className="timeline-layer">{item.layer}</p>
                <p className="timeline-meta">{item.meta}</p>
                <h3>{item.role}</h3>
                <p className="timeline-org">{item.org}</p>
                <p className="timeline-signal">{item.signal}</p>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Have an old problem that needs a sharper tool?</h2>
          <p>
            I am looking for junior, associate, frontend, full-stack, and product engineering roles where ownership,
            usability, and clean implementation matter.
          </p>
        </div>
        <div className="contact-panel">
          <p className="contact-panel-label">Artifact drawer</p>
          <ProfileArtifactLinks className="contact-artifact-links" />
          <button className="button contact-brief-button" type="button" onClick={openHiringBrief}>
            Open recruiter brief
          </button>
          <p>Best first read: role fit, strongest evidence, project case studies, resume, GitHub, and LinkedIn.</p>
        </div>
      </section>

      {selectedProject ? (
        <CaseStudyModal
          key={selectedProject.name}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNext={selectNextProject}
          onPrevious={selectPreviousProject}
        />
      ) : null}

      {hiringBriefOpen ? (
        <HiringBriefModal
          onClose={() => setHiringBriefOpen(false)}
          onOpenProject={(project) => {
            setHiringBriefOpen(false);
            setSelectedProject(project);
          }}
        />
      ) : null}
    </main>
  );
}
