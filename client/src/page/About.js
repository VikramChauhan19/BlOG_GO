import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../App.css";

const About = () => {
  return (
    <Container className="about-page py-5">
      <Row className="mb-5">
        <Col>
          <h1 className="about-title">About This Blog</h1>
          <p className="about-subtitle">
            A modern blogging platform focused on backend engineering,
            real-world problem solving, and clean system design.
          </p>
        </Col>
      </Row>

      <Row className="about-section">
        <Col md={8}>
          <h4>Purpose</h4>
          <p>
            This blog is built to document technical learnings, backend concepts,
            and practical experiences gained while building real applications.
            The emphasis is on correctness, scalability, and production-ready
            architecture.
          </p>
        </Col>
      </Row>

      <Row className="about-section">
        <Col md={8}>
          <h4>Technology Stack</h4>
          <ul>
            <li>Frontend: React, React Router, Bootstrap</li>
            <li>Backend: Go (Fiber)</li>
            <li>Database: MySQL with GORM</li>
            <li>Infrastructure: Docker, Nginx</li>
          </ul>
        </Col>
      </Row>

      <Row className="about-section">
        <Col md={8}>
          <h4>Engineering Principles</h4>
          <p>
            The system is designed with a clear separation of concerns,
            environment-based configuration, proper error handling, and clean
            APIs. Docker is used to ensure reproducible builds and consistent
            deployments.
          </p>
        </Col>
      </Row>

      <Row className="about-section">
        <Col md={8}>
          <h4>About the Author</h4>
          <p>
            Built by a backend-focused software engineer who prefers learning by
            building, breaking, and fixing systems. This project reflects
            hands-on experience with real backend challenges rather than toy
            examples.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
