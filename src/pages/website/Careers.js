import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  FileText,
  Layers,
  Mail,
  MapPin,
  Rocket,
  Search,
  ShieldCheck,
} from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { CONTACT } from "../../utils/constants";
import "./Pages.css";
import "./Careers.css";

const delay = (i) => ({ transitionDelay: `${Math.min(i, 6) * 90}ms` });

const WHY = [
  {
    icon: Rocket,
    title: "Work on software that's live",
    text: "We run our own HRMS & Payroll platform in production. What you build gets used by real people, not parked after a demo.",
  },
  {
    icon: Layers,
    title: "Own the whole picture",
    text: "Requirements, architecture, build, release, and support: you see how your decisions play out after launch.",
  },
  {
    icon: Code2,
    title: "A modern, practical stack",
    text: "React, Node.js, Python, cloud, DevOps, and AI, chosen because they hold up in production, not because they're trendy.",
  },
  {
    icon: ShieldCheck,
    title: "Standards that don't bend",
    text: "Reviewed architecture, secure SDLC, and automated testing on every engagement, client work or our own product.",
  },
];

/**
 * Open roles. Add an entry here to publish a position, e.g.
 * { title: "React Developer", type: "Full-time", location: "Pune / Hybrid",
 *   summary: "One or two lines on the role.", skills: ["React", "TypeScript"] }
 */
const OPENINGS = [];

const STEPS = [
  {
    icon: FileText,
    title: "Send your CV",
    text: "Email your CV, plus a GitHub, portfolio, or project link if you have one.",
  },
  {
    icon: Search,
    title: "We review it",
    text: "We read every application against current and upcoming work.",
  },
  {
    icon: BriefcaseBusiness,
    title: "We get in touch",
    text: "If there's a fit, we'll reach out to set up a conversation.",
  },
];

const applyHref = (role) =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    role ? `Application: ${role}` : "General application — Justonclick careers"
  )}`;

function Careers() {
  useScrollReveal();

  return (
    <main className="joccareers-wrap">
      {/* Hero */}
      <section className="jocpage-hero">
        <span className="jocpage-hero-grid" />
        <Container>
          <div className="jocpage-hero-inner">
            <span className="jocpage-eyebrow joc-reveal joc-rv-drop">Careers</span>
            <h1 className="jocpage-title joc-reveal joc-rv-blur" style={delay(1)}>
              <span>Build software people rely on every day.</span>
            </h1>
            <p className="jocpage-text joc-reveal joc-rv-left" style={delay(2)}>
              Justonclick is a Pune-based engineering company building client platforms and our
              own production software. If you care about doing the work properly, from first
              requirement to long after launch, we'd like to hear from you.
            </p>
            <div className="jocpage-actions joc-reveal joc-rv-zoom" style={delay(3)}>
              <a href="#openings" className="jocpage-btn">
                See Open Positions <ArrowRight size={17} />
              </a>
              <a href={applyHref()} className="jocpage-btn-ghost">
                Send Your CV
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Why */}
      <section className="joccareers-section">
        <Container>
          <span className="joccareers-eyebrow joc-reveal joc-rv-left">Why Justonclick</span>
          <h2 className="joccareers-heading joc-reveal joc-rv-left" style={delay(1)}>
            Engineering you can see in production
          </h2>
          <Row className="g-4 mt-1">
            {WHY.map((w, i) => (
              <Col key={w.title} md={6} xl={3}>
                <div className="joccareers-card joc-reveal joc-rv-flip" style={delay(i)}>
                  <span className={`joc-bubble${i % 2 ? " joc-bubble-orange" : ""}`} />
                  <span className="joccareers-card-icon">
                    <w.icon size={22} />
                  </span>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Openings */}
      <section className="joccareers-section joccareers-section-alt" id="openings">
        <Container>
          <span className="joccareers-eyebrow joc-reveal joc-rv-left">Open Positions</span>
          <h2 className="joccareers-heading joc-reveal joc-rv-left" style={delay(1)}>
            Current openings
          </h2>

          {OPENINGS.length ? (
            <Row className="g-4 mt-1">
              {OPENINGS.map((job, i) => (
                <Col key={job.title} lg={6}>
                  <div className="joccareers-job joc-reveal joc-rv-zoom" style={delay(i)}>
                    <h3>{job.title}</h3>
                    <div className="joccareers-job-meta">
                      <span>
                        <BriefcaseBusiness size={14} /> {job.type}
                      </span>
                      <span>
                        <MapPin size={14} /> {job.location}
                      </span>
                    </div>
                    <p>{job.summary}</p>
                    {job.skills?.length ? (
                      <div className="joccareers-skills">
                        {job.skills.map((s) => (
                          <span key={s}>{s}</span>
                        ))}
                      </div>
                    ) : null}
                    <a href={applyHref(job.title)} className="jocpage-btn">
                      Apply Now <ArrowRight size={16} />
                    </a>
                  </div>
                </Col>
              ))}
            </Row>
          ) : (
            <div className="joccareers-empty joc-reveal joc-rv-blur">
              <span className="joccareers-card-icon">
                <BriefcaseBusiness size={22} />
              </span>
              <div>
                <h3>No open positions right now</h3>
                <p>
                  We're always glad to hear from strong engineers, designers, and QA
                  professionals. Send your CV and we'll keep it on file for upcoming roles.
                </p>
              </div>
              <a href={applyHref()} className="jocpage-btn">
                Send Your CV <Mail size={16} />
              </a>
            </div>
          )}
        </Container>
      </section>

      {/* How to apply */}
      <section className="joccareers-section">
        <Container>
          <span className="joccareers-eyebrow joc-reveal joc-rv-left">How to Apply</span>
          <h2 className="joccareers-heading joc-reveal joc-rv-left" style={delay(1)}>
            Three simple steps
          </h2>
          <Row className="g-4 mt-1">
            {STEPS.map((s, i) => (
              <Col key={s.title} md={4}>
                <div className="joccareers-step joc-reveal joc-rv-skew" style={delay(i)}>
                  <span className="joccareers-step-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="joccareers-card-icon">
                    <s.icon size={20} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Col>
            ))}
          </Row>
          <p className="joccareers-note joc-reveal joc-rv-blur">
            <Mail size={16} /> Applications go to{" "}
            <a href={applyHref()}>{CONTACT.email}</a> · <MapPin size={16} /> Office in Pimple
            Nilakh, Pune
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="joccareers-section joccareers-section-alt">
        <Container>
          <div className="joccareers-cta joc-reveal joc-rv-zoom">
            <h2>Want to see the kind of work we do?</h2>
            <p>Look at the products we run and the projects we've delivered.</p>
            <div className="jocpage-actions justify-content-center">
              <Link to="/case-studies" className="jocpage-btn">
                See Our Work <ArrowRight size={17} />
              </Link>
              <Link to="/about" className="jocpage-btn-ghost">
                About Justonclick
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Careers;
