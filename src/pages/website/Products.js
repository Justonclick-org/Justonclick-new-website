import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  CalendarCheck,
  ClipboardList,
  Cpu,
  ExternalLink,
  FileSpreadsheet,
  HelpCircle,
  Image as ImageIcon,
  Lock,
  Plug,
  Rocket,
  Send,
  ShoppingCart,
  Sparkles,
  Target,
  Truck,
  UserCircle,
  Users,
  Wallet,
} from "lucide-react";
import Seo from "../../components/Seo";
import TrackedLink from "../../components/TrackedLink";
import { CTA_LOCATION } from "../../utils/analytics";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useLeadFormTracking } from "../../hooks/useLeadFormTracking";
import { CONTACT } from "../../utils/constants";
import hrmsShot from "../../components/assets/products/hrms-home.jpg";
import "./Products.css";
import "./Pages.css";

const delay = (i) => ({ transitionDelay: `${Math.min(i, 6) * 90}ms` });

const HRMS = {
  id: "hrms",
  tone: "blue",
  name: "Justonclick HRMS & Payroll",
  tagline: "One platform for people, attendance, and pay.",
  summary:
    "Automate hiring, attendance, leave, payroll, and compliance in a single, secure platform your HR team will actually enjoy using.",
  url: "https://hrms.justonclick.in/",
  screenshot: hrmsShot,
  cta: "Open HRMS App",
  modules: [
    {
      icon: UserCircle,
      title: "Core HR & Self-Service",
      text: "Employee records, org structure and org chart, plus a self-service portal so employees get answers without asking HR.",
    },
    {
      icon: CalendarCheck,
      title: "Attendance & Leave",
      text: "Web and mobile punches with geo-fencing, face verification, regularization and WFH requests, plus leave types, balances and holidays.",
    },
    {
      icon: Wallet,
      title: "Payroll & Statutory Compliance",
      text: "Salary structures, a preview-then-lock monthly run, PF, ESI, professional tax and TDS, and payslips published to employees.",
    },
    {
      icon: Users,
      title: "Recruitment (ATS)",
      text: "Job openings, CV import, interviews, offers and joining, with offer and appointment letters generated in the platform.",
    },
    {
      icon: Target,
      title: "Performance & Learning",
      text: "Goals, reviews, appraisals and probation, alongside a course catalogue with enrolment and quizzes.",
    },
    {
      icon: ClipboardList,
      title: "Expenses, Assets & Exit",
      text: "Expense claims with receipts and advances, asset inventory and assignment, and resignation through to full and final settlement.",
    },
    {
      icon: Sparkles,
      title: "Engagement & Helpdesk",
      text: "Recognition, an activity feed, surveys and rewards, plus a helpdesk for employee tickets and grievances.",
    },
    {
      icon: BarChart3,
      title: "HR Analytics & Reports",
      text: "Attendance, leave, headcount and attrition trends, with HR, payroll and statutory reports ready to export.",
    },
    {
      icon: Lock,
      title: "Security & Audit",
      text: "Access profiles control modules, records and salary visibility; every sensitive action is written to the audit log.",
    },
  ],
  roles: [
    "Employee: punches, leave, payslips and self-service",
    "Manager: team attendance and approvals",
    "HR: employee lifecycle, recruitment and policies",
    "Finance: payroll runs, disbursement and statutory filing",
    "Org Admin: settings, geo-fence, access profiles",
    "Auditor: read-only review of activity logs",
  ],
  integrations: [
    "Biometric attendance devices",
    "PF ECR and ESIC exports for filing",
    "Bank disbursement of salaries",
    "Payroll journal export for accounting",
  ],
  benefits: [
    "Cuts payroll processing time from days to hours",
    "PF, ESI, professional tax and TDS calculated in every payroll run",
    "Attendance verified by geo-fence and face check feeds straight into pay",
    "One employee record shared by every module, on web and Android",
  ],
  bestFor: [
    "Growing SMEs running payroll on spreadsheets",
    "Multi-location teams that need consistent HR policy",
    "Organizations with field or hybrid staff who punch in on mobile",
  ],
  security:
    "Each organization's data is isolated from every other. Access profiles decide which modules people open, which records they reach and whether they see salaries and bank details, and sensitive actions are recorded in the audit log.",
  faqs: [
    {
      q: "Can this scale to multiple office locations?",
      a: "Yes. Attendance rules and geo-fences are set per office while payroll and compliance stay centralized.",
    },
    {
      q: "Is there a mobile app?",
      a: "Yes. The Android app gives every role the same HR on the move: employees punch in and out, apply for leave and download payslips; managers approve requests.",
    },
    {
      q: "Which statutory deductions are handled?",
      a: "PF, ESI, professional tax and TDS are worked out in the payroll run, with PF ECR and ESIC exports ready for filing.",
    },
    {
      q: "Is our data kept separate from other companies?",
      a: "Yes. Every organization's data is isolated, and salary and bank details are visible only to the access profiles allowed to see them.",
    },
  ],
};

const HRMS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: HRMS.name,
  description: HRMS.summary,
  url: HRMS.url,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Android",
  featureList: HRMS.modules.map((m) => m.title),
  publisher: { "@id": "https://justonclick.in/#organization" },
};

export const ROADMAP = [
  {
    icon: ShoppingCart,
    title: "Procurement Management System",
    text: "A standalone vendor and purchase-order management product, extending the Procurement Solutions service line into a packaged product.",
  },
  {
    icon: Cpu,
    title: "ERP",
    text: "A modular enterprise resource planning product, extending the ERP & CRM Development service line into a packaged product.",
  },
  {
    icon: Users,
    title: "CRM",
    text: "A customer relationship management product built for sales and account teams that need pipeline and relationship tracking without enterprise CRM overhead.",
  },
  {
    icon: Boxes,
    title: "Inventory Management",
    text: "Stock, warehouse, and order visibility software for businesses currently tracking inventory manually or across spreadsheets.",
  },
  {
    icon: Truck,
    title: "Vendor Portal",
    text: "A self-service portal for vendors to submit quotes, track purchase orders, and manage their own profile, complementing Procurement Solutions.",
  },
  {
    icon: Building2,
    title: "Construction Management Platform",
    text: "Project, procurement, and workforce tracking built for the construction industry.",
  },
];

const DEMO_FIELDS = [
  { id: "name", label: "Name *", type: "text", required: true },
  { id: "email", label: "Work Email *", type: "email", required: true },
  { id: "company", label: "Company", type: "text" },
  { id: "phone", label: "Phone", type: "tel" },
];

function DemoForm({ product, productName }) {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", size: "", message: "" });

  const { markStarted, markSuccess } = useLeadFormTracking("demo", "demo_request");

  const update = (e) => {
    markStarted();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    // No backend: a valid submit hands the request to the visitor's email app.
    if (!e.currentTarget.checkValidity()) return;
    const subject = `Demo request — ${productName} from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company && `Company: ${form.company}`,
      form.phone && `Phone: ${form.phone}`,
      form.size && `Company size: ${form.size}`,
      "",
      form.message,
    ]
      .filter((line) => line !== false && line !== "")
      .join("\n");
    markSuccess();
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="jocproducts-form joc-reveal joc-rv-blur" onSubmit={submit}>
      <span className="joc-bubble" />
      <h4 className="jocproducts-heading" style={{ fontSize: "1.15rem" }}>
        Request a demo
      </h4>
      <Row className="g-3">
        {DEMO_FIELDS.map((f) => (
          <Col md={6} key={f.id}>
            <label htmlFor={`${product}-${f.id}`}>{f.label}</label>
            <input
              id={`${product}-${f.id}`}
              name={f.id}
              type={f.type}
              required={f.required}
              value={form[f.id]}
              onChange={update}
            />
          </Col>
        ))}
        <Col md={12}>
          <label htmlFor={`${product}-size`}>Company Size</label>
          <select id={`${product}-size`} name="size" value={form.size} onChange={update}>
            <option value="">Select</option>
            <option>1-10</option>
            <option>11-50</option>
            <option>51-200</option>
            <option>200+</option>
          </select>
        </Col>
        <Col xs={12}>
          <label htmlFor={`${product}-message`}>Message</label>
          <textarea
            id={`${product}-message`}
            name="message"
            rows={4}
            value={form.message}
            onChange={update}
          />
        </Col>
      </Row>
      <button type="submit" className="jocpage-btn jocproducts-submit mt-4">
        Request Demo <Send size={16} />
      </button>
      <p className="jocproducts-form-note mb-0">
        Sending opens your email app with these details addressed to {CONTACT.email}. Prefer to
        talk? Call <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> and we'll set up a walkthrough.
      </p>
    </form>
  );
}

function ProductBlock({ p }) {
  const orange = p.tone === "orange";

  return (
    <section
      id={p.id}
      className={`jocproducts-section${orange ? " jocproducts-section-alt" : ""}`}
    >
      <Container>
        <div
          className={`jocproducts-banner jocproducts-banner-${p.tone} joc-reveal ${
            orange ? "joc-rv-right" : "joc-rv-left"
          }`}
        >
          <span className="jocproducts-banner-wave" />
          <span className="joc-bubble" />
          <span className="joc-bubble joc-bubble-bl joc-bubble-orange" />
          <span className="jocproducts-banner-tag">
            <Sparkles size={13} /> In production
          </span>
          <h2 className="mt-3">{p.name}</h2>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>{p.tagline}</h3>
          <p className="mb-0">{p.summary}</p>
          <a className="jocproducts-applink" href={p.url} target="_blank" rel="noreferrer">
            {p.cta} <ExternalLink size={16} />
          </a>
        </div>

        <h3 className="jocproducts-subheading joc-reveal joc-rv-drop">Modules</h3>
        <Row className="g-4">
          {p.modules.map((m, i) => (
            <Col md={6} xl={4} key={m.title}>
              <div
                className={`jocproducts-module joc-reveal ${
                  orange ? "joc-rv-flip jocproducts-module-orange" : "joc-rv-zoom"
                }`}
                style={delay(i)}
              >
                <span className={`joc-bubble${orange ? " joc-bubble-orange" : ""}`} />
                <span className="joc-bubble joc-bubble-bl" />
                <div className="jocproducts-module-icon">
                  <m.icon size={21} />
                </div>
                <h4>{m.title}</h4>
                <p>{m.text}</p>
              </div>
            </Col>
          ))}
        </Row>

        <h3 className="jocproducts-subheading joc-reveal joc-rv-drop">Screenshots</h3>
        <figure className="jocproducts-shot joc-reveal joc-rv-zoom">
          <img src={p.screenshot} alt={`${p.name} home page`} width={1440} height={900} loading="lazy" />
          <figcaption>
            <ImageIcon size={15} /> {p.name} — live at{" "}
            <a href={p.url} target="_blank" rel="noreferrer">
              {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </a>
          </figcaption>
        </figure>

        <Row className="g-4 mt-1">
          <Col md={6} xl={3}>
            <div className="jocproducts-panel joc-reveal joc-rv-left">
              <span className="joc-bubble" />
              <h4>
                <Users size={17} /> User Roles
              </h4>
              <ul className="jocproducts-list">
                {p.roles.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md={6} xl={3}>
            <div className="jocproducts-panel joc-reveal joc-rv-left" style={delay(1)}>
              <span className="joc-bubble joc-bubble-orange" />
              <h4>
                <Plug size={17} /> Integrations
              </h4>
              <ul className="jocproducts-list">
                {p.integrations.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md={6} xl={3}>
            <div className="jocproducts-panel joc-reveal joc-rv-right" style={delay(2)}>
              <span className="joc-bubble" />
              <h4>
                <Rocket size={17} /> Key Benefits
              </h4>
              <ul className="jocproducts-list">
                {p.benefits.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md={6} xl={3}>
            <div className="jocproducts-panel joc-reveal joc-rv-right" style={delay(3)}>
              <span className="joc-bubble joc-bubble-orange" />
              <h4>
                <Target size={17} /> Best For
              </h4>
              <ul className="jocproducts-list">
                {p.bestFor.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>

        <Row className="g-4 mt-1">
          <Col lg={6}>
            <div className="jocproducts-panel joc-reveal joc-rv-skew h-100">
              <span className="joc-bubble" />
              <h4>
                <Lock size={17} /> Security
              </h4>
              <p className="jocproducts-sub mb-0">{p.security}</p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="jocproducts-panel joc-reveal joc-rv-skew h-100" style={delay(1)}>
              <span className="joc-bubble joc-bubble-orange" />
              <h4>
                <FileSpreadsheet size={17} /> Pricing
              </h4>
              <p className="jocproducts-sub mb-0">
                Pricing depends on team size, modules, and rollout scope, so we quote it directly
                rather than publishing fixed tiers. Request a demo below and we'll share a proposal
                matched to your setup.
              </p>
            </div>
          </Col>
        </Row>

        <h3 className="jocproducts-subheading joc-reveal joc-rv-drop">
          Frequently Asked Questions
        </h3>
        <Row className="g-3">
          {p.faqs.map((f, i) => (
            <Col lg={6} key={f.q}>
              <div className="jocproducts-faq joc-reveal joc-rv-tilt" style={delay(i)}>
                <span className="joc-bubble" />
                <strong>
                  <HelpCircle size={15} className="me-2" />Q: {f.q}
                </strong>
                <p>A: {f.a}</p>
              </div>
            </Col>
          ))}
        </Row>

        {p.disclaimer ? (
          <p className="jocproducts-disclaimer joc-reveal joc-rv-blur">
            <strong>Risk disclaimer:</strong> {p.disclaimer}
          </p>
        ) : null}

        <h3 className="jocproducts-subheading joc-reveal joc-rv-drop">Demo Request Form</h3>
        <DemoForm product={p.id} productName={p.name} />
      </Container>
    </section>
  );
}

function Products() {
  useScrollReveal();
  const { hash } = useLocation();

  // Scroll to a section such as #roadmap when arriving from another page.
  useEffect(() => {
    if (!hash) return undefined;
    const timer = setTimeout(() => {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <main className="jocproducts-wrap">
      <Seo
        title="HRMS & Payroll Software for Indian Businesses | Justonclick HRMS"
        description="Justonclick HRMS & Payroll: geo-fenced attendance with face verification, leave, payroll with PF, ESI, professional tax and TDS, recruitment and employee self-service on web and Android."
        path="/products"
        jsonLd={HRMS_JSONLD}
      />
      {/* 5.1 Hero */}
      <section className="jocpage-hero">
        <span className="jocpage-hero-grid" />
        <Container>
          <div className="jocpage-hero-inner">
            <span className="jocpage-eyebrow joc-reveal joc-rv-drop">Our Products</span>
            <h1 className="jocpage-title joc-reveal joc-rv-blur" style={delay(1)}>
              <span>HRMS & payroll software we build, run, and stand behind.</span>
            </h1>
            <p className="jocpage-text joc-reveal joc-rv-left" style={delay(2)}>
              Alongside our services work, Justonclick designs, builds, and personally operates its
              own production software. Below is full detail on our flagship platform — what it does,
              who it's built for, and how to get started.
            </p>
            <div className="jocpage-actions joc-reveal joc-rv-zoom" style={delay(3)}>
              <TrackedLink
                to="/contact" className="jocpage-btn"
                track={{ type: "contact", name: "talk_to_us", location: CTA_LOCATION.HERO }}
              >
                Talk to Us About a Product <ArrowRight size={17} />
              </TrackedLink>
              <Link to="/" className="jocpage-btn-ghost">
                Back to home
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <ProductBlock p={HRMS} />

      {/* 5.4 More products coming soon */}
      <section className="jocproducts-section">
        <Container>
          <span className="jocproducts-eyebrow joc-reveal joc-rv-left">
            More Products Coming Soon
          </span>
          <h2 className="jocproducts-heading joc-reveal joc-rv-left" style={delay(1)}>
            New product categories under active evaluation
          </h2>
          <p className="jocproducts-sub joc-reveal joc-rv-left" style={delay(2)}>
            Justonclick is actively evaluating new product categories beyond our flagship HRMS &
            Payroll platform. As new products launch, each is added to this page using the exact structure
            above — tagline, summary, live application link, modules, user roles, integrations,
            benefits, audience, security, and FAQs — so every product is documented consistently.
          </p>
        </Container>
      </section>

      {/* 5.5 Roadmap */}
      <section className="jocproducts-section jocproducts-section-alt" id="roadmap">
        <Container>
          <span className="jocproducts-eyebrow joc-reveal joc-rv-spin">
            Product Roadmap (Planned, Not Yet Built)
          </span>
          <h2 className="jocproducts-heading joc-reveal joc-rv-spin" style={delay(1)}>
            A transparent roadmap, not shipping products
          </h2>
          <p className="jocproducts-sub joc-reveal joc-rv-spin" style={delay(2)}>
            The categories below are commonly requested extensions of the HRMS and procurement/ERP
            space we already work in through our services business. Each moves up to a full product
            section only once it is real and in production.
          </p>
          <Row className="g-4 mt-1">
            {ROADMAP.map((r, i) => (
              <Col md={6} xl={4} key={r.title}>
                <div className="jocproducts-road joc-reveal joc-rv-flip" style={delay(i)}>
                  <span className={`joc-bubble${i % 2 ? " joc-bubble-orange" : ""}`} />
                  <span className="jocproducts-road-chip">Planned</span>
                  <div className="jocproducts-module-icon">
                    <r.icon size={21} />
                  </div>
                  <h4>{r.title}</h4>
                  <p>{r.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* closing CTA */}
      <section className="jocproducts-section">
        <Container>
          <div className="jocproducts-cta joc-reveal joc-rv-zoom">
            <span className="joc-bubble" />
            <span className="joc-bubble joc-bubble-bl joc-bubble-orange" />
            <h2>Need something our products don't cover yet?</h2>
            <p>
              If HRMS & Payroll is close but not quite right, we can extend it — or
              build the platform you need with the same team that runs ours.
            </p>
            <div className="jocproducts-cta-actions">
              <TrackedLink
                to="/contact" className="jocpage-btn"
                track={{ type: "contact", name: "schedule_consultation", location: CTA_LOCATION.CONTENT_SECTION }}
              >
                Schedule a Consultation <ArrowRight size={17} />
              </TrackedLink>
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

export default Products;