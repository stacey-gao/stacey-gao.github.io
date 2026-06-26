import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProjectMockup from './ProjectMockup';

const TOOL_ICONS = {
  figma: 'bi-palette',
  photoshop: 'bi-brush',
  illustrator: 'bi-vector-pen',
  indesign: 'bi-layout-text-window',
  react: 'bi-code-slash',
  node: 'bi-server',
};

function ToolIcons({ tools }) {
  if (!tools?.length) return null;
  return (
    <div className="project-tools">
      {tools.map((tool) => (
        <span key={tool} className="tool-icon" title={tool}>
          <i className={`bi ${TOOL_ICONS[tool] || 'bi-circle'}`} />
        </span>
      ))}
    </div>
  );
}

function ProjectCardVisual({ project }) {
  if (project.cardImage) {
    return (
      <img
        src={project.cardImage}
        alt={project.title}
        className="project-card-custom-image"
      />
    );
  }

  return <ProjectMockup project={project} />;
}

function SplitCard({ project, reverse = false }) {
  const textCol = (
    <Col lg={6} className="project-text-col">
      <h2 className="project-title">{project.title}</h2>
      <p className="project-subtitle">{project.subtitle}</p>
      <p className="project-description">{project.description}</p>
      <ToolIcons tools={project.tools} />
      {project.name && (
        <div className="project-meta">
          <span>{project.name}</span>
          <span>{project.role}</span>
          <span>{project.dateRange}</span>
        </div>
      )}
      <span className="project-view-link">View project →</span>
    </Col>
  );

  const visualCol = (
    <Col lg={6} className="project-visual-col p-0">
      <ProjectCardVisual project={project} />
    </Col>
  );

  return (
    <Row className={`project-card split-card g-0 ${reverse ? 'flex-lg-row-reverse' : ''}`}>
      {textCol}
      {visualCol}
    </Row>
  );
}

function DarkCard({ project }) {
  return (
    <div
      className="project-card dark-card text-center"
      style={{ backgroundColor: project.accentColor }}
    >
      <h2 className="dark-card-title">{project.title}</h2>
      <p className="dark-card-year">{project.subtitle}</p>
      <p className="dark-card-description">{project.description}</p>
      <span className="project-view-link light">View project →</span>
    </div>
  );
}

function ImageCard({ project }) {
  return (
    <div className="project-card image-card">
      <span className="image-card-date">{project.dateRange}</span>
      <ProjectCardVisual project={project} />
      <div className="image-card-overlay">
        <h2 className="project-title">{project.title}</h2>
        <p className="project-subtitle">{project.subtitle}</p>
        <span className="project-view-link light">View project →</span>
      </div>
    </div>
  );
}

function CardContent({ project }) {
  switch (project.layout) {
    case 'split':
      return <SplitCard project={project} />;
    case 'split-reverse':
      return <SplitCard project={project} reverse />;
    case 'dark':
      return <DarkCard project={project} />;
    case 'image':
      return <ImageCard project={project} />;
    default:
      return <SplitCard project={project} />;
  }
}

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="project-card-link"
      aria-label={`View ${project.title} project details`}
    >
      <CardContent project={project} />
    </Link>
  );
}
