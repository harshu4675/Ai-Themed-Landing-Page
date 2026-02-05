import { Link } from "react-router-dom";

function Hero() {
  const stats = [
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "10M+", label: "API Requests/Day" },
    { number: "500+", label: "Enterprise Clients" },
    { number: "<15ms", label: "Avg Response Time" },
  ];

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          <span className="badge-new">NEW</span>
          <span>Cortex AI v4.0 is now available</span>
        </div>

        <h1 className="hero-title">
          <span className="title-line">The Future of</span>
          <span className="title-line title-gradient">
            Artificial Intelligence
          </span>
          <span className="title-line">Starts Here</span>
        </h1>

        <p className="hero-description">
          Build, deploy, and scale intelligent applications with the most
          advanced AI platform. Powerful APIs, pre-trained models, and
          enterprise-grade infrastructure — all in one place.
        </p>

        <div className="hero-buttons">
          <Link to="/signup" className="btn btn-primary btn-large">
            Start Free Trial
            <span>⚡</span>
          </Link>
          <button className="btn btn-secondary btn-large">
            <span>▶</span>
            Watch Demo
          </button>
        </div>

        <div className="hero-stats">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="ai-visual">
          <div className="visual-core">
            <span className="core-icon">🧠</span>
          </div>

          <div className="orbit-ring orbit-ring-1">
            <div
              className="orbit-node orbit-node-purple"
              style={{ top: 0, left: "50%", transform: "translateX(-50%)" }}
            />
            <div
              className="orbit-node orbit-node-pink"
              style={{ bottom: 0, left: "50%", transform: "translateX(-50%)" }}
            />
          </div>

          <div className="orbit-ring orbit-ring-2">
            <div
              className="orbit-node orbit-node-cyan"
              style={{ top: "50%", left: 0, transform: "translateY(-50%)" }}
            />
            <div
              className="orbit-node orbit-node-orange"
              style={{ top: "50%", right: 0, transform: "translateY(-50%)" }}
            />
          </div>

          <div className="orbit-ring orbit-ring-3">
            <div
              className="orbit-node orbit-node-purple"
              style={{ top: "15%", left: "15%" }}
            />
            <div
              className="orbit-node orbit-node-pink"
              style={{ bottom: "15%", right: "15%" }}
            />
          </div>
        </div>

        <div className="floating-card floating-card-1">
          <div className="card-icon">📊</div>
          <div className="card-content">
            <h4>Processing Speed</h4>
            <p>2.4M tok/s</p>
          </div>
        </div>

        <div className="floating-card floating-card-2">
          <div className="card-icon">🎯</div>
          <div className="card-content">
            <h4>Model Accuracy</h4>
            <p>99.97%</p>
          </div>
        </div>

        <div className="floating-card floating-card-3">
          <div className="card-icon">⚡</div>
          <div className="card-content">
            <h4>Response Time</h4>
            <p>12ms avg</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
