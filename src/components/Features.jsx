function Features() {
  const features = [
    {
      icon: "🧠",
      title: "Neural Processing",
      description:
        "State-of-the-art transformer models with 100B+ parameters. Fine-tune on your data in minutes.",
      link: "Explore Models →",
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description:
        "Sub-15ms inference times with our optimized infrastructure. Deployed across 50+ global edge locations.",
      link: "View Benchmarks →",
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description:
        "SOC 2 Type II certified. HIPAA & GDPR compliant. Your data is encrypted at rest and in transit.",
      link: "Security Details →",
    },
    {
      icon: "🌐",
      title: "Global Scale",
      description:
        "Auto-scaling infrastructure that handles millions of requests. 99.99% uptime SLA guaranteed.",
      link: "Infrastructure →",
    },
    {
      icon: "🔌",
      title: "Easy Integration",
      description:
        "SDKs for Python, JavaScript, Go, and more. REST & GraphQL APIs. Plug and play in 5 minutes.",
      link: "View SDKs →",
    },
    {
      icon: "📈",
      title: "Advanced Analytics",
      description:
        "Real-time dashboards, usage insights, and model performance metrics. Make data-driven decisions.",
      link: "Analytics Features →",
    },
  ];

  return (
    <section className="section" id="features">
      <div className="section-header">
        <span className="section-badge">Features</span>
        <h2 className="section-title">
          Everything You Need to Build{" "}
          <span className="section-title-gradient">Intelligent Apps</span>
        </h2>
        <p className="section-description">
          From pre-trained models to custom fine-tuning, Cortex AI provides all
          the tools you need to bring AI into your products.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            className="feature-card"
            key={index}
            style={{
              animationDelay: `${index * 0.1}s`,
              animation: "fadeInUp 0.6s ease-out backwards",
            }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
            <a href="#" className="feature-link">
              {feature.link}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
