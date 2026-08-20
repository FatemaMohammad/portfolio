import { useEffect, useState } from 'react';
import { navLinks } from '../../data/navLinks';
import './Header.css';

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 5H17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M3 10H17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M3 15H17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 4L16 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M16 4L4 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header${isScrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner container">
        <a href="#" className="header__brand">
          Fatema
        </a>

        <div className="header__nav-group">
          <nav aria-label="Primary">
            <ul className="header__nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a className="header__nav-link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a className="btn btn--primary" href="#contact">
            Contact
          </a>
        </div>

        <button
          type="button"
          className="header__menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="header-mobile-panel"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        id="header-mobile-panel"
        className={`header__mobile-panel${isMenuOpen ? ' header__mobile-panel--open' : ''}`}
      >
        <nav aria-label="Mobile" className="container">
          <ul className="header__mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="header__nav-link" href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--primary header__mobile-cta" href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
