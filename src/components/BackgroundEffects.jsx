import { useEffect, useState } from "react";

function BackgroundEffects() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const colors = ["purple", "pink", "cyan"];
    const generatedParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <>
      <div className="bg-grid" />
      <div className="noise-overlay" />
      <div className="bg-glow">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="glow-orb glow-orb-3" />
        <div className="glow-orb glow-orb-4" />
      </div>
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`particle particle-${particle.color}`}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}

export default BackgroundEffects;
