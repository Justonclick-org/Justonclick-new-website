import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import {
  ArrowRight,
  ArrowUpRight,
  Users,
  LineChart,
  Building2,
  Target,
  Layers3,
  Cpu,
  ImageIcon,
  Workflow,
  AlertTriangle,
  TrendingUp,
  BadgeIndianRupee,
  Quote,
  Download,
  Clock,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  Globe,
  FileText,
} from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import heroImg from "../../components/assets/case-studies-hero.jpg"; 
import "./CaseStudy.css";

const CASES = [
  {
    id: "hrms-payroll",
    num: "8.1",
    title: "Justonclick HRMS & Payroll",
    tag: "In-house product",
    accent: "blue",
    reveal: "joc-rv-left",
    icon: Users,
    background:
      "In-house product — designed, built, and operated by Justonclick for its own HR & payroll operations.",
    meta: [
      {
        icon: Building2,
        label: "Industry",
        value: "Human Resources & Payroll Technology (horizontal, cross-industry)",
      },
      {
        icon: Clock,
        label: "Duration",
        value: "Ongoing — initial build followed by continuous iteration",
      },
      {
        icon: Briefcase,
        label: "Team Size",
        value: "[insert verified team size]",
        placeholder: true,
      },
      {
        icon: Globe,
        label: "Live Link",
        value: "https://hrms.justonclick.in/login",
        href: "https://hrms.justonclick.in/login",
      },
    ],
    problem:
      "Most growing businesses start HR and payroll on spreadsheets and disconnected biometric devices. That approach works at a small scale, but creates real risk as headcount grows: manual reconciliation errors, missed statutory compliance updates (PF, ESI, TDS), no self-service for employees, and no way to answer a headcount or cost question quickly.",
    objectives: [
      "Bring attendance, leave, payroll, and compliance into a single system",
      "Automate statutory compliance rather than track it manually",
      "Give employees a modern self-service experience",
      "Provide leadership with real-time HR and cost visibility",
    ],
    architecture:
      "A single platform covering the full employee lifecycle — from onboarding through payroll to performance management — with statutory compliance rules built into every payroll run rather than applied manually after the fact.",
    stack: ["Node.js", "PostgreSQL", "React / Next.js", "Biometric & attendance integrations"],
    screens:
      "Add real product screenshots of the attendance, payroll, and self-service screens here.",
    process: [
      "Discovery & requirements",
      "Solution architecture",
      "Iterative build & QA",
      "Deployment & ongoing support",
    ],
    processNote: "Following the standard delivery model (Section 2.10).",
    challenges:
      "Designing a compliance rule engine flexible enough to handle statutory changes (PF, ESI, TDS) without requiring a code change for every regulatory update.",
    results: [
      "Payroll processing time cut from days to hours",
      "Statutory compliance risk reduced through built-in rule engines, applied automatically every cycle",
      "HR data centralized in one auditable system instead of scattered spreadsheets",
      "Every employee given a modern self-service experience, reducing routine HR queries",
    ],
    roi: "Quantified ROI (e.g. hours saved per payroll cycle, cost avoided from compliance penalties) should be added once measured internally.",
    testimonial:
      "This is an in-house product, so a testimonial would come from internal HR/finance staff using it daily — add a real internal quote here if appropriate.",
    downloads:
      "A PDF version of this case study is not yet produced. Add a download link here once created (see Resources, Section 15).",
  },
  {
    id: "trading-algo",
    num: "8.2",
    title: "Justonclick Trading Algo",
    tag: "In-house product",
    accent: "orange",
    reveal: "joc-rv-right",
    icon: LineChart,
    background: "In-house product — designed, built, and operated by Justonclick.",
    meta: [
      {
        icon: Building2,
        label: "Industry",
        value: "Financial Technology — Algorithmic & Systematic Trading",
      },
      {
        icon: Clock,
        label: "Duration",
        value: "Ongoing — initial build followed by continuous iteration",
      },
      {
        icon: Briefcase,
        label: "Team Size",
        value: "[insert verified team size]",
        placeholder: true,
      },
      {
        icon: Globe,
        label: "Live Link",
        value: "https://trading.justonclick.in/",
        href: "https://trading.justonclick.in/",
      },
    ],
    problem:
      "Evaluating a trading platform purely on the strategies it can run misses the real risk in algorithmic trading: whether a strategy you already trust actually gets executed the way it was designed, every time, with realistic backtesting and enforced risk limits.",
    objectives: [
      "Let strategies be validated against historical data before risking capital",
      "Enforce risk limits at the platform level, not inside individual strategy code",
      "Provide low-latency, automated execution",
      "Bring strategy performance into a single, unified view",
    ],
    architecture:
      "A strategy builder, a backtesting engine that accounts for realistic fill assumptions, and a real-time execution layer with risk management enforced at the platform level.",
    stack: ["Python", "Node.js", "PostgreSQL", "Broker & exchange API integrations"],
    screens:
      "Add real product screenshots of the strategy builder, backtesting results, and execution dashboard here.",
    process: [
      "Discovery & requirements",
      "Solution architecture",
      "Iterative build & QA",
      "Deployment & ongoing support",
    ],
    processNote: "Following the standard delivery model (Section 2.10).",
    challenges:
      "Building a backtesting engine that reflects realistic slippage and fill assumptions, so backtested results don't mislead live-trading expectations.",
    results: [
      "Manual execution errors removed from systematic trading",
      "Strategies validated against historical data before committing live capital",
      "Risk rules enforced by the platform even when the trader isn't watching the screen",
      "Every strategy's performance visible from a single, unified dashboard",
    ],
    roi: "Quantified ROI is not published for trading strategy performance, consistent with the risk disclaimer below — backtested/historical performance must never be presented as a guarantee of future results.",
    testimonial:
      "This is an in-house product; add a real testimonial from an internal or early trusted user if appropriate.",
    downloads: "A PDF version of this case study is not yet produced.",
    disclaimer:
      "Risk disclaimer: Algorithmic trading involves substantial risk of loss and is not suitable for every investor. Backtested or historical performance is not indicative of future results. Justonclick Trading Algo is a technology platform and does not provide investment advice.",
  },
  {
    id: "local-credit-solutions",
    num: "8.3",
    title: "Local Credit Solutions",
    tag: "Client project",
    accent: "blue",
    reveal: "joc-rv-zoom",
    icon: BadgeIndianRupee,
    background: "Local Credit Solutions — a financial and credit services company.",
    meta: [
      {
        icon: Building2,
        label: "Industry",
        value: "Banking & Finance — Financial & Credit Services",
      },
      {
        icon: Clock,
        label: "Duration",
        value: "[insert verified project duration]",
        placeholder: true,
      },
      {
        icon: Briefcase,
        label: "Team Size",
        value: "[insert verified team size]",
        placeholder: true,
      },
      {
        icon: Globe,
        label: "Live Link",
        value: "https://lcsolution.in/",
        href: "https://lcsolution.in/",
      },
    ],
    problem:
      "Financial and credit services websites carry a higher trust bar than most other categories. Local Credit Solutions needed visitors to understand what was being offered quickly and clearly, and to feel confident before sharing any personal or financial information — without an existing site built to convey that credibility.",
    objectives: [
      "Design and build a professional, trustworthy web presence",
      "Structure content for a non-technical, trust-sensitive audience",
      "Deliver a responsive, production-ready site across devices",
      "Launch and hand over the finished site to the client's team",
    ],
    architecture:
      "A custom business website built from the ground up — no generic template — with content structured specifically around the client's credit and lending services.",
    stack: ["Next.js / React front end", "Responsive design system"],
    screens: "Add real screenshots of the live site (lcsolution.in) here, with client permission.",
    process: ["Design & content structure", "Build", "Launch", "Handover"],
    processNote: "Following the standard delivery model (Section 2.10).",
    challenges:
      "Structuring credit and lending service information so a non-technical customer base could navigate confidently, without the site feeling like a sales pitch.",
    results: [
      "Local Credit Solutions now has a live, production website at https://lcsolution.in/ serving as its primary web presence — a durable, on-brand asset the client owns and operates going forward.",
    ],
    roi: "Quantified ROI (e.g. lead volume before/after launch) should be added if the client shares this data.",
    testimonial:
      "Request a testimonial from Local Credit Solutions using the process in the Testimonials section below (Section 8.4) — do not publish a quote without their explicit, written permission.",
    downloads: "A PDF version of this case study is not yet produced.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "[Insert a 1-2 sentence quote describing the specific outcome, result, or experience the client had working with Justonclick.]",
    name: "[Client Name]",
    role: "[Job Title]",
    company: "[Company Name] — [Project / Service]",
  },
  {
    quote:
      "[Insert a second placeholder quote here — ideally referencing a different product or service line for variety.]",
    name: "[Client Name]",
    role: "[Job Title]",
    company: "[Company Name] — [Project / Service]",
  },
];

function Placeholder({ children }) {
  return (
    <div className="joccase-placeholder">
      <span className="joccase-placeholder-tag">Placeholder — verify before publishing</span>
      <p>{children}</p>
    </div>
  );
}

function CaseStudy({ cs, index }) {
  const Icon = cs.icon;

  return (
    <article className={`joccase-study joccase-accent-${cs.accent}`} id={cs.id}>
      <div className={`joccase-study-head joc-reveal ${cs.reveal}`}>
        <span className="joccase-study-num">{cs.num}</span>
        <span className="joccase-study-icon">
          <Icon size={26} />
        </span>
        <div className="joccase-study-headtext">
          <span className="joccase-study-tag">{cs.tag}</span>
          <h2>{cs.title}</h2>
          <p>{cs.background}</p>
        </div>
        <span className="joccase-study-deco" aria-hidden="true" />
      </div>

      {/* meta strip */}
      <div className="joccase-meta joc-reveal joc-rv-drop">
        {cs.meta.map((m, i) => (
          <div
            className="joccase-meta-item"
            key={m.label}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <span className="joccase-meta-icon">
              <m.icon size={16} />
            </span>
            <span className="joccase-meta-label">{m.label}</span>
            {m.href ? (
              <a
                className="joccase-meta-link"
                href={m.href}
                target="_blank"
                rel="noreferrer"
              >
                {m.value} <ArrowUpRight size={14} />
              </a>
            ) : (
              <span
                className={`joccase-meta-value${m.placeholder ? " is-placeholder" : ""}`}
              >
                {m.value}
              </span>
            )}
          </div>
        ))}
      </div>

      <Row className="g-4 joccase-row">
        <Col lg={6}>
          <div className="joccase-panel joccase-panel-problem joc-reveal joc-rv-left">
            <span className="joccase-panel-head">
              <AlertTriangle size={18} /> Business Problem
            </span>
            <p>{cs.problem}</p>
          </div>
        </Col>
        <Col lg={6}>
          <div className="joccase-panel joccase-panel-obj joc-reveal joc-rv-right">
            <span className="joccase-panel-head">
              <Target size={18} /> Objectives
            </span>
            <ul className="joccase-obj-list">
              {cs.objectives.map((o, i) => (
                <li key={o} style={{ transitionDelay: `${i * 50}ms` }}>
                  <span className="joccase-obj-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </Col>

        <Col lg={7}>
          <div className="joccase-panel joccase-panel-arch joc-reveal joc-rv-blur">
            <span className="joccase-panel-head">
              <Layers3 size={18} /> Solution Architecture
            </span>
            <p>{cs.architecture}</p>
          </div>
        </Col>
        <Col lg={5}>
          <div className="joccase-panel joccase-panel-stack joc-reveal joc-rv-tilt">
            <span className="joccase-panel-head">
              <Cpu size={18} /> Technology Stack
            </span>
            <div className="joccase-chips">
              {cs.stack.map((t, i) => (
                <span
                  className="joccase-chip"
                  key={t}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Col>

        <Col lg={5}>
          <div className="joccase-panel joccase-panel-screens joc-reveal joc-rv-spin">
            <span className="joccase-panel-head">
              <ImageIcon size={18} /> UI Screens
            </span>
            <div className="joccase-screens">
              <span className="joccase-screen-frame" />
              <span className="joccase-screen-frame" />
              <span className="joccase-screen-frame" />
            </div>
            <Placeholder>{cs.screens}</Placeholder>
          </div>
        </Col>
        <Col lg={7}>
          <div className="joccase-panel joccase-panel-process joc-reveal joc-rv-skew">
            <span className="joccase-panel-head">
              <Workflow size={18} /> Development Process
            </span>
            <div className="joccase-steps">
              {cs.process.map((p, i) => (
                <div
                  className="joccase-step"
                  key={p}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="joccase-step-dot">{i + 1}</span>
                  <span className="joccase-step-name">{p}</span>
                </div>
              ))}
            </div>
            <p className="joccase-step-note">{cs.processNote}</p>
          </div>
        </Col>

        <Col lg={5}>
          <div className="joccase-panel joccase-panel-chal joc-reveal joc-rv-flip">
            <span className="joccase-panel-head">
              <ShieldCheck size={18} /> Challenges
            </span>
            <p>{cs.challenges}</p>
          </div>
        </Col>
        <Col lg={7}>
          <div className="joccase-panel joccase-panel-results joc-reveal joc-rv-zoom">
            <span className="joccase-panel-head">
              <TrendingUp size={18} /> Results
            </span>
            <ul className="joccase-results">
              {cs.results.map((r, i) => (
                <li key={r} style={{ transitionDelay: `${i * 60}ms` }}>
                  <CheckCircle2 size={17} />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </Col>

        <Col md={4}>
          <div className="joccase-panel joccase-panel-soft joc-reveal joc-rv-left">
            <span className="joccase-panel-head">
              <BadgeIndianRupee size={18} /> ROI
            </span>
            <Placeholder>{cs.roi}</Placeholder>
          </div>
        </Col>
        <Col md={4}>
          <div className="joccase-panel joccase-panel-soft joc-reveal joc-rv-drop">
            <span className="joccase-panel-head">
              <Quote size={18} /> Client Testimonial
            </span>
            <Placeholder>{cs.testimonial}</Placeholder>
          </div>
        </Col>
        <Col md={4}>
          <div className="joccase-panel joccase-panel-soft joc-reveal joc-rv-right">
            <span className="joccase-panel-head">
              <Download size={18} /> Downloads
            </span>
            <Placeholder>{cs.downloads}</Placeholder>
          </div>
        </Col>
      </Row>

      {cs.disclaimer && (
        <div className="joccase-disclaimer joc-reveal joc-rv-blur">
          <AlertTriangle size={18} />
          <p>{cs.disclaimer}</p>
        </div>
      )}

      {index < CASES.length - 1 && (
        <span className="joccase-divider" aria-hidden="true" />
      )}
    </article>
  );
}

function CaseStudies() {
  useScrollReveal();

  return (
    <main className="joccase-wrap">
      {/* ---------------- Hero ---------------- */}
      <section className="joccase-hero">
        <span className="joccase-hero-grid" />
        <span className="joccase-blob joccase-blob-a" />
        <span className="joccase-blob joccase-blob-b" />
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <span className="joccase-eyebrow joc-reveal">Case Studies</span>
              <h1 className="joccase-hero-title joc-reveal">
                Systems in{" "}
                <span className="joccase-grad-text">daily production</span> — and what
                they changed
              </h1>
              <p className="joccase-hero-text joc-reveal">
                Full enterprise-format case studies for every delivered project — client
                background, business problem, objectives, architecture, stack, process,
                challenges, results and ROI. Where a number isn't verified yet, it is
                marked as a placeholder rather than invented.
              </p>
              <div className="joccase-hero-actions joc-reveal">
                <Link to="/contact" className="joccase-btn">
                  Schedule Consultation <ArrowRight size={17} />
                </Link>
                <Link to="/products" className="joccase-btn-ghost">
                  Explore Products
                </Link>
              </div>
              <div className="joccase-hero-trust joc-reveal">
                <span>
                  <ShieldCheck size={15} /> We run what we build
                </span>
                <span>
                  <FileText size={15} /> Enterprise-format write-ups
                </span>
                <span>
                  <Globe size={15} /> Live production links
                </span>
              </div>
            </Col>
            <Col lg={6}>
              <div className="joccase-hero-visual joc-reveal joc-rv-zoom">
                <div className="joccase-hero-frame">
                  <img
                    src={heroImg}
                    alt="Illustration of case study dashboards and reports"
                    width={1200}
                    height={900}
                  />
                  <span className="joccase-hero-sheen" />
                </div>
                <span className="joccase-chip-float joccase-chip-1">
                  <Users size={14} /> HRMS & Payroll
                </span>
                <span className="joccase-chip-float joccase-chip-2">
                  <LineChart size={14} /> Trading Algo
                </span>
                <span className="joccase-chip-float joccase-chip-3">
                  <BadgeIndianRupee size={14} /> Local Credit Solutions
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ---------------- Index strip ---------------- */}
      <section className="joccase-index">
        <Container>
          <Row className="g-4">
            {CASES.map((cs, i) => (
              <Col md={4} key={cs.id}>
                <a
                  href={`#${cs.id}`}
                  className="joccase-index-card joc-reveal joc-rv-zoom"
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <span className="joccase-index-num">{cs.num}</span>
                  <span className="joccase-index-icon">
                    <cs.icon size={20} />
                  </span>
                  <h3>{cs.title}</h3>
                  <span className="joccase-index-go">
                    Read case study <ArrowRight size={15} />
                  </span>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ---------------- Case studies ---------------- */}
      <section className="joccase-body">
        <Container>
          {CASES.map((cs, i) => (
            <CaseStudy cs={cs} index={i} key={cs.id} />
          ))}
        </Container>
      </section>

      {/* ---------------- 8.4 Testimonials ---------------- */}
      <section className="joccase-testimonials" id="client-testimonials">
        <Container>
          <div className="joccase-section-head joc-reveal">
            <span className="joccase-eyebrow">8.4 Client Testimonials</span>
            <h2>
              Real quotes only —{" "}
              <span className="joccase-grad-text">never invented ones</span>
            </h2>
            <p>
              Real testimonials are one of the highest-trust content types on a services
              or product site — they carry more weight than anything Justonclick says
              about itself. Every card below is a placeholder to be replaced with a
              genuine, attributed quote once collected; do not publish invented quotes.
            </p>
          </div>
          <Row className="g-4">
            {TESTIMONIALS.map((t, i) => (
              <Col md={6} key={i}>
                <figure
                  className={`joccase-quote joc-reveal ${
                    i % 2 === 0 ? "joc-rv-left" : "joc-rv-right"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="joccase-quote-mark" aria-hidden="true">
                    &ldquo;
                  </span>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    <strong>{t.name}</strong>, {t.role}
                    <span>{t.company}</span>
                  </figcaption>
                  <span className="joccase-placeholder-tag">
                    Placeholder — collect before publishing
                  </span>
                </figure>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="joccase-cta">
        <Container>
          <div className="joccase-cta-card joc-reveal joc-rv-zoom">
            <span className="joccase-cta-glow" aria-hidden="true" />
            <h2>Want a system like these built for your business?</h2>
            <p>
              We design, build, and operate the software we deliver — the same way we run
              our own products. Start with a consultation and we'll map the shortest
              route to production.
            </p>
            <div className="joccase-hero-actions">
              <Link to="/contact" className="joccase-btn">
                Schedule Consultation <ArrowRight size={17} />
              </Link>
              <Link to="/services" className="joccase-btn-ghost">
                Explore Services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default CaseStudies;