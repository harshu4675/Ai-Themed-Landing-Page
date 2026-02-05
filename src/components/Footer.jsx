import { Link } from "react-router-dom";
import Logo from "./Logo";

function Footer() {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "API Reference", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Changelog", href: "#" },
    ],
    company: [
      { name: "About Us", href: "/about", isRoute: true },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" },
      { name: "Contact", href: "/contact", isRoute: true },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Community", href: "#" },
      { name: "Status", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Security", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: "𝕏", name: "Twitter" },
    { icon: "💼", name: "LinkedIn" },
    { icon: "🐙", name: "GitHub" },
    { icon: "📺", name: "YouTube" },
    { icon: "💬", name: "Discord" },
  ];

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <Logo />
          </Link>
          <p className="footer-description">
            Building the next generation of AI-powered applications. Trusted by
            thousands of developers and enterprises worldwide.
          </p>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                href="#"
                className="social-link"
                key={index}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <h4>Product</h4>
          <ul className="footer-links">
            {footerLinks.product.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul className="footer-links">
            {footerLinks.company.map((link, index) => (
              <li key={index}>
                {link.isRoute ? (
                  <Link to={link.href}>{link.name}</Link>
                ) : (
                  <a href={link.href}>{link.name}</a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul className="footer-links">
            {footerLinks.resources.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <ul className="footer-links">
            {footerLinks.legal.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2026 Cortex AI. All rights reserved.
        </p>
        <div className="footer-legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
      <h6 className="Name">© Harsh Solanki</h6>
    </footer>
  );
}

export default Footer;
