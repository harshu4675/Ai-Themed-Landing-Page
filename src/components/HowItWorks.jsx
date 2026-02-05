function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: "🔗",
      title: "Connect Your Data",
      description:
        "Integrate your databases, APIs, and data streams seamlessly. We support 200+ data sources including AWS, GCP, Azure, Snowflake, and MongoDB.",
      features: ["REST API", "GraphQL", "Webhooks", "SDKs"],
    },
    {
      number: "02",
      icon: "🎛️",
      title: "Train & Fine-tune",
      description:
        "Use our visual model builder or bring your own. Auto-tune hyperparameters with our intelligent optimization engine for peak performance.",
      features: ["AutoML", "Custom Models", "Transfer Learning", "A/B Testing"],
    },
    {
      number: "03",
      icon: "🚀",
      title: "Deploy & Scale",
      description:
        "One-click deployment to our global edge network. Real-time monitoring, automatic scaling, and instant rollbacks when you need them.",
      features: ["Edge Deploy", "Auto-scaling", "Monitoring", "CI/CD"],
    },
  ];

  return (
    <section className="section" id="how-it-works">
      <div className="section-header">
        <span className="section-badge">Process</span>
        <h2 className="section-title">
          From Idea to Production{" "}
          <span className="section-title-gradient">in Minutes</span>
        </h2>
        <p className="section-description">
          Our streamlined workflow gets you from zero to production faster than
          any other platform. No infrastructure headaches.
        </p>
      </div>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-item" key={index}>
            <div className="step-number-wrapper">
              <div className="step-number">{step.number}</div>
              <div className="step-icon-badge">{step.icon}</div>
            </div>
            <div className="step-content">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <div className="step-features">
                {step.features.map((feature, fIndex) => (
                  <span className="step-feature-tag" key={fIndex}>
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
