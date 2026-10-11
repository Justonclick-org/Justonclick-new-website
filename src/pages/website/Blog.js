import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { POSTS } from "./blogData";
import "./Pages.css";
import "./Blog.css";

const delay = (i) => ({ transitionDelay: `${Math.min(i, 6) * 90}ms` });

export function PostMeta({ post }) {
  return (
    <span className="jocblog-meta">
      <span>
        <CalendarDays size={14} /> {post.date}
      </span>
      <span>
        <Clock size={14} /> {post.readTime}
      </span>
    </span>
  );
}

function Blog() {
  useScrollReveal();

  return (
    <main className="jocblog-wrap">
      <section className="jocpage-hero">
        <span className="jocpage-hero-grid" />
        <Container>
          <div className="jocpage-hero-inner">
            <span className="jocpage-eyebrow joc-reveal joc-rv-drop">Blog & Insights</span>
            <h1 className="jocpage-title joc-reveal joc-rv-blur" style={delay(1)}>
              <span>Writing from the team doing the work.</span>
            </h1>
            <p className="jocpage-text joc-reveal joc-rv-left" style={delay(2)}>
              Practical guides on HR, payroll, and the software that runs them — drawn from
              building and operating Justonclick HRMS every day.
            </p>
          </div>
        </Container>
      </section>

      <section className="jocblog-section">
        <Container>
          <Row className="g-4">
            {POSTS.map((post, i) => (
              <Col key={post.slug} lg={6}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="jocblog-card joc-reveal joc-rv-zoom"
                  style={delay(i)}
                >
                  <span className="jocblog-card-cover">
                    <img src={post.cover} alt={post.coverAlt} width={1280} height={720} loading="lazy" />
                    <span className="jocblog-tag">{post.category}</span>
                  </span>
                  <span className="jocblog-card-body">
                    <PostMeta post={post} />
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <span className="jocblog-more">
                      Read article <ArrowRight size={15} />
                    </span>
                  </span>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Blog;
