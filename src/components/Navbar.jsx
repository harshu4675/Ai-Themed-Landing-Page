import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

function Navbar({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "About", href: "/about", isRoute: true },
    { name: "Contact", href: "/contact", isRoute: true },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="logo">
        <Logo />
      </Link>

      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.name}>
            {link.isRoute ? (
              <Link
                to={link.href}
                className={`nav-link ${location.pathname === link.href ? "active" : ""}`}
              >
                {link.name}
              </Link>
            ) : (
              <a href={link.href} className="nav-link">
                {link.name}
              </a>
            )}
          </li>
        ))}
      </ul>

      <div className="nav-buttons">
        <Link to="/login" className="btn btn-ghost">
          Sign In
        </Link>
        <Link to="/signup" className="btn btn-primary">
          Get Started
          <span>→</span>
        </Link>
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
