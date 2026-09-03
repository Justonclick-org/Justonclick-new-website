import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import {
  ArrowRight,
  CalendarClock,
  Compass,
  Eye,
  FlaskConical,
  Gem,
  Handshake,
  Layers,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import aboutHero from "../../components/assets/about-hero.jpg";
import "./About.css";
import "./Pages.css"; // or adjust path if Page.css is elsewhere

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    text: "The systems we build are the systems we depend on — uptime and accuracy are non-negotiable.",
  },
  {
    icon: Gem,
    title: "Craftsmanship",
    text: "We sweat the details other teams skip: loading states, edge cases, and the last 10%.",
  },
  {
    icon: Layers,
    title: "Security",
    text: "Data protection and access control are part of the architecture, not an afterthought.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    text: "We measure success by whether you'd want to work with us again, not just by delivery.",
  },
];

const TEAM = [
  {
    fn: "Engineering",
    title: "Product & Platform Engineering",
    text: "The team that designs and maintains our product architecture, from HR payroll engines to trading infrastructure.",
    icon: Workflow,
  },
  {
    fn: "Product & Design",
    title: "Product Strategy & UX",
    text: "The team that turns problems into workflows, wireframes, and interfaces that people actually enjoy using.",
    icon: Sparkles,
  },
  {
    fn: "Client Success",
    title: "Delivery & Account Management",
    text: "The team that makes sure every engagement stays on track, on scope, and on budget.",
    icon: Users,
  },
];

const TRUST = [
  {
    icon: Rocket,
    title: "We Run What We Build",
    text: "We don't just build software for clients — we operate our own HR and trading platforms in production, every day.",
  },
  {
    icon: Layers,
    title: "End-to-End Delivery",
    text: "From product strategy and design through engineering, QA, and launch, one team owns the outcome.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    text: "Security and data privacy are built into our engineering process from day one, not bolted on at the end.",
  },
  {
    icon: Eye,
    title: "Transparent Partnership",
    text: "Clear scope, honest timelines, and direct access to the people actually building your product.",
  },
];

const STANDARDS = [
  {
    icon: Compass,
    title: "Engineering Culture (3.8)",
    text: "We organize around three functions that stay close to every project rather than large, disconnected departments: Engineering, Product & Design, and Client Success. Every engagement — client work or our own products — follows the same delivery process and the same engineering standards.",
  },
  {
    icon: FlaskConical,
    title: "Innovation Philosophy (3.10)",
    text: "We treat our own products as the proving ground for new technical approaches before recommending them to a client — see Innovation Lab for current initiatives.",
  },
  {
    icon: Gem,
    title: "Quality Standards (3.11)",
    text: "Every engagement follows the same engineering standards regardless of engagement type — see Engineering Excellence for the full set of practices covering architecture, secure SDLC, testing, and reliability.",
  },
];

const delay = (i) => ({ transitionDelay: `${Math.min(i, 6) * 100}ms` });

function About() {
  useScrollReveal();

  return (
    <main className="jocabout-wrap">
      {/* hero */}
      <section className="jocpage-hero">
        <span className="jocpage-hero-grid" />
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6}>
              <div className="jocpage-hero-inner jocabout-hero-copy">
                <span className="jocpage-eyebrow joc-reveal joc-rv-drop">About Justonclick</span>
                <h1 className="jocpage-title joc-reveal joc-rv-blur" style={delay(1)}>
                  <span>Who we are, and why you can trust us with this</span>
                </h1>
                <p className="jocpage-text joc-reveal joc-rv-left" style={delay(2)}>
                  One continuous page covering our story, purpose, values, people, and standards —
                  the company behind the products we run in daily production.
                </p>
                <div className="jocpage-actions joc-reveal joc-rv-zoom" style={delay(3)}>
                  <Link to="/contact" className="jocpage-btn">
                    Schedule Consultation <ArrowRight size={17} />
                  </Link>
                  <Link to="/products" className="jocpage-btn-ghost">
                    See our products
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="jocabout-hero-visual joc-reveal joc-rv-zoom" style={delay(2)}>
                <img
                  src={aboutHero}
                  alt="Justonclick product and engineering team collaborating in the studio"
                  width={1280}
                  height={960}
                />
                <span className="jocabout-hero-chip jocabout-hero-chip-1">Products we run</span>
                <span className="jocabout-hero-chip jocabout-hero-chip-2">Pune, India</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3.1 Company Story */}
      <section className="jocabout-section">
        <Container>
          <Row className="g-4 align-items-center">
            <Col lg={5}>
              <span className="jocabout-eyebrow joc-reveal joc-rv-left">3.1 Company Story</span>
              <h2 className="jocabout-heading joc-reveal joc-rv-left" style={delay(1)}>
                We build what we use, before we sell it
              </h2>
            </Col>
            <Col lg={7}>
              <div className="jocabout-story joc-reveal joc-rv-right">
                <span className="joc-bubble" />
                <span className="joc-bubble joc-bubble-bl joc-bubble-orange" />
                <p className="jocabout-text mb-0">
                  Justonclick was founded on the belief that most software vendors never truly feel
                  the consequences of their own product decisions — because they don't use what they
                  build. We set out to be different by building real products first: an HR & Payroll
                  platform and an algorithmic trading platform, both run in daily production use
                  today. That means every design decision, every edge case, and every support
                  conversation is one we've lived through ourselves before ever offering the same
                  engineering discipline to a client.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3.2 & 3.3 Vision + Mission */}
      <section className="jocabout-section jocabout-section-alt">
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <div className="jocabout-pillar jocabout-pillar-blue joc-reveal joc-rv-tilt">
                <span className="joc-bubble" />
                <div className="jocabout-pillar-icon">
                  <Eye size={24} />
                </div>
                <h3>3.2 Vision</h3>
                <p>
                  To be the long-term technology partner that ambitious organizations choose not
                  because of a pitch, but because of what we've already built and operate ourselves.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div
                className="jocabout-pillar jocabout-pillar-orange joc-reveal joc-rv-tilt"
                style={delay(1)}
              >
                <span className="joc-bubble joc-bubble-orange" />
                <div className="jocabout-pillar-icon">
                  <Target size={24} />
                </div>
                <h3>3.3 Mission</h3>
                <p>
                  To close the gap between generic software and what a specific business actually
                  needs to operate well — through custom engineering, cloud and AI expertise, and a
                  delivery model built around outcomes rather than handoffs.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3.4 Leadership */}
      <section className="jocabout-section">
        <Container>
          <span className="jocabout-eyebrow joc-reveal joc-rv-drop">3.4 Leadership Team</span>
          <h2 className="jocabout-heading joc-reveal joc-rv-drop" style={delay(1)}>
            Presented as functional pillars, for now
          </h2>
          <p className="jocabout-note joc-reveal joc-rv-blur" style={delay(2)}>
            [Placeholder — verify before publishing] Individual leadership bios and photos are not
            published yet. Justonclick currently presents its team as three functional pillars
            rather than named individuals (see Team below). Real leadership bios will be added here
            once the company is ready to be public-facing at the individual level.
          </p>
        </Container>
      </section>

      {/* 3.5 Core Values */}
      <section className="jocabout-section jocabout-section-alt">
        <Container>
          <span className="jocabout-eyebrow joc-reveal joc-rv-zoom">3.5 Core Values</span>
          <h2 className="jocabout-heading joc-reveal joc-rv-zoom" style={delay(1)}>
            Four values that survive contact with production
          </h2>
          <Row className="g-4 mt-1">
            {VALUES.map((v, i) => (
              <Col key={v.title} md={6} xl={3}>
                <div className="jocabout-card joc-reveal joc-rv-flip" style={delay(i)}>
                  <span className={`joc-bubble${i % 2 ? " joc-bubble-orange" : ""}`} />
                  <span className="joc-bubble joc-bubble-bl" />
                  <div className="jocabout-card-icon">
                    <v.icon size={22} />
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 3.6 Timeline */}
      <section className="jocabout-section">
        <Container>
          <Row className="g-4">
            <Col lg={5}>
              <span className="jocabout-eyebrow joc-reveal joc-rv-left">3.6 Company Timeline</span>
              <h2 className="jocabout-heading joc-reveal joc-rv-left" style={delay(1)}>
                Milestones published once dated and confirmed
              </h2>
              <p className="jocabout-text joc-reveal joc-rv-left" style={delay(2)}>
                [Placeholder — verify before publishing] A dated milestone timeline (founding, first
                product launch, first client project, team growth) belongs here once specific dates
                and milestones are confirmed for public use.
              </p>
            </Col>
            <Col lg={7}>
              <div className="jocabout-timeline">
                {[
                  { t: "Founding", d: "[Insert verified date] — company founded in Pune, India." },
                  {
                    t: "First product launch",
                    d: "[Insert verified date] — Justonclick HRMS & Payroll enters production use.",
                  },
                  {
                    t: "First client project",
                    d: "[Insert verified date] — first external engagement delivered end to end.",
                  },
                  {
                    t: "Team growth",
                    d: "[Insert verified date] — Engineering, Product & Design, and Client Success established as pillars.",
                  },
                ].map((item, i) => (
                  <div
                    key={item.t}
                    className="jocabout-tl-item joc-reveal joc-rv-right"
                    style={delay(i)}
                  >
                    <strong>
                      <CalendarClock size={15} className="me-2" />
                      {item.t}
                    </strong>
                    <span>{item.d}</span>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3.7 Global Presence */}
      <section className="jocabout-section jocabout-section-alt">
        <Container>
          <div className="jocabout-presence joc-reveal joc-rv-skew">
            <span className="jocabout-presence-ring" />
            <span className="joc-bubble" />
            <span className="jocabout-eyebrow">3.7 Global Presence</span>
            <h2 className="jocabout-heading">
              <MapPin size={22} className="me-2" />
              Headquartered in Pune, Maharashtra, India
            </h2>
            <p className="jocabout-text mb-0">
              Justonclick delivers engagements remotely for clients regardless of location.
            </p>
            <p className="jocabout-note mb-0">
              [Placeholder — verify before publishing] If additional office locations exist or are
              planned, they will be listed here and on the Contact page. We do not claim a “global”
              office footprint beyond what is actually staffed.
            </p>
          </div>
        </Container>
      </section>

      {/* 3.8 / 3.10 / 3.11 standards */}
      <section className="jocabout-section">
        <Container>
          <span className="jocabout-eyebrow joc-reveal joc-rv-drop">
            Culture, innovation & quality
          </span>
          <h2 className="jocabout-heading joc-reveal joc-rv-drop" style={delay(1)}>
            One process for client work and our own products
          </h2>
          <Row className="g-4 mt-1">
            {STANDARDS.map((s, i) => (
              <Col key={s.title} md={4}>
                <div
                  className="jocabout-card jocabout-card-blue joc-reveal joc-rv-spin"
                  style={delay(i)}
                >
                  <span className="joc-bubble" />
                  <div className="jocabout-card-icon">
                    <s.icon size={22} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 3.9 Team */}
      <section className="jocabout-section jocabout-section-alt">
        <Container>
          <span className="jocabout-eyebrow joc-reveal joc-rv-left">3.9 Team</span>
          <h2 className="jocabout-heading joc-reveal joc-rv-left" style={delay(1)}>
            Three functions that stay close to every project
          </h2>
          <Row className="g-4 mt-1">
            {TEAM.map((t, i) => (
              <Col key={t.fn} md={4}>
                <div className="jocabout-team joc-reveal joc-rv-zoom" style={delay(i)}>
                  <span className={`joc-bubble${i === 1 ? " joc-bubble-orange" : ""}`} />
                  <span className="jocabout-team-fn">
                    <t.icon size={13} /> {t.fn}
                  </span>
                  <h3 className="mt-3">{t.title}</h3>
                  <p className="jocabout-text mb-0">{t.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 3.12 Why clients trust us */}
      <section className="jocabout-section">
        <Container>
          <span className="jocabout-eyebrow joc-reveal joc-rv-tilt">
            3.12 Why Clients Trust Us
          </span>
          <h2 className="jocabout-heading joc-reveal joc-rv-tilt" style={delay(1)}>
            Four reasons that hold up after launch
          </h2>
          <Row className="g-4 mt-1">
            {TRUST.map((t, i) => (
              <Col key={t.title} md={6}>
                <div
                  className={`jocabout-card joc-reveal joc-rv-${i % 2 ? "right" : "left"}`}
                  style={delay(i)}
                >
                  <span className={`joc-bubble${i % 2 ? "" : " joc-bubble-orange"}`} />
                  <div className="jocabout-card-icon">
                    <t.icon size={22} />
                  </div>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 3.13 Closing CTA */}
      <section className="jocabout-section jocabout-section-alt">
        <Container>
          <div className="jocabout-cta joc-reveal joc-rv-zoom">
            <span className="joc-bubble" />
            <span className="joc-bubble joc-bubble-bl joc-bubble-orange" />
            <h2>Have a project in mind? Let's make it click.</h2>
            <p>
              Tell us what you're building — a product, a platform, or a team extension — and we'll
              get back to you within one business day.
            </p>
            <div className="jocabout-cta-actions">
              <Link to="/contact" className="jocpage-btn">
                Schedule a Consultation <ArrowRight size={17} />
              </Link>
              <Link to="/services" className="jocpage-btn-ghost">
                View Our Services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default About;