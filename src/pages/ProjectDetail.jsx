import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import {
  getNextProject,
  getProjectById,
} from '../data/projects';

const TOOL_LABELS = {
  figma: 'Figma',
  photoshop: 'Photoshop',
  illustrator: 'Illustrator',
  indesign: 'InDesign',
  react: 'React',
  node: 'Node.js',
  java: 'Java',
};

export default function ProjectDetail() {
  const { projectId } = useParams();

  const project = getProjectById(projectId);

  if (!project) {
    return (
      <section className="page-section project-detail-page">
        <Container fluid className="px-4 px-lg-5">
          <h1 className="page-title">
            Project not found
          </h1>

          <Link
            to="/"
            className="project-back-link"
          >
            ← Back to portfolio
          </Link>
        </Container>
      </section>
    );
  }

  const nextProject = getNextProject(project.id);

  return (
    <section className="page-section project-detail-page">
      <Container fluid className="px-4 px-lg-5">

        <Link
          to="/"
          className="project-back-link"
        >
          ← Back to portfolio
        </Link>

        <div className="project-detail-content">

          <p className="page-eyebrow">
            {project.subtitle}
          </p>

          <h1 className="page-title">
            {project.title}
          </h1>

          <p className="page-lead">
            {project.description}
          </p>

          {project.dateRange && (
            <p className="project-detail-meta">
              {project.dateRange}
            </p>
          )}
          {project.details.heroImage && (
            <img
              src={project.details.heroImage}
              alt={project.title}
              className="project-hero-image"
            />
          )}

          {project.details.sections.map(
            (section) => (
              <div
                key={section.title}
                className="project-detail-section"
              >
                <h2>{section.title}</h2>

                <div
                  className="section-content"
                  dangerouslySetInnerHTML={{ __html: section.text }}
                />
                
                {section.image && (
                  <img
                    src={section.image}
                    alt={section.title}
                    className="project-section-image"
                  />
                )}

                

                
              </div>
            )
          )}

          <div className="project-detail-section">
            <h2>What I Learned</h2>

            <ul className="highlights-list">
              {project.details.highlights.map(
                (item) => (
                  <li key={item}>{item}</li>
                )
              )}
            </ul>
          </div>

          {project.tools?.length > 0 && (
            <div className="project-detail-section">
              <h2>Tools / Tech Stack</h2>

              <div className="project-tool-tags">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="tool-tag"
                  >
                    {TOOL_LABELS[tool] || tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.prototypeUrl && (
            <div className="project-detail-section">
              <h2>Final Prototype</h2>

              <iframe
                title={`${project.title} prototype`}
                className="project-prototype-frame"
                src={project.prototypeUrl}
                allowFullScreen
              />
            </div>
          )}

        </div>

        <div className="project-detail-footer">

          <Link
            to={`/projects/${nextProject.id}`}
            className="project-footer-link"
          >
            <span className="project-footer-label">
              Next Project
            </span>

            <span className="project-footer-title">
              {nextProject.title}
            </span>

            <span className="project-footer-arrow">
              →
            </span>
          </Link>

          <Link
            to="/contact"
            className="project-footer-link contact"
          >
            <span className="project-footer-label">
              Get in Touch
            </span>

            <span className="project-footer-title">
              Contact Me!
            </span>

            <span className="project-footer-arrow">
              →
            </span>
          </Link>

        </div>

      </Container>
    </section>
  );
}

