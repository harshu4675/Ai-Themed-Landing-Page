function Logo({ size = "normal" }) {
  const iconSize = size === "large" ? 60 : 52;
  const textSize = size === "large" ? "2rem" : "1.6rem";

  return (
    <>
      <div className="logo-icon" style={{ width: iconSize, height: iconSize }}>
        <svg viewBox="0 0 24 24" fill="white">
          {/* Brain/Neural Network Icon */}
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
            opacity="0.3"
          />
          <circle cx="12" cy="12" r="3" fill="white" />
          <circle cx="12" cy="5" r="1.5" fill="white" />
          <circle cx="12" cy="19" r="1.5" fill="white" />
          <circle cx="5" cy="12" r="1.5" fill="white" />
          <circle cx="19" cy="12" r="1.5" fill="white" />
          <circle cx="7.05" cy="7.05" r="1.2" fill="white" />
          <circle cx="16.95" cy="7.05" r="1.2" fill="white" />
          <circle cx="7.05" cy="16.95" r="1.2" fill="white" />
          <circle cx="16.95" cy="16.95" r="1.2" fill="white" />
          <path
            d="M12 8v1M12 15v1M8 12h1M15 12h1M9.17 9.17l.71.71M14.12 14.12l.71.71M9.17 14.83l.71-.71M14.12 9.88l.71-.71"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </div>
      <span className="logo-text" style={{ fontSize: textSize }}>
        Cortex
      </span>
    </>
  );
}

export default Logo;
