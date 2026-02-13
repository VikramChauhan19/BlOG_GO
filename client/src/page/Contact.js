import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../App.css";

const Contact = () => {
  return (
    <Container className="contact-page py-5">
      <Row className="mb-4">
        <Col>
          <h1 className="contact-title">Contact</h1>
          <p className="contact-subtitle">
            Connect with me through social platforms. I’m always open to
            discussions around backend engineering, system design, and
            real-world development.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={7}>
          <div className="contact-card">
            <h4>Connect With Me</h4>

            <p className="contact-social-text">
              Follow or reach out through these platforms.
            </p>

            <div className="social-grid">
              <a
                href="https://www.linkedin.com/in/vikram19chauhan/"
                target="_blank"
                rel="noreferrer"
                className="social-item linkedin"
              >
                <i className="fab fa-linkedin-in" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/VikramChauhan19"
                target="_blank"
                rel="noreferrer"
                className="social-item github"
              >
                <i className="fab fa-github" />
                <span>GitHub</span>
              </a>

              <a
                href="https://x.com/MadaraU52802043"
                target="_blank"
                rel="noreferrer"
                className="social-item twitter"
              >
                <i className="fab fa-twitter" />
                <span>Twitter</span>
              </a>

              <a
                href="https://www.instagram.com/vikram_04.04/"
                target="_blank"
                rel="noreferrer"
                className="social-item instagram"
              >
                <i className="fab fa-instagram" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </Col>

        <Col md={5}>
          <div className="contact-info-card">
            <h4>Why Connect?</h4>
            <p>
              I write about backend engineering, Docker, Nginx, Go, and
              production-level problem solving.
            </p>
            <p>
              If you’re interested in learning or collaborating, social
              platforms are the fastest way to reach me.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
