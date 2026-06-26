import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import aboutImage from '../data/assets/pfp.png';

const skills = [
  'React & JavaScript',
  'Responsive UI with Bootstrap',
  'UX research & prototyping',
  'Design systems & Figma',
  'Accessibility (WCAG)',
  'Performance optimization',
];

export default function About() {
  return (
    <section className="page-section about-page">
      <Container fluid className="px-4 px-lg-5">
      <Row className="justify-content-center align-items-start g-4 g-lg-0">
          <Col md={5} lg={4} className="about-image-col">
            <img
              src={aboutImage}
              alt="Oops, The Picture of Me isn't Loading"
              className="about-image"
            />
          </Col>

          <Col md={7} lg={8}>
            <p className="page-eyebrow">About</p>
            <h1 className="page-title">Hello, I'm Stacey Gao!</h1>
            <p className="page-lead">
            UX Designer/ Front-end Developer native to and based in New York City
            </p>

            <div className="page-content">
              <p>
              I started off on my design path as a <strong>graphic designer</strong> in high school. After that, I went to University at Albany as a <strong>double major</strong> for Informatics
              concentrated in <strong>User Experience and Computer Science</strong>. I wanted to learn how to make and design the applications that I grew up using everyday. 
              <strong> I have done projects from ideation, to design planning and prototyping, to front-end and backend development, and final deployment.</strong>
              </p>
              <p>
              After completing these projects I have found <strong>my interests lean towards front-end and UX design</strong>. It interests me to see
              how thoughtful design can make everyday tasks simpler, more accessible, and more enjoyable. 
              Whether I'm designing wireframes, conducting research, building prototypes, developing 
              interfaces, or coding,<strong> I enjoy the process of turning complex problems into clear solutions</strong>.
              </p>

              <p>
              Outside of work, you will probably find me reading stories, learning something DIY related, or doing landscape photography at the park.
              </p>
              <p>
              </p>
              <p>
              <strong>I am currenting looking for UX design or Frontend Development roles.</strong> 
                <p>
                Contact me on <a href="https://www.linkedin.com/in/stacey-gao/">Linkedin</a> or at <a href="mailto:staceyg176@gmail.com">staceyg176@gmail.com</a>.
                </p>
              </p>
            </div>
            
            {/* <h2 className="section-heading">Check out previous works below:</h2>
            
      

            <h2 className="section-heading">My works before UX:</h2> */}


            {/* <h2 className="section-heading">Skills & tools</h2>
            <ul className="skills-list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
