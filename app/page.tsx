"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ProjectAtlasScene, { type ProjectModelKey } from "./ProjectAtlasScene";

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
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
  sourceHref: string;
  image: string;
  imageAlt: string;
  imageMode?: "screenshot" | "logo";
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
      "An interactive 3D Earth visualization that turns scientific datasets into an explorable browser experience.",
    problem:
      "Dense visual data becomes hard to read when every layer competes for attention and every toggle forces the interface to work harder than it should.",
    role:
      "Built the Babylon.js globe engine, data pipeline, story presets, content hub, accessibility layer, and CI-backed quality workflow.",
    outcome:
      "Shipped six scientific data layers, three globe meshes, three map skins, a 2D fallback, and 11 Vitest specs in CI.",
    engineering: [
      "Babylon.js globe engine with multiple meshes, map skins, glow, atmosphere, and quality modes.",
      "Validated data pipeline that normalizes scientific layers before runtime.",
      "Semantic controls, ARIA live regions, keyboard focus states, and a non-WebGL fallback.",
    ],
    evidence: [
      "Six toggleable overlays cover climate, earthquakes, coral reefs, aurora zones, forests, and renewable energy.",
      "Story presets coordinate layers, globe mesh, map skin, and related educational content.",
      "CI runs linting, formatting checks, 11 Vitest specs, and the GitHub Pages build path.",
    ],
    lesson:
      "The best data tools do not only render impressive visuals. They help people build a mental model quickly.",
    hiringValue:
      "Shows I can build a visually ambitious system with real data architecture, graceful fallbacks, accessibility, and automated quality checks.",
    architecture: [
      {
        layer: "Interaction model",
        detail:
          "Layer controls, opacity, story presets, and mesh or skin choices give users several ways to explore without losing context.",
      },
      {
        layer: "Rendering path",
        detail:
          "Babylon.js renders the globe, atmosphere, glow, map textures, and scientific markers with selectable quality modes.",
      },
      {
        layer: "Accessibility layer",
        detail:
          "Semantic controls, ARIA live regions, keyboard focus states, and a 2D fallback keep the experience usable beyond WebGL.",
      },
    ],
    decisions: [
      {
        choice: "Generate runtime layers from validated source data",
        reason: "Scientific content needs a clear provenance and validation path before it reaches the globe.",
        tradeoff: "The build pipeline is more involved, but runtime data stays predictable and auditable.",
      },
      {
        choice: "Offer explicit quality modes",
        reason: "A 3D experience should adapt to different devices instead of assuming unlimited graphics performance.",
        tradeoff: "More rendering paths need testing, but the application becomes more resilient.",
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
    sourceHref: "https://github.com/Michael-Blake-Donaldson/Earth-3D-Dashboard",
    image: "/projects/earth-dashboard.png",
    imageAlt: "Earth 3D Dashboard showing an interactive globe with scientific data controls",
    plate: {
      artifact: "Layered atlas shard",
      signal: "Spatial data made readable",
      metric: "6 data layers",
      traces: ["Babylon.js", "11 Vitest specs", "2D fallback"],
    },
    stack: ["Babylon.js", "JavaScript", "WebGL", "Vitest", "GitHub Actions", "ARIA"],
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
      "Release-ready alpha with PostgreSQL-backed product flows, fail-closed authentication, lifecycle controls, and 61+ passing tests.",
    engineering: [
      "Relational model for users, squads, clips, reputation, and moderation.",
      "Account export and deletion workflows for lifecycle completeness.",
      "Testing plan spanning unit, integration, and browser flows.",
    ],
    evidence: [
      "Release-ready alpha scope includes onboarding, authentication, profiles, LFG posts, squads, clips, and moderation.",
      "Account lifecycle flows were planned as first-class product work rather than late cleanup.",
      "The repository documents 61+ passing tests plus Playwright coverage for critical browser flows.",
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
    sourceHref: "https://github.com/Michael-Blake-Donaldson/RaidBase",
    image: "/projects/raidbase-logo.png",
    imageAlt: "RaidBase product mark",
    imageMode: "logo",
    plate: {
      artifact: "Community ledger tablet",
      signal: "Trust modeled as product data",
      metric: "61+ tests",
      traces: ["Auth journeys", "PostgreSQL", "Playwright"],
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
      "A full-stack plant storefront with product discovery, authentication, secure checkout, and order history.",
    problem:
      "A familiar storefront still needs disciplined engineering: secure routes, fast queries, clean state, and a checkout path that does not feel stitched together.",
    role:
      "Built the catalog, filtering, plant matching, Supabase authentication, Stripe checkout, order handling, and PWA layer.",
    outcome:
      "Completed an end-to-end commerce flow with server-validated Stripe pricing, webhooks, Supabase orders, protected account routes, and offline caching.",
    engineering: [
      "Supabase authentication with protected checkout and order-history routes.",
      "Netlify functions for checkout creation, order retrieval, and Stripe webhooks.",
      "Service worker, lazy image loading, cache headers, structured data, and security headers.",
    ],
    evidence: [
      "Checkout prices are validated server-side before a Stripe session is created.",
      "Authenticated order history is written from Stripe webhooks into Supabase.",
      "The storefront includes live filters, URL-synced search, a care quiz, lazy images, and PWA caching.",
    ],
    lesson:
      "A familiar product surface is a good test of engineering discipline because the details are easy for users to feel.",
    hiringValue:
      "Shows practical full-stack discipline across commerce UX, authentication, serverless functions, payment security, persistence, and progressive enhancement.",
    architecture: [
      {
        layer: "Protected commerce flow",
        detail:
          "Supabase authentication separates public product browsing from protected checkout and order-history flows.",
      },
      {
        layer: "API and state sync",
        detail:
          "Netlify functions create Stripe sessions, retrieve orders, and process signed webhook events.",
      },
      {
        layer: "Data performance",
        detail:
          "Lazy loading, long-lived asset caching, a service worker, and URL-synced filters keep the storefront responsive and resilient.",
      },
    ],
    decisions: [
      {
        choice: "Validate prices on the server",
        reason: "Checkout totals must not trust editable browser state.",
        tradeoff: "The flow needs a serverless boundary, but payment integrity is stronger.",
      },
      {
        choice: "Write orders from Stripe webhooks",
        reason: "The payment provider is the authoritative signal that checkout succeeded.",
        tradeoff: "Webhook verification adds setup, but avoids relying on a redirect alone.",
      },
      {
        choice: "Keep the storefront progressively enhanced",
        reason: "A familiar commerce flow should stay fast and understandable across devices and network conditions.",
        tradeoff: "Vanilla modules require careful organization without framework conventions.",
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
    sourceHref: "https://github.com/Michael-Blake-Donaldson/PlantHaven-Ecommerce_Store",
    image: "/projects/planthaven-home.jpeg",
    imageAlt: "PlantHaven storefront with filters, plant cards, cart, and account controls",
    plate: {
      artifact: "Commerce garden seal",
      signal: "Secure flows with faster data",
      metric: "3 serverless functions",
      traces: ["Stripe webhooks", "Supabase auth", "PWA cache"],
    },
    stack: ["JavaScript", "Supabase", "Stripe", "Netlify Functions", "PWA", "HTML/CSS"],
    visual: "planthaven",
  },
];

const secondaryProjects = [
  {
    name: "DRASTIC Planner",
    catalog: "Field Note A",
    category: "Desktop decision-support system",
    status: "Functional desktop application",
    summary:
      "Humanitarian planning application with scenario modeling, geospatial simulation, async analysis, SQLite persistence, and Windows packaging.",
    stack: ["Python", "PySide6", "SQLite", "Leaflet"],
    sourceHref: "https://github.com/Michael-Blake-Donaldson/Drastic",
  },
  {
    name: "TradeU",
    catalog: "Field Note B",
    category: "Student service exchange platform",
    status: "MVP foundation implemented",
    summary:
      "Next.js marketplace foundation with onboarding, listings, trade requests, validation, safety guardrails, RLS-ready schema work, and test scaffolding.",
    stack: ["Next.js", "TypeScript", "Supabase", "Vitest"],
    sourceHref: "https://github.com/Michael-Blake-Donaldson/TradeU",
  },
  {
    name: "PIA",
    catalog: "Field Note C",
    category: "Apartment intelligence platform",
    status: "Architecture and backend build",
    summary:
      "Java and React system for normalized listings, snapshots, change detection, explainable scoring, saved searches, alerts, and JWT-secured user data.",
    stack: ["Java", "Spring Boot", "React", "PostgreSQL"],
    sourceHref: "https://github.com/Michael-Blake-Donaldson/PIA-ApartmentFinder",
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
  { value: "61+", label: "passing tests documented in the RaidBase alpha" },
  { value: "6", label: "scientific data layers in the Earth 3D Dashboard" },
  { value: "30+", label: "team members led in high-volume operations" },
  { value: "25%", label: "load-time improvement during a software internship" },
];

const practicePrinciples = [
  {
    label: "Observe",
    detail: "Start with the real workflow, user friction, and constraints before choosing the solution.",
  },
  {
    label: "Model",
    detail: "Make the data, state, boundaries, and tradeoffs explicit before adding surface polish.",
  },
  {
    label: "Verify",
    detail: "Test critical journeys, measure the result, and keep refining what the evidence reveals.",
  },
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
  "RaidBase shows end-to-end product ownership with PostgreSQL, authentication, lifecycle flows, and 61+ tests.",
  "Earth 3D Dashboard shows Babylon.js engineering, a validated data pipeline, accessible fallbacks, and CI.",
  "PlantHaven shows secure Stripe checkout, Supabase authentication, serverless functions, and PWA delivery.",
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

function FieldTagLogo() {
  return (
    <a className="brand-mark" href="#top" aria-label="Michael Donaldson, back to top">
      <span className="brand-tag-code">MD</span>
      <span className="brand-tag-label">Michael Donaldson</span>
      <span className="brand-tag-role">Software Engineer</span>
      <span className="brand-tag-pin" aria-hidden="true" />
    </a>
  );
}

function ProfileArtifactLinks({
  className = "",
  hideResume = false,
}: {
  className?: string;
  hideResume?: boolean;
}) {
  const visibleLinks = hideResume ? profileLinks.filter((link) => link.label !== "Resume") : profileLinks;

  return (
    <div className={`profile-artifacts ${className}`} aria-label="Profile and contact links">
      {visibleLinks.map((link) => (
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

function useDialogFocus<T extends HTMLElement>() {
  const dialogRef = useRef<T>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    if (!dialog) {
      return;
    }

    const focusableSelector =
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector));
    focusable[0]?.focus();

    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    dialog.addEventListener("keydown", trapFocus);

    return () => {
      dialog.removeEventListener("keydown", trapFocus);
      previouslyFocused?.focus();
    };
  }, []);

  return dialogRef;
}

function HeroProjectAtlas({
  onOpen,
  onSelectProject,
}: {
  onOpen: () => void;
  onSelectProject: (project: ProjectModelKey) => void;
}) {
  return (
    <figure className="hero-project-atlas">
      <div className="project-atlas-stage">
        <ProjectAtlasScene onSelectProject={onSelectProject} />
        <div className="model-stage-index" aria-hidden="true">
          <span>Project excavation atlas</span>
          <span>Three flagship builds</span>
        </div>
      </div>
      <figcaption className="project-atlas-caption">
        <div>
          <span>Interactive project navigation</span>
          <strong>Each 3D find opens the engineering decisions and evidence behind a real build.</strong>
          <div className="project-atlas-links" aria-label="Open a featured project">
            {featuredProjects.map((project) => (
              <button type="button" key={project.name} onClick={() => onSelectProject(project.visual)}>
                {project.name}
              </button>
            ))}
          </div>
        </div>
        <button className="project-atlas-open" type="button" onClick={onOpen}>Expand atlas</button>
      </figcaption>
    </figure>
  );
}

function ProjectVisual({ project }: { project: FeaturedProject }) {
  return (
    <div className={`artifact-preview artifact-${project.visual}`}>
      <div className="specimen-label">
        <span>{project.specimen}</span>
        <strong>{project.era}</strong>
      </div>
      <div className="plate-caption">
        <span>{project.plate.artifact}</span>
        <strong>{project.plate.metric}</strong>
      </div>
      <div className="specimen-slab">
        <span className="slab-line line-one" />
        <span className="slab-line line-two" />
        <span className="slab-line line-three" />
        <span className="slab-pin pin-one" />
        <span className="slab-pin pin-two" />
        <span className="slab-pin pin-three" />
        <div className={`project-shot-frame ${project.imageMode === "logo" ? "project-shot-frame-logo" : ""}`}>
          <Image
            alt={project.imageAlt}
            className={`project-shot ${project.imageMode === "logo" ? "project-shot-logo" : ""}`}
            fill
            sizes="(max-width: 980px) 100vw, 46vw"
            src={project.image}
            unoptimized
          />
        </div>
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

function ToolTray() {
  const [activeTrayId, setActiveTrayId] = useState<(typeof toolTrays)[number]["id"]>(toolTrays[0].id);
  const activeTray = toolTrays.find((tray) => tray.id === activeTrayId) ?? toolTrays[0];

  return (
    <section className="section-block tool-tray-section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">Technical capabilities</p>
        <h2>Skills connected to the work they enable.</h2>
      </div>
      <div className="tool-tray">
        <div className="tool-tray-tabs" role="tablist" aria-label="Skill categories">
          {toolTrays.map((tray) => (
            <button
              aria-controls="tool-tray-panel"
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
          id="tool-tray-panel"
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
  const dialogRef = useDialogFocus<HTMLElement>();

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <section
        className="case-modal hiring-modal"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="hiring-brief-title"
        aria-describedby="hiring-brief-summary"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal-topline">
          <span>Candidate brief</span>
          <button type="button" className="close-button" onClick={onClose} aria-label="Close hiring brief">
            Close
          </button>
        </div>
        <p className="eyebrow">Michael Donaldson | Full-stack software engineer</p>
        <h2 id="hiring-brief-title">A quick read for hiring teams.</h2>
        <p className="modal-summary" id="hiring-brief-summary">
          I build full-stack products across interactive 3D, community platforms, commerce, and desktop systems. My
          operations leadership background adds practical ownership, prioritization, and calm execution under pressure.
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
                Review {project.name}
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

function ProjectAtlasModal({
  onClose,
  onSelectProject,
}: {
  onClose: () => void;
  onSelectProject: (project: ProjectModelKey) => void;
}) {
  const dialogRef = useDialogFocus<HTMLElement>();

  return (
    <div className="modal-backdrop model-modal-backdrop" onMouseDown={onClose}>
      <section
        aria-describedby="system-model-summary"
        aria-labelledby="system-model-title"
        aria-modal="true"
        className="case-modal project-atlas-modal"
        onMouseDown={(event) => event.stopPropagation()}
        ref={dialogRef}
        role="dialog"
      >
        <div className="modal-topline">
          <span>Interactive project excavation</span>
          <button type="button" className="close-button" onClick={onClose} aria-label="Close project atlas">
            Close
          </button>
        </div>
        <p className="eyebrow">Three builds worth excavating</p>
        <h2 id="system-model-title">A 3D atlas of the work behind the resume.</h2>
        <p className="modal-summary" id="system-model-summary">
          The globe, community network, and growing system represent Earth Dashboard, RaidBase, and PlantHaven.
          Each one leads directly to a case study with technical decisions, architecture, and verified evidence.
        </p>
        <div className="project-atlas-modal-layout">
          <div className="project-atlas-modal-stage">
            <ProjectAtlasScene className="project-atlas-scene-modal" onSelectProject={onSelectProject} />
          </div>
          <div className="project-atlas-list" aria-label="Featured project atlas">
            {featuredProjects.map((project, index) => (
              <button key={project.name} type="button" onClick={() => onSelectProject(project.visual)}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{project.name}</strong>
                  <p>{project.summary}</p>
                  <small>{project.plate.metric}</small>
                </div>
              </button>
            ))}
          </div>
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
  const [activeTab, setActiveTab] = useState("overview");
  const dialogRef = useDialogFocus<HTMLElement>();

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "engineering", label: "Engineering" },
    { id: "architecture", label: "Architecture" },
    { id: "evidence", label: "Evidence" },
  ];

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <section
        className="case-modal"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        aria-describedby="case-study-summary"
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
        <p className="modal-summary" id="case-study-summary">{project.summary}</p>

        <div className="case-primary-actions">
          <a href={project.sourceHref} target="_blank" rel="noreferrer" className="button modal-source-link">
            View source code
          </a>
          <a href="/MichaelDonaldson_TechResume.pdf" download className="button modal-resume-link">
            Download resume
          </a>
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
              aria-controls="case-study-panel"
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
          id="case-study-panel"
          role="tabpanel"
        >
          {activeTab === "overview" ? (
            <div className="field-note-grid">
              <article className="field-note-card wide">
                <span>The problem</span>
                <h3>What needed to work better</h3>
                <p>{project.problem}</p>
              </article>
              <article className="field-note-card">
                <span>Ownership</span>
                <h3>My role</h3>
                <p>{project.role}</p>
              </article>
              <article className="field-note-card">
                <span>Reflection</span>
                <h3>What I learned</h3>
                <p>{project.lesson}</p>
              </article>
              <article className="field-note-card wide">
                <span>Next iteration</span>
                <h3>What I would strengthen next</h3>
                <ul className="modal-list compact-list">
                  {project.nextSteps.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          ) : null}

          {activeTab === "engineering" ? (
            <div className="engineering-panel">
              <div className="proof-ledger">
                <article>
                  <span>Engineering moves</span>
                  <ul className="modal-list compact-list">
                    {project.engineering.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
                <article>
                  <span>Interview-ready angles</span>
                  <ul className="modal-list compact-list">
                    {project.interviewAngles.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </div>
              <div className="decision-grid">
                {project.decisions.map((decision) => (
                  <article className="decision-card" key={decision.choice}>
                    <h3>{decision.choice}</h3>
                    <p>{decision.reason}</p>
                    <span>{decision.tradeoff}</span>
                  </article>
                ))}
              </div>
            </div>
          ) : null}

          {activeTab === "architecture" ? (
            <div className="architecture-panel">
              <div className={`architecture-model architecture-model-${project.visual}`} aria-label={`${project.name} interactive architecture model`}>
                <ProjectAtlasScene focusProject={project.visual} />
                <div className="architecture-model-caption">
                  <span>Live architecture model</span>
                  <strong>{project.name}</strong>
                </div>
              </div>
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

          {activeTab === "evidence" ? (
            <div className="proof-panel">
              <div className="proof-ledger">
                <article>
                  <span>Verified outcome</span>
                  <strong>{project.outcome}</strong>
                </article>
                <article>
                  <span>Repository</span>
                  <strong>Public source, project documentation, and implementation details are available on GitHub.</strong>
                  <a className="evidence-source-link" href={project.sourceHref} target="_blank" rel="noreferrer">
                    Inspect the repository
                  </a>
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
  const [projectAtlasOpen, setProjectAtlasOpen] = useState(false);

  useEffect(() => {
    if (!selectedProject && !hiringBriefOpen && !projectAtlasOpen) {
      document.body.classList.remove("modal-open");
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setHiringBriefOpen(false);
        setProjectAtlasOpen(false);
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProject, hiringBriefOpen, projectAtlasOpen]);

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
    setProjectAtlasOpen(false);
    setHiringBriefOpen(true);
  };

  const openProjectAtlas = () => {
    setSelectedProject(null);
    setHiringBriefOpen(false);
    setProjectAtlasOpen(true);
  };

  const openAtlasProject = (projectKey: ProjectModelKey) => {
    const project = featuredProjects.find((item) => item.visual === projectKey);

    if (project) {
      setProjectAtlasOpen(false);
      setHiringBriefOpen(false);
      setSelectedProject(project);
    }
  };

  return (
    <main className="site-shell">
      <a className="skip-link" href="#work">
        Skip to selected work
      </a>

      <header className="site-header" aria-label="Primary navigation">
        <FieldTagLogo />
        <nav className="nav-links" aria-label="Portfolio sections">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <button className="nav-brief" type="button" onClick={openHiringBrief}>
            Candidate brief
          </button>
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Full-Stack Software Engineer | Orlando, Florida</p>
          <h1>Michael Donaldson.</h1>
          <p className="hero-declaration">I build clear, accessible products from complex systems.</p>
          <p className="hero-subhead">
            Product-minded full-stack engineer building with React, Next.js, Node.js, PostgreSQL, Python, Java, and
            interactive 3D. <span className="hero-context">I turn messy workflows into usable software, then verify
            the result through testing, accessibility, and performance work.</span>
          </p>
          <p className="hero-status"><span aria-hidden="true" /> Open to junior and associate roles | Orlando + remote</p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button button-primary" href="#work">
              View selected work <span aria-hidden="true">-&gt;</span>
            </a>
            <a className="button button-secondary" href="/MichaelDonaldson_TechResume.pdf" target="_blank" rel="noreferrer">
              Open resume
            </a>
          </div>
          <ProfileArtifactLinks className="hero-artifact-links" hideResume />
        </div>

        <HeroProjectAtlas onOpen={openProjectAtlas} onSelectProject={openAtlasProject} />
      </section>

      <section className="proof-strip" aria-label="Portfolio proof points">
        {proofPoints.map((item) => (
          <div className="proof-item" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section-block" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Products, systems, and the decisions behind them.</h2>
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
                    <h4>Problem</h4>
                    <p>{project.problem}</p>
                  </div>
                  <div>
                    <h4>Verified outcome</h4>
                    <p>{project.outcome}</p>
                  </div>
                </div>
                <div className="stack-list" aria-label={`${project.name} technology stack`}>
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <button type="button" className="button artifact-button" onClick={() => setSelectedProject(project)}>
                    Read case study
                  </button>
                  <a className="button source-button" href={project.sourceHref} target="_blank" rel="noreferrer">
                    View source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="intro-section" aria-label="How Michael works">
        <div className="process-schematic" aria-label="Engineering loop from observation to verified outcome">
          <p className="process-schematic-label">Engineering loop</p>
          <span className="process-rail" aria-hidden="true" />
          <span className="process-pulse" aria-hidden="true" />
          {practicePrinciples.map((principle, index) => (
            <article key={principle.label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>{principle.label}</strong>
                <p>{principle.detail}</p>
              </div>
            </article>
          ))}
          <div className="process-outcome">
            <span>Outcome</span>
            <strong>Usable, verified software</strong>
          </div>
        </div>
        <div className="intro-copy">
          <p className="eyebrow">How I work</p>
          <h2>Evidence first. Then iteration.</h2>
          <p>
            Good engineering turns incomplete information into a useful, testable model. I start by understanding the
            actual problem, make the important tradeoffs visible, and build toward an outcome that can be verified.
          </p>
          <p>
            Leading teams in high-volume operations taught me how to prioritize, communicate clearly, and keep
            ownership when the work is moving quickly. I bring that same discipline to software engineering.
          </p>
        </div>
      </section>

      <section className="section-block more-work" aria-label="More projects">
        <div className="section-heading compact">
          <p className="eyebrow">Additional work</p>
          <h2>Range across desktop, marketplace, and backend systems.</h2>
        </div>
        <div className="secondary-grid">
          {secondaryProjects.map((project) => (
            <article className="secondary-card" key={project.name}>
              <p className="card-label">{project.catalog}</p>
              <h3>{project.name}</h3>
              <p className="secondary-category">{project.category}</p>
              <p className="secondary-status">{project.status}</p>
              <p>{project.summary}</p>
              <div className="stack-list quiet" aria-label={`${project.name} technology stack`}>
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a className="secondary-source-link" href={project.sourceHref} target="_blank" rel="noreferrer">
                View repository <span aria-hidden="true">-&gt;</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <ToolTray />

      <section className="section-block experience-section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Experience and education</p>
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
          <h2>Let&apos;s build something useful.</h2>
          <p>
            I am applying for junior and associate full-stack, frontend, software, and product engineering roles where
            ownership, usability, and thoughtful implementation matter.
          </p>
          <p className="availability-line"><span aria-hidden="true" /> Available for opportunities in Orlando or remote.</p>
        </div>
        <div className="contact-panel">
          <p className="contact-panel-label">Direct links</p>
          <ProfileArtifactLinks className="contact-artifact-links" />
          <button className="button contact-brief-button" type="button" onClick={openHiringBrief}>
            Review candidate brief
          </button>
          <p>Best first read: selected work, source code, resume, and the concise candidate brief.</p>
        </div>
      </section>

      <footer className="site-footer">
        <span>Michael Donaldson | Full-Stack Software Engineer</span>
        <span>Orlando, Florida | Ancient curiosity, modern systems.</span>
      </footer>

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

      {projectAtlasOpen ? (
        <ProjectAtlasModal onClose={() => setProjectAtlasOpen(false)} onSelectProject={openAtlasProject} />
      ) : null}
    </main>
  );
}
