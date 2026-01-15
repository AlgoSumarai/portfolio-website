import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of your first project and the technologies used.',
      tags: ['React', 'CSS']
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A brief description of your second project and its key features.',
      tags: ['JavaScript', 'HTML']
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A brief description of your third project and what makes it unique.',
      tags: ['Node.js', 'React']
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
