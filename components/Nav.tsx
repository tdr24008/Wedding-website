"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Details", href: "#details" },
  { label: "Schedule", href: "#schedule" },
  { label: "Travel", href: "#travel" },
  { label: "RSVP", href: "#rsvp" },
  { label: "Registry", href: "#registry" },
  { label: "FAQs", href: "#faq" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? "rgba(245, 235, 214, 0.97)" : "#F5EBD6",
        borderBottom: scrolled ? "1px solid #D9C9A8" : "1px solid transparent",
        transition: "border-color 0.3s, background-color 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 22,
            color: "#3D2514",
            textDecoration: "none",
            fontWeight: 400,
          }}
        >
          T <span style={{ fontStyle: "italic" }}>&amp;</span> J
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: 28,
          }}
          className="nav-desktop"
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                style={{
                  fontFamily: "var(--font-karla), sans-serif",
                  fontSize: 11,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "#5C3A1E",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="nav-hamburger"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
            flexDirection: "column",
            gap: 5,
          }}
        >
          <span style={{ width: 24, height: 2, backgroundColor: "#3D2514", display: "block" }} />
          <span style={{ width: 24, height: 2, backgroundColor: "#3D2514", display: "block" }} />
          <span style={{ width: 24, height: 2, backgroundColor: "#3D2514", display: "block" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul
          className="nav-mobile"
          style={{
            listStyle: "none",
            padding: "0 24px 16px",
            borderTop: "1px solid #D9C9A8",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                style={{
                  fontFamily: "var(--font-karla), sans-serif",
                  fontSize: 12,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "#5C3A1E",
                  textDecoration: "none",
                  display: "block",
                  padding: "12px 0",
                  borderBottom: "1px solid #D9C9A8",
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Responsive styles for hamburger/desktop toggle */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
