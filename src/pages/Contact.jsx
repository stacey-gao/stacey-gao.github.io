import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Contact() {
  return (
    <section className="page-section contact-page">
      <Container fluid className="px-4 px-lg-5">
        <Row className="justify-content-center">
          <Col lg={7}>
            <p className="page-eyebrow">Contact</p>
            <h1 className="page-title">Let&apos;s work together!</h1>
            <p className="page-lead">
              Have a project in mind or want to collaborate? Email me directly
              or message me on LinkedIn.
            </p>

            <div className="contact-details">
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:staceyg176@gmail.com">staceyg176@gmail.com</a>
              </p>
              <p>
                <strong>LinkedIn:</strong>{' '}
                <a
                  href="https://www.linkedin.com/in/stacey-gao/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/stacey-gao
                </a>
              </p>
              <p>
                <strong>Github:</strong>{' '}
                <a
                  href="https://github.com/stacey-gao"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/stacey-gao
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
