import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);

  return (
    <>
      <Container fluid className="container-fluid header">
        <div className="logo-wrap">
          <img
            src="/go.png"
            alt="Go"
            width={40}
            height={45}
            className="tech-logo"
          />

          <span className="plus">+</span>

          <img
            src="/react.png"
            alt="React"
            width={50}
            height={50}
            className="tech-logo react-spin"
          />

          <span className="equals">=</span>

          <img
            src="/flexed.png"
            alt="Go + React App"
            className="app-logo"
            width={80}
            height={100}
            style={{ marginTop: "-10px" }}
          />
        </div>
      </Container>

      <Container>
        <div>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              {loggedIn ? (
                <>
                  Welcome back {user.email}
                  <Link to="/logout">&nbsp; &nbsp; Logout</Link>
                </>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Header;
