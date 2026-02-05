import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-icon">✨</div>
        <h2 className="cta-title">
          Ready to Build the{" "}
          <span className="section-title-gradient">Future?</span>
        </h2>
        <p className="cta-description">
          Join 500+ companies already using Cortex AI to power their intelligent
          applications. Start your free 14-day trial today.
        </p>
        <div className="cta-buttons">
          <Link to="/signup" className="btn btn-primary btn-large">
            Start Free Trial
            <span>⚡</span>
          </Link>
          <Link to="/contact" className="btn btn-outline btn-large">
            Talk to Sales
            <span>💬</span>
          </Link>
        </div>
        <p className="cta-note">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
}

export default CTA;
