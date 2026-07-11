"use client";

import { useEffect, useState } from "react";

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

const skillGroups = [
  {
    label: "Shape interfaces",
    note: "The visible artifact",
    skills: ["React", "Next.js", "TypeScript", "HTML", "CSS", "Tailwind", "Responsive UI"],
  },
  {
    label: "Model systems",
    note: "The structure beneath",
    skills: ["Node.js", "REST APIs", "PostgreSQL", "Supabase", "Prisma", "SQL", "Auth flows"],
  },
  {
    label: "Prove the build",
    note: "The verification layer",
    skills: ["Git", "GitHub", "Docker", "GitHub Actions", "Vitest", "Playwright", "Validation"],
  },
  {
    label: "Refine behavior",
    note: "The polish pass",
    skills: ["WebGL", "Chrome DevTools", "Caching", "Accessibility", "JWT", "HTTPS", "Section 508"],
  },
];

const timeline = [
  {
    role: "Full-Stack Software Engineer Intern",
    org: "Unscripted Inc.",
    meta: "Remote | May 2024-September 2024",
    detail:
      "Contributed to full-stack development with React, REST APIs, frontend performance debugging, Agile planning, and collaborative iteration. Reduced unnecessary React re-renders and improved load time by roughly 25%.",
  },
  {
    role: "General Merchandise Manager",
    org: "Target",
    meta: "Orlando, Florida | December 2025-Present",
    detail:
      "Leads an $8M+ business area across inventory, merchandising, fulfillment, and guest experience while managing and developing approximately 30 employees. Improved inventory accuracy to 98%+ and reduced shrink by roughly 15%.",
  },
  {
    role: "Operations Coordinator",
    org: "The Walt Disney Company",
    meta: "Orlando, Florida | 2022-Present",
    detail:
      "Coordinated high-volume operations across departments, supported 50+ employees, and improved inventory accuracy by 18% through workflow optimization and consistent follow-through.",
  },
  {
    role: "B.S. Software Engineering",
    org: "Southern New Hampshire University",
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

function HeroArtifact() {
  return (
    <div className="hero-artifact" aria-label="History inspired software artifact display">
      <div className="artifact-image" aria-hidden="true" />
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

function ProjectVisual({ project }: { project: FeaturedProject }) {
  return (
    <div className={`artifact-preview artifact-${project.visual}`} role="img" aria-label={`${project.name} exhibit preview`}>
      <div className="specimen-label">
        <span>{project.specimen}</span>
        <strong>{project.era}</strong>
      </div>
      <div className="specimen-slab" aria-hidden="true">
        <span className="slab-line line-one" />
        <span className="slab-line line-two" />
        <span className="slab-line line-three" />
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
      </div>
    </div>
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
  const [activeTab, setActiveTab] = useState("problem");

  const tabs = [
    { id: "problem", label: "Problem" },
    { id: "build", label: "Build" },
    { id: "evidence", label: "Evidence" },
    { id: "stack", label: "Stack" },
    { id: "lessons", label: "Lessons" },
  ];

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
          {activeTab === "problem" ? (
            <div className="modal-grid single">
              <div>
                <h3>Problem unearthed</h3>
                <p>{project.problem}</p>
              </div>
              <div>
                <h3>Why it mattered</h3>
                <p>{project.outcome}</p>
              </div>
            </div>
          ) : null}

          {activeTab === "build" ? (
            <div className="modal-grid">
              <div>
                <h3>My role</h3>
                <p>{project.role}</p>
              </div>
              <div>
                <h3>Engineering moves</h3>
                <ul className="modal-list">
                  {project.engineering.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}

          {activeTab === "evidence" ? (
            <div className="modal-grid">
              <div>
                <h3>Measured outcome</h3>
                <p>{project.outcome}</p>
              </div>
              <div>
                <h3>Evidence log</h3>
                <ul className="modal-list">
                  {project.evidence.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}

          {activeTab === "stack" ? (
            <div>
              <h3>Tools in the tray</h3>
              <div className="stack-list modal-stack" aria-label={`${project.name} technology stack`}>
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ) : null}

          {activeTab === "lessons" ? (
            <div className="modal-grid single">
              <div>
                <h3>What this project taught me</h3>
                <p>{project.lesson}</p>
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

  useEffect(() => {
    if (!selectedProject && !hiringBriefOpen) {
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

      <section className="section-block capability-section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">Toolmarks</p>
          <h2>Grouped by how I use the technology to shape the final artifact.</h2>
        </div>
        <div className="capability-grid">
          {skillGroups.map((group) => (
            <article className="capability-card" key={group.label}>
              <p>{group.note}</p>
              <h3>{group.label}</h3>
              <div className="skill-cloud">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

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
                <p className="timeline-meta">{item.meta}</p>
                <h3>{item.role}</h3>
                <p className="timeline-org">{item.org}</p>
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
