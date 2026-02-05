import { useState } from "react";
import { Link } from "react-router-dom";

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      icon: "🚀",
      monthlyPrice: 29,
      yearlyPrice: 290,
      description: "Perfect for individuals and small projects",
      features: [
        "100,000 API requests/month",
        "5 AI models",
        "Basic analytics",
        "Community support",
        "Standard SLA (99.5%)",
        "Email notifications",
      ],
      featured: false,
      cta: "Get Started",
    },
    {
      name: "Professional",
      icon: "⚡",
      monthlyPrice: 99,
      yearlyPrice: 990,
      description: "For growing teams and businesses",
      features: [
        "1,000,000 API requests/month",
        "Unlimited AI models",
        "Advanced analytics & exports",
        "Priority email support",
        "Custom model training",
        "Team collaboration (15 seats)",
        "Webhook integrations",
        "API rate limiting controls",
      ],
      featured: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      icon: "🏢",
      monthlyPrice: 499,
      yearlyPrice: 4990,
      description: "For large-scale deployments",
      features: [
        "Unlimited API requests",
        "Custom model development",
        "Dedicated infrastructure",
        "24/7 phone & Slack support",
        "SLA guarantee (99.99%)",
        "On-premise deployment",
        "SSO & advanced security",
        "Custom contracts & invoicing",
      ],
      featured: false,
      cta: "Contact Sales",
    },
  ];

  return (
    <section className="section" id="pricing">
      <div className="section-header">
        <span className="section-badge">Pricing</span>
        <h2 className="section-title">
          Simple, Transparent{" "}
          <span className="section-title-gradient">Pricing</span>
        </h2>
        <p className="section-description">
          Start free, scale as you grow. All plans include a 14-day free trial
          with no credit card required.
        </p>
      </div>

      <div className="pricing-toggle">
        <span className={`pricing-toggle-label ${!isYearly ? "active" : ""}`}>
          Monthly
        </span>
        <div
          className={`toggle-switch ${isYearly ? "active" : ""}`}
          onClick={() => setIsYearly(!isYearly)}
        />
        <span className={`pricing-toggle-label ${isYearly ? "active" : ""}`}>
          Yearly
        </span>
        {isYearly && <span className="pricing-badge">Save 20%</span>}
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            className={`pricing-card ${plan.featured ? "featured" : ""}`}
            key={index}
          >
            <div className="pricing-icon">{plan.icon}</div>
            <div className="pricing-name">{plan.name}</div>
            <div className="pricing-price">
              ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              <span>/{isYearly ? "year" : "month"}</span>
            </div>
            <div className="pricing-description">{plan.description}</div>

            <ul className="pricing-features">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex}>
                  <span className="check-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              to="/signup"
              className={`btn btn-full ${plan.featured ? "btn-primary" : "btn-outline"}`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
