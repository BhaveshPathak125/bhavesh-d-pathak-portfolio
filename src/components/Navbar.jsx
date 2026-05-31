import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX, HiChevronUp, HiChevronDown } from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`navbar ${scrolled ? 'scrolled' : ''} ${
          collapsed ? 'collapsed' : ''
        }`}
      >
        <a href="#hero" className="navbar-logo">
          Bhavesh Pathak
        </a>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          {/* Retract / Expand toggle */}
          <button
            className="navbar-collapse-btn"
            onClick={() => setCollapsed(!collapsed)}
            aria-label={collapsed ? 'Expand navbar' : 'Collapse navbar'}
          >
            {collapsed ? <HiChevronDown /> : <HiChevronUp />}
          </button>

          {/* Mobile hamburger */}
          <button
            className="navbar-mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Floating expand pill when collapsed */}
      {collapsed && (
        <button
          className="navbar-expand-pill"
          onClick={() => setCollapsed(false)}
          aria-label="Expand navbar"
        >
          <HiChevronDown />
        </button>
      )}
    </>
  );
};

export default Navbar;
