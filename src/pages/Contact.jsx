import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "general",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      value: "hello@cortexai.com",
      link: "mailto:hello@cortexai.com",
    },
    { icon: "💬", title: "Live Chat", value: "Available 24/7", link: "#" },
    {
      icon: "📞",
      title: "Call Us",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: "📍",
      title: "Visit Us",
      value: "123 AI Street, San Francisco, CA",
      link: "#",
    },
  ];

  const faqs = [
    {
      q: "What is the response time for support?",
      a: "We typically respond within 2 hours during business hours, and within 24 hours on weekends.",
    },
    {
      q: "Do you offer enterprise support?",
      a: "Yes! Enterprise plans include 24/7 dedicated support with guaranteed SLAs.",
    },
    {
      q: "Can I schedule a demo?",
      a: 'Absolutely! Fill out the form and select "Request Demo" as the subject.',
    },
  ];

  return (
    <>
      <Navbar scrolled={scrolled} />

      {/* Hero */}
      <section
        style={{
          padding: "180px 60px 80px",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        <span className="section-badge">Contact</span>
        <h1
          style={{
            fontFamily: "Sora, sans-serif",
            fontSize: "4rem",
            fontWeight: 800,
            marginBottom: "24px",
            letterSpacing: "-1px",
          }}
        >
          Get in <span className="section-title-gradient">Touch</span>
        </h1>
        <p
          style={{
            fontSize: "1.3rem",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.8,
          }}
        >
          Have a question or want to learn more? We'd love to hear from you.
        </p>
      </section>

      {/* Contact Cards */}
      <section
        style={{ padding: "0 60px 80px", position: "relative", zIndex: 10 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                borderRadius: "var(--radius-xl)",
                padding: "32px",
                textAlign: "center",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "var(--primary)";
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "var(--border-color)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span
                style={{
                  fontSize: "2.5rem",
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                {info.icon}
              </span>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: "8px",
                  color: "var(--text-primary)",
                }}
              >
                {info.title}
              </h3>
              <p
                style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}
              >
                {info.value}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="section">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "60px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {/* Form */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              borderRadius: "var(--radius-xl)",
              padding: "48px",
            }}
          >
            <h2
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "1.8rem",
                fontWeight: 700,
                marginBottom: "8px",
              }}
            >
              Send us a Message
            </h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "32px" }}>
              Fill out the form and we'll get back to you shortly.
            </p>

            {submitted ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "60px 20px",
                }}
              >
                <span
                  style={{
                    fontSize: "4rem",
                    display: "block",
                    marginBottom: "20px",
                  }}
                >
                  ✅
                </span>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    marginBottom: "12px",
                  }}
                >
                  Message Sent!
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Thanks for reaching out. We'll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-input"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <div className="form-group">
                    <label className="form-label">Company (Optional)</label>
                    <input
                      type="text"
                      name="company"
                      className="form-input"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <select
                      name="subject"
                      className="form-input"
                      value={formData.subject}
                      onChange={handleChange}
                      style={{ cursor: "pointer" }}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="sales">Sales Question</option>
                      <option value="support">Technical Support</option>
                      <option value="demo">Request Demo</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "24px" }}>
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    className="form-input"
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{ resize: "vertical", minHeight: "120px" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-full btn-large"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message<span>→</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* FAQ */}
          <div>
            <h2
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "1.8rem",
                fontWeight: 700,
                marginBottom: "32px",
              }}
            >
              Frequently Asked
            </h2>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "var(--radius-lg)",
                    padding: "24px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      marginBottom: "12px",
                    }}
                  >
                    {faq.q}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      fontSize: "0.95rem",
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.1))",
                border: "1px solid rgba(139, 92, 246, 0.3)",
                borderRadius: "var(--radius-lg)",
                padding: "28px",
                marginTop: "32px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontSize: "2rem",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                💡
              </span>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  marginBottom: "8px",
                }}
              >
                Need Quick Help?
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.95rem",
                  marginBottom: "16px",
                }}
              >
                Check out our documentation for instant answers.
              </p>
              <a href="#" className="btn btn-outline btn-small">
                View Docs
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
