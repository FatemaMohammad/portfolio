import { projects } from '../../data/projects';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-heading">Projects</h2>
        <ul className="projects__grid">
          {projects.map((project, index) => (
            <li key={index} className="project-card">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__role">{project.role}</p>
              <p className="project-card__description">{project.description}</p>
              {project.highlights && project.highlights.length > 0 && (
                <ul className="project-card__highlights">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>{highlight}</li>
                  ))}
                </ul>
              )}
              <ul className="project-card__tags">
                {project.tags.map((tag) => (
                  <li key={tag} className="project-card__tag">
                    {tag}
                  </li>
                ))}
              </ul>
              {project.scope && <p className="project-card__scope">{project.scope}</p>}
              {(project.repoUrl || project.liveUrl) && (
                <div className="project-card__links">
                  {project.repoUrl && (
                    <a href={project.repoUrl} className="project-card__link">
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="project-card__link">
                      Live
                    </a>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
