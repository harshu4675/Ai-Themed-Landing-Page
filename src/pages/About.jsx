import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const team = [
    {
      name: "Alex Rivera",
      role: "CEO & Co-founder",
      avatar: "👨‍💼",
      bio: "Former Google AI Lead",
    },
    {
      name: "Sarah Chen",
      role: "CTO & Co-founder",
      avatar: "👩‍💻",
      bio: "PhD in Machine Learning, Stanford",
    },
    {
      name: "Marcus Johnson",
      role: "VP of Engineering",
      avatar: "👨‍🔬",
      bio: "Ex-Amazon, 15+ years in AI",
    },
    {
      name: "Emily Watson",
      role: "Head of Product",
      avatar: "👩‍🎨",
      bio: "Former Product Lead at OpenAI",
    },
    {
      name: "David Kim",
      role: "Head of AI Research",
      avatar: "🧑‍🔬",
      bio: "Published 50+ ML papers",
    },
    {
      name: "Lisa Park",
      role: "VP of Sales",
      avatar: "👩‍💼",
      bio: "Built teams at Salesforce & Slack",
    },
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation First",
      desc: "We push boundaries and challenge the status quo every day.",
    },
    {
      icon: "🤝",
      title: "Customer Obsessed",
      desc: "Our customers success is our success. We go above and beyond.",
    },
    {
      icon: "🔒",
      title: "Trust & Security",
      desc: "We handle data with the utmost care and transparency.",
    },
    {
      icon: "🌍",
      title: "Global Impact",
      desc: "We build AI that benefits humanity and creates positive change.",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Founded",
      desc: "Cortex AI was born in a garage in San Francisco",
    },
    {
      year: "2021",
      title: "Seed Funding",
      desc: "Raised $5M to build the core platform",
    },
    {
      year: "2022",
      title: "Series A",
      desc: "Raised $25M, launched first public API",
    },
    {
      year: "2023",
      title: "Series B",
      desc: "Raised $100M, reached 500+ enterprise clients",
    },
    {
      year: "2024",
      title: "Today",
      desc: "10M+ daily API calls, global team of 200+",
    },
  ];

  return (
    <>
      <Navbar scrolled={scrolled} />

      {/* Hero */}
      <section
        style={{
          padding: "180px 60px 120px",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        <span className="section-badge">About Us</span>
        <h1
          style={{
            fontFamily: "Sora, sans-serif",
            fontSize: "4rem",
            fontWeight: 800,
            marginBottom: "24px",
            letterSpacing: "-1px",
          }}
        >
          Building the Future of{" "}
          <span className="section-title-gradient">
            Artificial Intelligence
          </span>
        </h1>
        <p
          style={{
            fontSize: "1.3rem",
            color: "var(--text-secondary)",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: 1.8,
          }}
        >
          We're on a mission to democratize AI and make it accessible to every
          developer and business in the world.
        </p>
      </section>

      {/* Story Section */}
      <section className="section">
        <div
          style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}
        >
          <h2 className="section-title">Our Story</h2>
          <p
            style={{
              fontSize: "1.15rem",
              color: "var(--text-secondary)",
              lineHeight: 2,
              marginTop: "24px",
            }}
          >
            Cortex AI was founded in 2020 by a team of AI researchers and
            engineers who believed that powerful AI tools shouldn't be limited
            to tech giants. We saw developers struggling with complex ML
            infrastructure, and enterprises spending millions building AI
            capabilities from scratch. So we built Cortex — a platform that
            makes state-of-the-art AI accessible through simple APIs.
            <br />
            <br />
            Today, we serve over 500 enterprise clients and process more than 10
            million API calls daily. Our team of 200+ spans 15 countries, united
            by our mission to build AI that empowers everyone.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: "var(--bg-elevated)" }}>
        <div className="section-header">
          <span className="section-badge">Our Values</span>
          <h2 className="section-title">What Drives Us</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "28px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {values.map((value, index) => (
            <div
              key={index}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                borderRadius: "var(--radius-xl)",
                padding: "40px 32px",
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
            >
              <span
                style={{
                  fontSize: "3rem",
                  display: "block",
                  marginBottom: "20px",
                }}
              >
                {value.icon}
              </span>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  marginBottom: "12px",
                }}
              >
                {value.title}
              </h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="section-header">
          <span className="section-badge">Journey</span>
          <h2 className="section-title">Our Milestones</h2>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {milestones.map((milestone, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "40px",
                marginBottom: "48px",
                alignItems: "start",
              }}
            >
              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "2rem",
                  fontWeight: 700,
                  background: "var(--gradient-text)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  minWidth: "100px",
                }}
              >
                {milestone.year}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  {milestone.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "1.05rem",
                  }}
                >
                  {milestone.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: "var(--bg-elevated)" }}>
        <div className="section-header">
          <span className="section-badge">Team</span>
          <h2 className="section-title">Meet Our Leadership</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {team.map((member, index) => (
            <div
              key={index}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                borderRadius: "var(--radius-xl)",
                padding: "36px",
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "var(--gradient-primary)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2.5rem",
                  margin: "0 auto 20px",
                }}
              >
                {member.avatar}
              </div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                {member.name}
              </h3>
              <p
                style={{
                  color: "var(--primary-light)",
                  fontSize: "0.95rem",
                  marginBottom: "8px",
                }}
              >
                {member.role}
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Join Our Team</h2>
          <p className="cta-description">
            We're always looking for talented people to join our mission. Check
            out our open positions.
          </p>
          <div className="cta-buttons">
            <Link to="#" className="btn btn-primary btn-large">
              View Open Positions
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
