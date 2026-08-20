import { useState } from 'react';
import { navLinks } from '../../data/navLinks';
import './Nav.css';

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

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className="nav__desktop">
        <nav aria-label="Primary">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="nav__link" href={link.href}>
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
        className="nav__toggle"
        aria-expanded={isMenuOpen}
        aria-controls="nav-mobile-panel"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div
        id="nav-mobile-panel"
        className={`nav__mobile-panel${isMenuOpen ? ' nav__mobile-panel--open' : ''}`}
      >
        <nav aria-label="Mobile">
          <ul className="nav__mobile-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="nav__link" href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--primary nav__mobile-cta" href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </div>
    </>
  );
}

export default Nav;
