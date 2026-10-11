import React from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { POSTS } from "./blogData";
import { PostMeta } from "./Blog";
import "./Pages.css";
import "./Blog.css";

function Block({ block }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "list":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "image":
      return (
        <figure className="jocblog-figure">
          <img src={block.src} alt={block.caption} width={1280} height={720} loading="lazy" />
          <figcaption>{block.caption}</figcaption>
        </figure>
      );
    case "quote":
      return <blockquote>{block.text}</blockquote>;
    default:
      return <p>{block.text}</p>;
  }
}

function BlogPost() {
  useScrollReveal();
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="jocblog-wrap">
        <section className="jocblog-section text-center">
          <Container>
            <h1 className="jocblog-missing">Article not found</h1>
            <Link to="/blog" className="jocpage-btn">
              <ArrowLeft size={16} /> Back to the blog
            </Link>
          </Container>
        </section>
      </main>
    );
  }

  const others = POSTS.filter((p) => p.slug !== slug);

  return (
    <main className="jocblog-wrap" key={slug}>
      <article>
        <header className="jocblog-post-hero">
          <Container>
            <div className="jocblog-narrow">
              <Link to="/blog" className="jocblog-back">
                <ArrowLeft size={15} /> All articles
              </Link>
              <span className="jocblog-tag jocblog-tag-inline">{post.category}</span>
              <h1>{post.title}</h1>
              <p className="jocblog-lede">{post.excerpt}</p>
              <PostMeta post={post} />
            </div>
            <figure className="jocblog-cover">
              <img src={post.cover} alt={post.coverAlt} width={1280} height={720} />
            </figure>
          </Container>
        </header>

        <Container>
          <div className="jocblog-narrow jocblog-body">
            {post.body.map((block, i) => (
              <Block block={block} key={i} />
            ))}

            <aside className="jocblog-cta">
              <h2>See Justonclick HRMS with your own data</h2>
              <p>
                We'll set up your organization and walk you through attendance, leave and payroll
                end to end.
              </p>
              <div className="jocpage-actions">
                <Link to="/contact" className="jocpage-btn">
                  Book a Demo <ArrowRight size={16} />
                </Link>
                <a
                  href="https://hrms.justonclick.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="jocpage-btn-ghost"
                >
                  Visit HRMS <ExternalLink size={15} />
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </article>

      {others.length > 0 && (
        <section className="jocblog-section jocblog-section-alt">
          <Container>
            <h2 className="jocblog-heading">More from the blog</h2>
            <Row className="g-4">
              {others.map((p) => (
                <Col key={p.slug} md={6}>
                  <Link to={`/blog/${p.slug}`} className="jocblog-card">
                    <span className="jocblog-card-cover">
                      <img src={p.cover} alt={p.coverAlt} width={1280} height={720} loading="lazy" />
                      <span className="jocblog-tag">{p.category}</span>
                    </span>
                    <span className="jocblog-card-body">
                      <PostMeta post={p} />
                      <h2>{p.title}</h2>
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
      )}
    </main>
  );
}

export default BlogPost;
