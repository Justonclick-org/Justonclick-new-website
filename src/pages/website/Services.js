import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Factory,
  HelpCircle,
  Layers,
  Package,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { SERVICES, SERVICE_GROUPS } from "./servicesData"; // adjust path if needed
import heroImg from "../../components/assets/services_img.jpg";
import "./Services.css";
import "./Pages.css"; // adjust if Page.css is in a different location

const delay = (i) => ({ transitionDelay: `${Math.min(i, 7) * 80}ms` });

function ServiceBlock({ service, index }) {
  const [openFaq, setOpenFaq] = useState(0);
  const Icon = service.icon;
  const flip = index % 2 === 1;

  return (
    <article
      id={service.id}
      className={`jocservices-block ${flip ? "jocservices-block-alt" : ""}`}
    >
      <Container>
        <div className="jocservices-block-head joc-reveal joc-rv-blur">
          <span className="jocservices-block-num">{service.num}</span>
          <div className="jocservices-block-icon">
            <Icon size={24} />
          </div>
          <div>
            <span className="jocservices-tag">{service.group}</span>
            <h2 className="jocservices-block-title">{service.title}</h2>
          </div>
        </div>

        <p className="jocservices-overview joc-reveal joc-rv-left">{service.overview}</p>

        <Row className="g-4 jocservices-panels">
          <Col lg={6}>
            <div className="jocservices-panel joc-reveal joc-rv-tilt">
              <span className="joc-bubble" />
              <h3>
                <Sparkles size={17} /> Business Benefits
              </h3>
              <ul className="jocservices-check">
                {service.benefits.map((b) => (
                  <li key={b}>
                    <CheckCircle2 size={16} /> <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          <Col lg={6}>
            <div className="jocservices-panel joc-reveal joc-rv-right">
              <span className="joc-bubble joc-bubble-orange" />
              <h3>
                <Workflow size={17} /> Our Process
              </h3>
              <ol className="jocservices-steps">
                {service.process.map((p, i) => (
                  <li key={p} style={delay(i)}>
                    <span className="jocservices-step-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Col>

          <Col lg={6}>
            <div className="jocservices-panel joc-reveal joc-rv-zoom">
              <h3>
                <Layers size={17} /> Technologies Used
              </h3>
              <div className="jocservices-chips">
                {service.tech.map((t, i) => (
                  <span className="jocservices-chip" key={t} style={delay(i)}>
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="jocservices-subhead">
                <Factory size={17} /> Industries We Apply This To
              </h3>
              <div className="jocservices-chips">
                {service.industries.map((t, i) => (
                  <span
                    className="jocservices-chip jocservices-chip-orange"
                    key={t}
                    style={delay(i)}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="jocservices-panel joc-reveal joc-rv-skew">
              <h3>
                <Package size={17} /> Deliverables
              </h3>
              <ul className="jocservices-deliverables">
                {service.deliverables.map((d, i) => (
                  <li key={d} style={delay(i)}>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>

        <div className="jocservices-faqs joc-reveal joc-rv-drop">
          <h3>
            <HelpCircle size={17} /> FAQs
          </h3>
          {service.faqs.map((f, i) => (
            <div
              className={`jocservices-faq ${openFaq === i ? "is-open" : ""}`}
              key={f.q}
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              >
                <span>{f.q}</span>
                <ChevronDown size={18} />
              </button>
              <div className="jocservices-faq-body">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="jocservices-block-cta joc-reveal joc-rv-spin">
          <Link to="/contact" className="jocpage-btn">
            {service.cta} <ArrowRight size={17} />
          </Link>
        </div>
      </Container>
    </article>
  );
}

function Services() {
  useScrollReveal();
  const [group, setGroup] = useState("All");

  const filtered = useMemo(
    () => (group === "All" ? SERVICES : SERVICES.filter((s) => s.group === group)),
    [group]
  );

  return (
    <main className="jocservices-wrap">
      {/* Hero */}
      <section className="jocservices-hero">
        <span className="jocservices-hero-grid" />
        <span className="jocservices-blob jocservices-blob-a" />
        <span className="jocservices-blob jocservices-blob-b" />
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <span className="jocpage-eyebrow">23 service lines</span>
              <h1 className="jocservices-hero-title">
                Services built around <span>your business</span>, not a template
              </h1>
              <p className="jocpage-text">
                From custom software and cloud to AI, quality engineering, and
                dedicated teams — every engagement is scoped, built, and supported
                by the same team that runs our own products in production.
              </p>
              <div className="jocpage-actions">
                <Link to="/contact" className="jocpage-btn">
                  Schedule Consultation <ArrowRight size={17} />
                </Link>
                <a href="#service-index" className="jocpage-btn-ghost">
                  Explore all 23 services
                </a>
              </div>
              <div className="jocservices-hero-stats">
                <div>
                  <strong>23</strong>
                  <span>Service lines</span>
                </div>
                <div>
                  <strong>17+</strong>
                  <span>Industries served</span>
                </div>
                <div>
                  <strong>End-to-end</strong>
                  <span>Spec to support</span>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="jocservices-hero-visual joc-reveal joc-rv-zoom">
                <img
                  src={heroImg}
                  alt="Justonclick engineering services"
                  width={1280}
                  height={960}
                />
                <span className="jocservices-hero-chip jocservices-hero-chip-1">
                  Secure by design
                </span>
                <span className="jocservices-hero-chip jocservices-hero-chip-2">
                  100% code ownership
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Index / filter */}
      <section id="service-index" className="jocservices-index">
        <Container>
          <div className="text-center">
            <span className="jocpage-eyebrow">Service catalog</span>
            <h2 className="jocservices-heading joc-reveal joc-rv-blur">
              Pick the capability you need
            </h2>
          </div>

          <div className="jocservices-filters joc-reveal joc-rv-drop">
            {SERVICE_GROUPS.map((g) => (
              <button
                key={g}
                type="button"
                className={`jocservices-filter ${group === g ? "is-active" : ""}`}
                onClick={() => setGroup(g)}
              >
                {g}
              </button>
            ))}
          </div>

          <Row className="g-4">
            {filtered.map((s, i) => {
              const Icon = s.icon;
              return (
                <Col md={6} lg={4} key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="jocservices-card joc-reveal joc-rv-flip"
                    style={delay(i)}
                  >
                    <span className="joc-bubble" />
                    <span className="jocservices-card-num">{s.num}</span>
                    <div className="jocservices-card-icon">
                      <Icon size={22} />
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.overview}</p>
                    <span className="jocservices-card-link">
                      View details <ArrowRight size={15} />
                    </span>
                  </a>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* Detailed sections */}
      {SERVICES.map((s, i) => (
        <ServiceBlock key={s.id} service={s} index={i} />
      ))}

      {/* Closing CTA */}
      <section className="jocservices-cta">
        <Container>
          <div className="jocservices-cta-inner joc-reveal joc-rv-zoom">
            <h2>Not sure which service fits?</h2>
            <p>
              Tell us the problem you're trying to solve. We'll map it to the right
              engagement model — or tell you honestly if you don't need one.
            </p>
            <div className="jocpage-actions justify-content-center">
              <Link to="/contact" className="jocpage-btn">
                Schedule Consultation <ArrowRight size={17} />
              </Link>
              <Link to="/products" className="jocpage-btn-ghost">
                See our products
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Services;