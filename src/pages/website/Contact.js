import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { ArrowRight, Clock, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { CONTACT } from "../../utils/constants";
import { SERVICES } from "./servicesData";
import "./Pages.css";
import "./Contact.css";

const delay = (i) => ({ transitionDelay: `${Math.min(i, 6) * 90}ms` });

const CHANNELS = [
  {
    icon: Phone,
    label: "Call us",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
    note: "Talk directly to the team that would build your project.",
  },
  {
    icon: Mail,
    label: "Email us",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    note: "Share a brief, a spec, or just the problem you're trying to solve.",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: CONTACT.addressLines.join(", "),
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.mapQuery)}`,
    note: "Our office in Pimple Nilakh, Pune.",
  },
];

const EMPTY = { name: "", email: "", phone: "", company: "", interest: "", message: "" };

function Contact() {
  useScrollReveal();
  const [form, setForm] = useState(EMPTY);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const topic = form.interest ? " — " + form.interest : "";
    const subject = `Project enquiry${topic} from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      form.company && `Company: ${form.company}`,
      form.interest && `Interested in: ${form.interest}`,
      "",
      form.message,
    ]
      .filter((line) => line !== false && line !== "")
      .join("\n");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="joccontact-wrap">
      {/* Hero */}
      <section className="jocpage-hero">
        <span className="jocpage-hero-grid" />
        <Container>
          <div className="jocpage-hero-inner">
            <span className="jocpage-eyebrow joc-reveal joc-rv-drop">Contact Us</span>
            <h1 className="jocpage-title joc-reveal joc-rv-blur" style={delay(1)}>
              <span>Let's talk about what you're building.</span>
            </h1>
            <p className="jocpage-text joc-reveal joc-rv-left" style={delay(2)}>
              A new product, a platform that has outgrown its spreadsheets, or a website that needs
              to earn trust — tell us where you are and we'll come back with honest next steps.
            </p>
          </div>
        </Container>
      </section>

      {/* Channels */}
      <section className="joccontact-section">
        <Container>
          <Row className="g-4">
            {CHANNELS.map((c, i) => (
              <Col md={4} key={c.label}>
                <a
                  href={c.href}
                  target={c.icon === MapPin ? "_blank" : undefined}
                  rel={c.icon === MapPin ? "noreferrer" : undefined}
                  className="joccontact-channel joc-reveal joc-rv-zoom"
                  style={delay(i)}
                >
                  <span className={`joc-bubble${i === 1 ? " joc-bubble-orange" : ""}`} />
                  <span className="joccontact-channel-icon">
                    <c.icon size={22} />
                  </span>
                  <span className="joccontact-channel-label">{c.label}</span>
                  <strong>{c.value}</strong>
                  <p>{c.note}</p>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Form + map */}
      <section className="joccontact-section joccontact-section-alt">
        <Container>
          <Row className="g-4">
            <Col lg={7}>
              <form className="joccontact-form joc-reveal joc-rv-left" onSubmit={submit}>
                <span className="joc-bubble" />
                <h2>
                  <MessageSquare size={22} /> Send us a message
                </h2>
                <Row className="g-3">
                  <Col md={6}>
                    <label htmlFor="contact-name">Name *</label>
                    <input id="contact-name" name="name" required value={form.name} onChange={update} />
                  </Col>
                  <Col md={6}>
                    <label htmlFor="contact-email">Email *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update}
                    />
                  </Col>
                  <Col md={6}>
                    <label htmlFor="contact-phone">Phone</label>
                    <input id="contact-phone" name="phone" type="tel" value={form.phone} onChange={update} />
                  </Col>
                  <Col md={6}>
                    <label htmlFor="contact-company">Company</label>
                    <input id="contact-company" name="company" value={form.company} onChange={update} />
                  </Col>
                  <Col xs={12}>
                    <label htmlFor="contact-interest">What do you need help with?</label>
                    <select id="contact-interest" name="interest" value={form.interest} onChange={update}>
                      <option value="">Select a service or product</option>
                      <option>Justonclick HRMS & Payroll</option>
                      {SERVICES.map((s) => (
                        <option key={s.id}>{s.title}</option>
                      ))}
                      <option>Something else</option>
                    </select>
                  </Col>
                  <Col xs={12}>
                    <label htmlFor="contact-message">Message *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={update}
                    />
                  </Col>
                </Row>
                <button type="submit" className="jocpage-btn joccontact-submit">
                  Send Message <Send size={16} />
                </button>
                <p className="joccontact-form-note">
                  Sending opens your email app with these details addressed to {CONTACT.email}.
                </p>
              </form>
            </Col>

            <Col lg={5}>
              <div className="joccontact-office joc-reveal joc-rv-right">
                <h2>
                  <MapPin size={22} /> Our office
                </h2>
                <address>
                  <strong>Justonclick</strong>
                  {CONTACT.addressLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
                <div className="joccontact-map">
                  <iframe
                    title="Justonclick office location on Google Maps"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      CONTACT.mapQuery
                    )}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="joccontact-reply">
                  <Clock size={16} /> We reply to every enquiry within one business day.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="joccontact-section">
        <Container>
          <div className="joccontact-cta joc-reveal joc-rv-zoom">
            <h2>Not ready to talk yet?</h2>
            <p>Browse what we build and the work we've already delivered.</p>
            <div className="jocpage-actions justify-content-center">
              <Link to="/services" className="jocpage-btn">
                Explore Services <ArrowRight size={17} />
              </Link>
              <Link to="/case-studies" className="jocpage-btn-ghost">
                See Our Work
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Contact;
