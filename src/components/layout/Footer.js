import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import logo from "../assets/Justonclick-final.png";
import "./Footer.css";

const COMPANY = [
  { label: "About Us", to: "/about" },
  { label: "Careers", to: "/careers" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Blog & Insights", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const EXPERTISE = [
  { label: "Custom Software Development", to: "/services" },
  { label: "Cloud Solutions", to: "/services" },
  { label: "AI & Machine Learning", to: "/services" },
  { label: "Mobile App Development", to: "/services" },
  { label: "Dedicated Teams", to: "/services" },
  { label: "Technologies", to: "/technologies" },
];

function Footer() {
  return (
    <footer className="jocfoot-wrap">
      <span className="jocfoot-glow jocfoot-glow-a" />
      <span className="jocfoot-glow jocfoot-glow-b" />

      <Container className="jocfoot-inner">
        <Row className="g-5">
          {/* Brand Column */}
          <Col lg={4} md={12}>
            <img src={logo} alt="Justonclick logo" className="jocfoot-logo" />
            <p className="jocfoot-about">
              Justonclick designs, builds, and operates custom software, cloud
              infrastructure, and AI-driven systems — and runs its own products
              in production every day.
            </p>
            <div className="jocfoot-social">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                In
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
              >
                X
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                Gh
              </a>
            </div>
          </Col>

          {/* Company Links */}
          <Col lg={2} sm={6}>
            <h3 className="jocfoot-title">Company</h3>
            <ul className="jocfoot-list">
              {COMPANY.map((item) => (
                <li key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Expertise Links */}
          <Col lg={3} sm={6}>
            <h3 className="jocfoot-title">Expertise</h3>
            <ul className="jocfoot-list">
              {EXPERTISE.map((item) => (
                <li key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Products & Contact */}
          <Col lg={3} sm={12}>
            <h3 className="jocfoot-title">Products & Contact</h3>
            <ul className="jocfoot-contact">
              <li>
                <a
                  href="https://hrms.justonclick.in/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  Justonclick HRMS & Payroll
                </a>
              </li>
              <li>
                <a
                  href="https://trading.justonclick.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Justonclick Trading Algo
                </a>
              </li>
              <li>
                <a href="mailto:hello@justonclick.in">hello@justonclick.in</a>
              </li>
              <li>India · Serving clients globally</li>
            </ul>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <div className="jocfoot-bottom">
          <span>© {new Date().getFullYear()} Justonclick. All rights reserved.</span>
          <span>
            <Link to="/contact">Schedule a consultation</Link>
          </span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;