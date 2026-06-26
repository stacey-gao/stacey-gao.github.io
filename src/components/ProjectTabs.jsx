import { useMemo, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import { getProjectsByTab, TAB_TYPES } from '../data/projects';
import ProjectCard from './ProjectCard';

const TAB_OPTIONS = [
  { key: TAB_TYPES.DEV, label: 'Developer focused Projects' },
  { key: TAB_TYPES.UX, label: 'UX focused Projects' },
  
];

export default function ProjectTabs() {
  const [activeTab, setActiveTab] = useState(TAB_TYPES.UX);

  const sortedProjects = useMemo(
    () => getProjectsByTab(activeTab),
    [activeTab],
  );

  return (
    <section id="portfolio" className="portfolio-section pb-5">
      <Container fluid className="px-4 px-lg-5">
        <Nav
          variant="pills"
          className="portfolio-tabs justify-content-center mb-4 mb-lg-5"
          activeKey={activeTab}
          onSelect={(key) => setActiveTab(key)}
        >
          {TAB_OPTIONS.map(({ key, label }) => (
            <Nav.Item key={key}>
              <Nav.Link eventKey={key}>{label}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <Row className="g-4 g-lg-5">
          {sortedProjects.map((project) => (
            <Col key={`${activeTab}-${project.id}`} xs={12}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
