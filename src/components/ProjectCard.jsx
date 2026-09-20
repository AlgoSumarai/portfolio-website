export default function ProjectCard({ project }) {
  return (
    <article
      className="project-card"
      id={project.id}
      aria-labelledby={`${project.id}-title`}
    >
      <div className="project-overview">
        <div className="project-identity">
          <div className="project-meta">
            <span className="project-number">{project.number}</span>
            <span>{project.category}</span>
          </div>
          <h3 id={`${project.id}-title`}>{project.name}</h3>
          <p className="project-tagline">{project.tagline}</p>
          <span className={`status ${project.demo ? "status-live" : ""}`}>
            <span aria-hidden="true">●</span> {project.status}
          </span>
          <div className="project-links">
            <a
              href={project.repo}
              aria-label={`${project.name} GitHub repository`}
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            {project.demo && (
              <a href={project.demo}>
                Live demo <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>
        <div className="project-description">
          <p>{project.description}</p>
          <ul className="highlights">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul className="tags" aria-label={`${project.name} technologies`}>
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <details className="case-study" id={`${project.id}-case-study`}>
        <summary
          aria-label={`Explore the engineering: ${project.name} case study`}
        >
          <span>
            Explore the engineering{" "}
            <span className="summary-context">/ {project.name} case study</span>
          </span>
          <span className="disclosure-icon" aria-hidden="true">
            +
          </span>
        </summary>
        <div className="case-content">
          <div className="case-intro">
            <span className="eyebrow">TECHNICAL CASE STUDY</span>
            <h4>{project.name}: from problem to implementation</h4>
            <p>{project.overview}</p>
          </div>
          <div className="case-grid">
            <div>
              <h5>My contribution</h5>
              <p>{project.contribution}</p>
            </div>
            <div>
              <h5>Requirements</h5>
              <ul>
                {project.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <figure className="architecture">
            <figcaption>
              Architecture <span>System components · explanatory diagram</span>
            </figcaption>
            <ol>
              {project.architecture.map((item, index) => (
                <li key={item}>
                  <small>0{index + 1}</small>
                  {item}
                </li>
              ))}
            </ol>
            <p>{project.architectureNote}</p>
          </figure>
          <div className="case-grid">
            {project.decisions.map(([title, text]) => (
              <div key={title}>
                <h5>{title}</h5>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="case-grid">
            <div>
              <h5>Engineering challenge & approach</h5>
              <p>{project.challenge}</p>
            </div>
            <div>
              <h5>What it delivers</h5>
              <p>{project.capabilities}</p>
            </div>
          </div>
          {project.image && (
            <figure className="project-screenshot">
              <a href={project.demo}>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  width="1520"
                  height="1180"
                />
              </a>
              <figcaption>
                AlgoDojo live interface · Bubble Sort playground
              </figcaption>
            </figure>
          )}
          <p className="learning-note">{project.learning}</p>
          <aside className="scope-note">
            <strong>Current scope</strong>
            <p>{project.limitations}</p>
          </aside>
          <div className="evidence-links">
            <span>Inspect the implementation</span>
            {project.evidence.map(([label, href]) => (
              <a href={href} key={href}>
                {label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </details>
    </article>
  );
}
