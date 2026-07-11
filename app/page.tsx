const navItems = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const featuredProjects = [
  {
    name: "Earth 3D Dashboard",
    category: "Interactive data visualization system",
    status: "Flagship project",
    summary:
      "A browser-based 3D globe dashboard for exploring layered real-world datasets through a responsive interface.",
    role:
      "Designed the data-layer model, improved rendering performance, and added accessibility support for a visual-heavy experience.",
    impact:
      "Improved rendering performance by roughly 35% through draw-call reduction, batching, caching, and incremental loading.",
    stack: ["React", "JavaScript", "WebGL", "Data visualization", "ARIA"],
    highlights: [
      "Modular dataset toggles without forcing complete application re-renders.",
      "Semantic labels and ARIA roles for screen-reader accessibility.",
      "Performance-minded rendering strategy for dense visual layers.",
    ],
    visual: "earth",
  },
  {
    name: "RaidBase",
    category: "Community and team-finding platform",
    status: "Release-ready alpha",
    summary:
      "A full-stack platform for finding groups, forming squads, sharing clips, and building community reputation.",
    role:
      "Owned product flows across onboarding, authentication, profiles, LFG posts, squads, clips, reputation, moderation, and account lifecycle work.",
    impact:
      "Demonstrates end-to-end product development, secure user flows, relational data modeling, testing, and deployment-minded architecture.",
    stack: ["Next.js", "PostgreSQL", "Prisma", "NextAuth", "Docker", "Vitest"],
    highlights: [
      "Relational model for users, squads, clips, reputation, and moderation.",
      "Account export and deletion workflows for lifecycle completeness.",
      "Testing plan spanning unit, integration, and browser flows.",
    ],
    visual: "raidbase",
  },
  {
    name: "PlantHaven",
    category: "Full-stack e-commerce platform",
    status: "Flagship project",
    summary:
      "An API-driven commerce experience with product browsing, authentication, checkout, and order-data handling.",
    role:
      "Built protected routes, checkout flows, API state synchronization, and an indexed PostgreSQL schema.",
    impact:
      "Reduced query response time by roughly 30-40% and load time by roughly 25-35% through indexing, lazy loading, caching, and frontend optimization.",
    stack: ["React", "Supabase", "PostgreSQL", "Stripe", "REST APIs", "JWT"],
    highlights: [
      "JWT-based authentication with protected account and checkout routes.",
      "Indexed PostgreSQL schema for faster product and order queries.",
      "Performance work across lazy loading, caching, and API synchronization.",
    ],
    visual: "planthaven",
  },
];

const secondaryProjects = [
  {
    name: "DRASTIC Planner",
    category: "Desktop planning and decision-support system",
    summary:
      "Python desktop app with a modular computation engine, lightweight ETL pipeline, async processing, validation checks, and tests.",
    stack: ["Python", "PySide6", "ETL", "Desktop apps"],
  },
  {
    name: "TradeU",
    category: "Student-only skill and service exchange concept",
    summary:
      "Marketplace architecture for verified students, credit-based trades, profiles, reviews, reputation, and abuse prevention.",
    stack: ["TypeScript", "React", "Supabase", "Product strategy"],
  },
  {
    name: "PIA",
    category: "Apartment listing intelligence platform",
    summary:
      "Full-stack concept for saved searches, price-change tracking, listing scores, renter alerts, and user-specific data.",
    stack: ["Java", "React", "JWT", "Scheduled workflows"],
  },
];

const skillGroups = [
  {
    label: "Build interfaces",
    skills: ["React", "Next.js", "TypeScript", "HTML", "CSS", "Tailwind", "Responsive UI"],
  },
  {
    label: "Design APIs and data",
    skills: ["Node.js", "REST APIs", "PostgreSQL", "Supabase", "Prisma", "SQL", "Auth flows"],
  },
  {
    label: "Ship and test",
    skills: ["Git", "GitHub", "Docker", "GitHub Actions", "Vitest", "Playwright", "Validation"],
  },
  {
    label: "Optimize and secure",
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
  { value: "6", label: "portfolio projects spanning web, desktop, data, and product" },
  { value: "2027", label: "B.S. Software Engineering expected completion" },
];

type ProjectVisualProps = {
  type: string;
  label: string;
};

function ProjectVisual({ type, label }: ProjectVisualProps) {
  return (
    <div className={`project-visual project-visual-${type}`} role="img" aria-label={`${label} interface preview`}>
      {type === "earth" && (
        <div className="globe-stage" aria-hidden="true">
          <div className="globe-core">
            <span className="longitude longitude-one" />
            <span className="longitude longitude-two" />
            <span className="latitude latitude-one" />
            <span className="latitude latitude-two" />
            <span className="data-ping data-ping-one" />
            <span className="data-ping data-ping-two" />
            <span className="data-ping data-ping-three" />
          </div>
          <div className="layer-panel">
            <span>Terrain</span>
            <span>Weather</span>
            <span>Traffic</span>
          </div>
        </div>
      )}
      {type === "raidbase" && (
        <div className="product-surface" aria-hidden="true">
          <div className="surface-rail">
            <span />
            <span />
            <span />
          </div>
          <div className="surface-main">
            <div className="squad-card strong" />
            <div className="squad-card" />
            <div className="squad-row" />
            <div className="squad-row short" />
          </div>
          <div className="surface-side">
            <div />
            <div />
          </div>
        </div>
      )}
      {type === "planthaven" && (
        <div className="commerce-surface" aria-hidden="true">
          <div className="product-tile tall" />
          <div className="product-tile" />
          <div className="checkout-panel">
            <span />
            <span />
            <span className="checkout-total" />
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <a className="skip-link" href="#work">
        Skip to selected work
      </a>

      <header className="site-header" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="Michael Donaldson home">
          <span>MD</span>
        </a>
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
          <h1>I build fast, accessible software that turns complex workflows into clear experiences.</h1>
          <p className="hero-subhead">
            Full-stack developer and software engineering student with experience across React, Node.js, PostgreSQL,
            Python, WebGL, authentication, APIs, and performance-focused product development.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button button-primary" href="#work">
              View selected work <span aria-hidden="true">-&gt;</span>
            </a>
            <a className="button button-secondary" href="/MichaelDonaldson_TechResume.pdf">
              Download resume
            </a>
          </div>
          <div className="utility-links" aria-label="Profile links">
            <a href="https://github.com/Michael-Blake-Donaldson" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="mailto:blake18465@gmail.com">Email</a>
            <span>LinkedIn ready to add</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Data globe visual">
          <div className="hero-grid" aria-hidden="true" />
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="hero-globe" aria-hidden="true">
            <span className="hero-longitude one" />
            <span className="hero-longitude two" />
            <span className="hero-latitude one" />
            <span className="hero-latitude two" />
            <span className="hero-route route-one" />
            <span className="hero-route route-two" />
            <span className="hero-node node-one" />
            <span className="hero-node node-two" />
            <span className="hero-node node-three" />
          </div>
          <div className="signal-card signal-card-top">
            <span>Layer system</span>
            <strong>3 active datasets</strong>
          </div>
          <div className="signal-card signal-card-bottom">
            <span>Render pass</span>
            <strong>35% faster</strong>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Portfolio proof points">
        {proofPoints.map((item) => (
          <div className="proof-item" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="intro-section" aria-label="About Michael">
        <p>
          I enjoy building products that feel thoughtful from the first interaction to the underlying data model. My
          work includes full-stack web platforms, interactive 3D dashboards, desktop decision-support tools, and product
          concepts designed around real user problems.
        </p>
        <p>
          Alongside software development, I have led large teams in high-volume operations. That background shapes how I
          approach ownership, communication, prioritization, and measurable execution.
        </p>
      </section>

      <section className="section-block" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Flagship projects with real engineering decisions behind the interface.</h2>
        </div>

        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.name}>
              <ProjectVisual type={project.visual} label={project.name} />
              <div className="project-content">
                <div className="project-kicker">
                  <span>{project.category}</span>
                  <span>{project.status}</span>
                </div>
                <h3>{project.name}</h3>
                <p className="project-summary">{project.summary}</p>
                <div className="project-detail-grid">
                  <div>
                    <h4>Role</h4>
                    <p>{project.role}</p>
                  </div>
                  <div>
                    <h4>Technical highlight</h4>
                    <p>{project.impact}</p>
                  </div>
                </div>
                <ul className="highlight-list">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="stack-list" aria-label={`${project.name} technology stack`}>
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <p className="links-pending">Live demos, repositories, and screenshots can be wired in as they are confirmed.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block more-work" aria-label="More projects">
        <div className="section-heading compact">
          <p className="eyebrow">More projects</p>
          <h2>Additional systems that show range beyond a single stack.</h2>
        </div>
        <div className="secondary-grid">
          {secondaryProjects.map((project) => (
            <article className="secondary-card" key={project.name}>
              <p className="card-label">{project.category}</p>
              <h3>{project.name}</h3>
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
          <p className="eyebrow">Skills</p>
          <h2>Grouped by how I use the technology, not by arbitrary ratings.</h2>
        </div>
        <div className="capability-grid">
          {skillGroups.map((group) => (
            <article className="capability-card" key={group.label}>
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
          <p className="eyebrow">Experience and education</p>
          <h2>Software execution backed by operations leadership.</h2>
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
          <h2>Have a product problem worth turning into software?</h2>
          <p>
            I am looking for junior, associate, frontend, full-stack, and product engineering roles where ownership,
            usability, and clean implementation matter.
          </p>
        </div>
        <div className="contact-panel">
          <a className="contact-link primary" href="mailto:blake18465@gmail.com">
            blake18465@gmail.com
          </a>
          <a className="contact-link" href="https://github.com/Michael-Blake-Donaldson" target="_blank" rel="noreferrer">
            github.com/Michael-Blake-Donaldson
          </a>
          <a className="contact-link" href="/MichaelDonaldson_TechResume.pdf">
            Download MichaelDonaldson_TechResume.pdf
          </a>
          <p>LinkedIn and project demo links are ready to add once the final URLs are confirmed.</p>
        </div>
      </section>
    </main>
  );
}
