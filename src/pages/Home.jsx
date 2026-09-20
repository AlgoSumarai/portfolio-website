import { base, profile, projects, skills, experience } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";


const scrollToSection = (e, id) => {
  e.preventDefault();

  document.querySelector(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

function SectionHeading({ number, label, title, children }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> / {label}
        </p>
        <h2>{title}</h2>
      </div>
      {children && <p className="section-description">{children}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="location-dot" /> JOHANNESBURG, SOUTH AFRICA
            </p>
            <h1 id="hero-title">
              Sennelo Mulanga
              <br />
              <span>Gundo.</span>
            </h1>
            <p className="professional-title">
              Junior Software Engineer <span>/</span> Backend & Full-Stack
            </p>
            <p className="hero-description">
              Driven by a genuine passion for building with code.
              <br className="desktop-break" /> Writing code that contributes to meaningful solutions 
              for real-world problems.
            </p>

            <p className="core-stack">
              C# / .NET <span>·</span> PHP / Laravel <span>·</span> SQL{" "}
              <span>·</span> React / TypeScript
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects" 
              onClick={(e) => scrollToSection(e, "#projects")}>
                View projects <span aria-hidden="true">↓</span>
              </a>
              <a className="button button-outline" href={profile.resume}>
                View resume <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="hero-socials">
              <a href={profile.github}>
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a href={profile.linkedin}>
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a href="#contact">
                Contact me <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <aside className="profile-card" aria-label="Professional profile">
            <div className="portrait-wrap">
              <img
                src={`${base}images/graduation_image.svg`}
                alt="Sennelo Mulanga Gundo at his University of Johannesburg graduation"
                width="269"
                height="320"
                fetchPriority="high"
              />
              <span className="portrait-caption">
                UNIVERSITY OF JOHANNESBURG · 2025
              </span>
            </div>
            <div className="profile-card-copy">
              <span className="eyebrow">ENGINEERING FOCUS</span>
              <p>
                Backend foundations.
                <br />
                Full-stack delivery.
              </p>
              <span>APIs · Data models · User interfaces</span>
            </div>
          </aside>
        </div>
        <div className="snapshot" aria-label="Professional snapshot">
          <div>
            <span className="snapshot-label">PROFESSIONAL EXPERIENCE</span>
            <strong>
              TheRad <span>/ Junior Software Engineer</span>
            </strong>
            <p>Laravel ERP modules & production support</p>
          </div>
          <div>
            <span className="snapshot-label">END-TO-END OWNERSHIP</span>
            <strong>Math Learning Platform</strong>
            <p>Architecture, implementation & deployment</p>
          </div>
          <div>
            <span className="snapshot-label">EDUCATION</span>
            <strong>BSc Information Technology</strong>
            <p>University of Johannesburg · 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section container" id="projects">
      <SectionHeading
        number="01"
        label="SELECTED WORK"
        title="Engineering, in practice."
      >
        Three projects. Different problems.
        <br />A closer look at the systems behind them.
      </SectionHeading>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="additional-projects">
        <h3>Also built</h3>
        <article>
          <span className="eyebrow">COMMERCE · ASP.NET MVC</span>
          <h4>OJGroceries</h4>
          <p>
            A full-stack e-commerce application with authentication, product,
            order and user workflows backed by SQL Server.
          </p>
          <a href="https://youtu.be/ZOF0NhomNN0">
            Watch project walkthrough <span aria-hidden="true">↗</span>
          </a>
        </article>
        <article>
          <span className="eyebrow">MACHINE LEARNING · PYTHON</span>
          <h4>SnakeAI</h4>
          <p>
            A reinforcement learning project with PyTorch: state encoding,
            replay memory and a training loop for an AI-controlled Snake game.
          </p>
          <a href="https://github.com/AlgoSumarai/snake-ai-pytorch">
            Explore repository <span aria-hidden="true">↗</span>
          </a>
        </article>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container section">
        <SectionHeading
          number="02"
          label="PROFESSIONAL EXPERIENCE"
          title="Software beyond the project repo."
        />
        <div className="experience-grid">
          <div className="role-heading">
            <span className="eyebrow">{experience.dates}</span>
            <h3>{experience.company}</h3>
            <p>{experience.title}</p>
            <span className="role-location">{experience.location}</span>
            <div className="role-stack">
              PHP / Laravel
              <br />
              Filament · SQL
              <br />
              JavaScript · Joomla
            </div>
          </div>
          <div className="experience-points">
            {experience.points.map(([title, text], index) => (
              <article key={title}>
                <span aria-hidden="true">0{index + 1}</span>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section container" id="skills">
      <SectionHeading
        number="03"
        label="TECHNICAL TOOLKIT"
        title="Skills with context."
      >
        Core technologies, connected to the work
        <br />
        where I’ve used them.
      </SectionHeading>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <article key={skill.name}>
            <span className="skill-index">0{index + 1}</span>
            <h3>{skill.name}</h3>
            <p>{skill.items}</p>
            <a href={skill.href}>
              {skill.evidence} <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
      <p className="skills-footnote">
        Also in my toolkit: Java, Python, Node.js / Express and Linux
        fundamentals. <a href={profile.resume}>See the full resume ↗</a>
      </p>
    </section>
  );
}

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container section">
        <SectionHeading
          number="04"
          label="BACKGROUND & APPROACH"
          title="A solid foundation. A practical mindset."
        />
        <div className="about-grid">
          <article className="education-card">
            <span className="eyebrow">EDUCATION</span>
            <h3>
              Bachelor of Science
              <br />
              in Information Technology
            </h3>
            <p>University of Johannesburg</p>
            <div className="education-meta">
              <span>Feb 2021 — Jul 2025</span>
              <span>Auckland Park, Johannesburg</span>
            </div>
            <a href={profile.resume}>View qualifications in resume ↗</a>
          </article>
          <div className="about-copy">
            <h3>Backend-focused. Comfortable across the stack.</h3>
            <p>
              My work connects relational data, backend logic and the interfaces
              people use. At TheRad, that meant manufacturing ERP workflows,
              production debugging and independently delivering a maths learning
              platform.
            </p>
            <p>
              My projects extend that foundation: separating long-running
              analysis from web requests in ChessLens, and separating algorithm
              logic from visualisation in AlgoDojo.
            </p>
            <p>
              I bring that practical approach to junior software engineering
              work: understand the problem, model the data, make behaviour
              clear, and follow the implementation through testing and delivery.
            </p>
            <a className="text-link" href="#contact">
              Discuss a backend or full-stack opportunity{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">05 / LET’S TALK</p>
          <h2>
            Useful software starts
            <br />
            with a conversation.
          </h2>
          <p>
            Have a junior backend or full-stack opportunity?
            <br />
            Let’s discuss the team, the problems and the work.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="contact-options">
          <a href={profile.linkedin}>
            <span>Connect on LinkedIn</span>
            <span aria-hidden="true">↗</span>
          </a>
          <a href={profile.github}>
            <span>Explore my GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>
          <a href={profile.resume} download>
            <span>
              Download resume <small>PDF</small>
            </span>
            <span aria-hidden="true">↓</span>
          </a>
          <a href={`tel:${profile.phone}`}>
            <span>069 794 9195</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {

  return (
    <>
      <main id="main">
        <div id="top" />
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <footer className="container footer">
        <p>
          <strong>SM.</strong> Sennelo Mulanga Gundo
        </p>
        <span>Johannesburg, South Africa</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
