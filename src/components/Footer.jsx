import Container from 'react-bootstrap/Container';

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <Container fluid className="px-4 px-lg-5">
        <div className="footer-inner">
          <p className="footer-name">Contact Me</p>
          <div className="footer-links">
            <a
              href="https://www.linkedin.com/in/stacey-gao/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:staceyg176@gmail.com">staceyg176@gmail.com</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
