import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import {
  ArrowRight,
  Monitor,
  ServerCog,
  Smartphone,
  Cloud,
  Database,
  Workflow,
  BrainCircuit,
  ShieldCheck,
  FlaskConical,
  Layers,
  Lock,
  Gauge,
  BadgeCheck,
} from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import heroImg from "../../components/assets/technologies-hero.jpg";
import "./Technologies.css";

const CATEGORIES = [
  {
    id: "frontend",
    num: "01",
    name: "Frontend",
    icon: Monitor,
    blurb:
      "Interfaces that feel instant — component-driven, type-safe, and pixel-precise across every viewport.",
    items: ["React", "Next.js", "Angular", "Vue.js", "HTML5", "CSS3", "TypeScript"],
    variant: "marquee",
    reveal: "joc-rv-left",
  },
  {
    id: "backend",
    num: "02",
    name: "Backend",
    icon: ServerCog,
    blurb:
      "APIs and services engineered for correctness first — then tuned for throughput and cost.",
    items: ["Node.js", "NestJS", "Express.js", "Java", "Spring Boot", ".NET", "Python", "PHP"],
    variant: "grid",
    reveal: "joc-rv-right",
  },
  {
    id: "mobile",
    num: "03",
    name: "Mobile",
    icon: Smartphone,
    blurb:
      "Native performance with shared-code efficiency — one product experience on every device.",
    items: ["React Native", "Flutter", "Android (native)", "iOS (native)"],
    variant: "phone",
    reveal: "joc-rv-zoom",
  },
  {
    id: "cloud",
    num: "04",
    name: "Cloud",
    icon: Cloud,
    blurb:
      "Right-sized architecture on the big three — resilient, observable, and cost-aware by default.",
    items: ["AWS", "Azure", "Google Cloud"],
    variant: "big",
    reveal: "joc-rv-blur",
  },
  {
    id: "databases",
    num: "05",
    name: "Databases",
    icon: Database,
    blurb:
      "The right store for each workload — relational integrity, document flexibility, and in-memory speed.",
    items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Redis"],
    variant: "list",
    reveal: "joc-rv-tilt",
  },
  {
    id: "devops",
    num: "06",
    name: "DevOps",
    icon: Workflow,
    blurb:
      "Pipelines that ship safely and often — infrastructure as code, automated end to end.",
    items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "Ansible"],
    variant: "pipeline",
    reveal: "joc-rv-skew",
  },
  {
    id: "ai",
    num: "07",
    name: "AI",
    icon: BrainCircuit,
    blurb:
      "Practical AI in production — retrieval, agents, and models wired into real workflows.",
    items: ["OpenAI", "LangChain", "MCP", "Python", "Vector Databases", "Machine Learning", "NLP"],
    variant: "orbit",
    reveal: "joc-rv-flip",
  },
  {
    id: "security",
    num: "08",
    name: "Security",
    icon: ShieldCheck,
    blurb:
      "Secure by design — identity, access, and encryption built in from the first commit.",
    items: ["OAuth", "JWT", "SSO", "IAM", "Encryption"],
    variant: "shield",
    reveal: "joc-rv-right",
  },
  {
    id: "testing",
    num: "09",
    name: "Testing",
    icon: FlaskConical,
    blurb:
      "Confidence at every layer — unit, end-to-end, and browser automation in every pipeline.",
    items: ["Jest", "Cypress", "Selenium", "Playwright"],
    variant: "check",
    reveal: "joc-rv-spin",
  },
];

const STATS = [
  { icon: Layers, value: "40+", label: "Technologies in the stack" },
  { icon: Gauge, value: "9", label: "Capability categories" },
  { icon: Lock, value: "100%", label: "Secure by design" },
  { icon: BadgeCheck, value: "Real", label: "Production-proven tools" },
];

function CategoryItems({ cat }) {
  switch (cat.variant) {
    case "marquee":
      return (
        <div className="joctech-pills">
          {cat.items.map((t, i) => (
            <span
              className="joctech-pill"
              key={t}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className="joctech-pill-dot" />
              {t}
            </span>
          ))}
        </div>
      );

    case "grid":
      return (
        <div className="joctech-tiles">
          {cat.items.map((t, i) => (
            <div
              className="joctech-tile"
              key={t}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="joctech-tile-code">{`</>`}</span>
              <span className="joctech-tile-name">{t}</span>
              <span className="joctech-tile-bar" />
            </div>
          ))}
        </div>
      );

    case "phone":
      return (
        <div className="joctech-phones">
          {cat.items.map((t, i) => (
            <div
              className="joctech-phone"
              key={t}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="joctech-phone-notch" />
              <span className="joctech-phone-screen">
                <Smartphone size={26} />
              </span>
              <span className="joctech-phone-name">{t}</span>
            </div>
          ))}
        </div>
      );

    case "big":
      return (
        <div className="joctech-clouds">
          {cat.items.map((t, i) => (
            <div
              className="joctech-cloud"
              key={t}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="joctech-cloud-blob" />
              <Cloud size={34} />
              <h4>{t}</h4>
              <p>Architecture, migration & managed operations.</p>
            </div>
          ))}
        </div>
      );

    case "list":
      return (
        <div className="joctech-dbs">
          {cat.items.map((t, i) => (
            <div
              className="joctech-db"
              key={t}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="joctech-db-icon">
                <Database size={18} />
              </span>
              <span className="joctech-db-name">{t}</span>
              <span className="joctech-db-ring" />
            </div>
          ))}
        </div>
      );

    case "pipeline":
      return (
        <div className="joctech-pipe">
          {cat.items.map((t, i) => (
            <div
              className="joctech-pipe-step"
              key={t}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="joctech-pipe-node">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="joctech-pipe-name">{t}</span>
              {i < cat.items.length - 1 && <span className="joctech-pipe-link" />}
            </div>
          ))}
        </div>
      );

    case "orbit":
      return (
        <div className="joctech-ai">
          {cat.items.map((t, i) => (
            <div
              className="joctech-ai-chip"
              key={t}
              style={{ transitionDelay: `${i * 55}ms` }}
            >
              <span className="joctech-ai-orb" />
              {t}
            </div>
          ))}
        </div>
      );

    case "shield":
      return (
        <div className="joctech-shields">
          {cat.items.map((t, i) => (
            <div
              className="joctech-shield"
              key={t}
              style={{ transitionDelay: `${i * 65}ms` }}
            >
              <span className="joctech-shield-icon">
                <ShieldCheck size={22} />
              </span>
              <span>{t}</span>
            </div>
          ))}
        </div>
      );

    case "check":
      return (
        <div className="joctech-tests">
          {cat.items.map((t, i) => (
            <div
              className="joctech-test"
              key={t}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="joctech-test-tick">
                <BadgeCheck size={20} />
              </span>
              <span className="joctech-test-name">{t}</span>
              <span className="joctech-test-status">In every pipeline</span>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

function Technologies() {
  useScrollReveal();

  return (
    <main className="joctechnologies-wrap">
      {/* ---------------- Hero ---------------- */}
      <section className="joctech-hero">
        <span className="joctech-hero-grid" />
        <span className="joctech-blob joctech-blob-a" />
        <span className="joctech-blob joctech-blob-b" />
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <span className="joctech-eyebrow joc-reveal">Technology Expertise</span>
              <h1 className="joctech-hero-title joc-reveal">
                The stack we <span className="joctech-grad-text">build with</span> — and
                stand behind
              </h1>
              <p className="joctech-hero-text joc-reveal">
                Every entry below is a real, production-proven capability — the same stack
                referenced across our Services and Industries pages. No filler, no
                buzzwords: tools we ship with every day.
              </p>
              <div className="joctech-hero-actions joc-reveal">
                <Link to="/contact" className="joctech-btn">
                  Schedule Consultation <ArrowRight size={17} />
                </Link>
                <Link to="/services" className="joctech-btn-ghost">
                  Explore Services
                </Link>
              </div>
              <div className="joctech-hero-trust joc-reveal">
                <span>
                  <ShieldCheck size={15} /> Secure by design
                </span>
                <span>
                  <Workflow size={15} /> Automated pipelines
                </span>
                <span>
                  <BrainCircuit size={15} /> AI in production
                </span>
              </div>
            </Col>
            <Col lg={6}>
              <div className="joctech-hero-visual joc-reveal joc-rv-zoom">
                <div className="joctech-hero-frame">
                  <img
                    src={heroImg}
                    alt="Justonclick technology stack illustration"
                    // width={1024}
                    // height={1024}
                  />
                  <span className="joctech-hero-sheen" />
                </div>
                <span className="joctech-chip joctech-chip-1">
                  <Monitor size={14} /> 40+ technologies
                </span>
                <span className="joctech-chip joctech-chip-2">
                  <Cloud size={14} /> AWS · Azure · GCP
                </span>
                <span className="joctech-chip joctech-chip-3">
                  <Lock size={14} /> Security first
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ---------------- Stats strip ---------------- */}
      <section className="joctech-stats">
        <Container>
          <Row className="g-4">
            {STATS.map((s, i) => (
              <Col sm={6} lg={3} key={s.label}>
                <div
                  className="joctech-stat joc-reveal joc-rv-zoom"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="joctech-stat-icon">
                    <s.icon size={20} />
                  </span>
                  <strong>{s.value}</strong>
                  <span className="joctech-stat-label">{s.label}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ---------------- Categories ---------------- */}
      <section className="joctech-body">
        <Container>
          <div className="joctech-section-head joc-reveal">
            <span className="joctech-eyebrow">Capability stack</span>
            <h2>
              Nine categories,{" "}
              <span className="joctech-grad-text">one integrated stack</span>
            </h2>
            <p>
              Grouped by discipline — each category below is a specified capability we
              apply across projects, not a randomly generated list.
            </p>
          </div>

          {CATEGORIES.map((cat, idx) => (
            <div
              className={`joctech-category joctech-cat-${cat.variant} joc-reveal ${cat.reveal}`}
              id={cat.id}
              key={cat.id}
            >
              <div className="joctech-category-head">
                <span className="joctech-category-num">{cat.num}</span>
                <span className="joctech-category-icon">
                  <cat.icon size={24} />
                </span>
                <div>
                  <h3>{cat.name}</h3>
                  <p>{cat.blurb}</p>
                </div>
                <span className="joctech-category-count">{cat.items.length} tools</span>
              </div>
              <div className="joctech-category-body">
                <CategoryItems cat={cat} />
              </div>
              <span className="joctech-category-deco" aria-hidden="true" />
              {idx % 2 === 1 && (
                <span
                  className="joctech-category-deco joctech-deco-alt"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </Container>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="joctech-cta">
        <Container>
          <div className="joctech-cta-card joc-reveal joc-rv-blur">
            <span className="joctech-cta-glow" />
            <h2>
              Not sure which stack{" "}
              <span className="joctech-grad-text">fits your product?</span>
            </h2>
            <p>
              Tell us about your goals and constraints — we'll recommend a right-sized
              architecture and the team to build it.
            </p>
            <div className="joctech-cta-actions">
              <Link to="/contact" className="joctech-btn">
                Schedule Consultation <ArrowRight size={17} />
              </Link>
              <Link to="/services" className="joctech-btn-ghost">
                Explore Services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Technologies;