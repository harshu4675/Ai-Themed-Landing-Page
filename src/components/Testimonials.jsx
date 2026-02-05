function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "Cortex AI transformed our customer service. Response times dropped 80% and satisfaction scores are at an all-time high. The API is incredibly well-documented.",
      author: {
        name: "Sarah Chen",
        title: "CTO, TechFlow Inc",
        avatar: "👩‍💼",
      },
    },
    {
      rating: 5,
      text: "We evaluated 8 AI platforms before choosing Cortex. The performance, ease of integration, and support are unmatched. Worth every penny.",
      author: {
        name: "Marcus Johnson",
        title: "Head of AI, DataScale",
        avatar: "👨‍💻",
      },
    },
    {
      rating: 5,
      text: "From prototype to production in 2 weeks. Cortex's pre-trained models and fine-tuning capabilities saved us months of development time.",
      author: {
        name: "Elena Rodriguez",
        title: "VP Engineering, FinServe",
        avatar: "👩‍🔬",
      },
    },
  ];

  return (
    <section className="section" id="testimonials">
      <div className="section-header">
        <span className="section-badge">Testimonials</span>
        <h2 className="section-title">
          Trusted by{" "}
          <span className="section-title-gradient">Industry Leaders</span>
        </h2>
        <p className="section-description">
          Join thousands of companies building the future with Cortex AI.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span className="star" key={i}>
                  ★
                </span>
              ))}
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-author">
              <div className="author-avatar">{testimonial.author.avatar}</div>
              <div className="author-info">
                <h4>{testimonial.author.name}</h4>
                <p>{testimonial.author.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
