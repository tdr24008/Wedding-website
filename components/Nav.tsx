"use client";

import { useState, useEffect, useCallback } from "react";

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
  const [activeSection, setActiveSection] = useState("#home");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    const scrollY = window.scrollY + 120;
    for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
      const el = document.querySelector(NAV_ITEMS[i].href);
      if (el && (el as HTMLElement).offsetTop <= scrollY) {
        setActiveSection(NAV_ITEMS[i].href);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const linkStyle = (href: string): React.CSSProperties => ({
    fontFamily: "var(--font-karla), sans-serif",
    fontSize: 13,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: activeSection === href ? "#B8935A" : "#5C3A1E",
    textDecoration: "none",
    transition: "color 0.2s",
    paddingBottom: 2,
    borderBottom: activeSection === href ? "1px solid #B8935A" : "1px solid transparent",
  });

  return (
    <nav
      aria-label="Main navigation"
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
            fontSize: 26,
            color: "#3D2514",
            textDecoration: "none",
            fontWeight: 400,
          }}
        >
          T <span style={{ fontStyle: "italic" }}>&amp;</span> M
        </a>

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
                style={linkStyle(item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

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
          <span style={{ width: 24, height: 2, backgroundColor: "#3D2514", display: "block", transition: "transform 0.2s", transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
          <span style={{ width: 24, height: 2, backgroundColor: "#3D2514", display: "block", transition: "opacity 0.2s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ width: 24, height: 2, backgroundColor: "#3D2514", display: "block", transition: "transform 0.2s", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
        </button>
      </div>

      {menuOpen && (
        <ul
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
                  fontSize: 14,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: activeSection === item.href ? "#B8935A" : "#5C3A1E",
                  textDecoration: "none",
                  display: "block",
                  padding: "12px 0",
                  borderBottom: "1px solid #D9C9A8",
                  transition: "color 0.2s",
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
