import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { ArrowRight } from "lucide-react";
import Seo from "../../components/Seo";
import "./Pages.css";

function NotFound() {
  return (
    <main>
      <Seo
        title="Page not found | Justonclick"
        description="The page you were looking for doesn't exist. Explore Justonclick's services, products and case studies."
        path="/404"
        noindex
      />
      <section className="jocpage-hero">
        <span className="jocpage-hero-grid" />
        <Container>
          <div className="jocpage-hero-inner">
            <span className="jocpage-eyebrow">Error 404</span>
            <h1 className="jocpage-title">
              <span>This page doesn't exist.</span>
            </h1>
            <p className="jocpage-text">
              The link may be out of date, or the address may have a typo. Here are a few places to
              start instead.
            </p>
            <div className="jocpage-actions">
              <Link to="/" className="jocpage-btn">
                Back to home <ArrowRight size={17} />
              </Link>
              <Link to="/services" className="jocpage-btn-ghost">
                Our services
              </Link>
              <Link to="/contact" className="jocpage-btn-ghost">
                Contact us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default NotFound;
