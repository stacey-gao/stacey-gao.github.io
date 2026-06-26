import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const linkedInLink = {
  href: 'https://www.linkedin.com/in/stacey-gao/',
  icon: 'bi-linkedin',
  label: 'LinkedIn',
};

const githubLink = {
  href: 'https://github.com/stacey-gao',
  icon: 'bi-github',
  label: 'GitHub',
};

const navClass = ({ isActive }) =>
  isActive ? 'nav-link active' : 'nav-link';

export default function PortfolioNavbar() {
  return (
    <Navbar expand="lg" className="portfolio-nav py-3" sticky="top">
      <Container fluid className="px-4 px-lg-5">
        <Nav className="nav-left">
          <Nav.Link
            href={linkedInLink.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={linkedInLink.label}
            className="nav-link nav-link-icon"
          >
            <i className={`bi ${linkedInLink.icon}`} />
          </Nav.Link>
          <Nav.Link
            href={githubLink.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={githubLink.label}
            className="nav-link nav-link-icon"
          >
            <i className={`bi ${githubLink.icon}`} />
          </Nav.Link>
        </Nav>


        <Nav>
        <Navbar.Brand as={NavLink} to="/" className="nav-brand x">
          Stacey Gao
        </Navbar.Brand>
        </Nav>


        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-right ms-auto">
            <Nav.Link as={NavLink} to="/" end className={navClass}>
              Portfolio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className={navClass}>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className={navClass}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
