import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close when navigating to a new page
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen]);

  return (
    <header className="site-header" role="banner">
      <Link to="/" className="site-header__logo" aria-label="GetReadyVote – home">
        GetReadyVote
      </Link>

      {/* Desktop nav */}
      <nav className="site-header__nav" aria-label="Main navigation">
        <Link to="/voter-plan" className="site-header__nav-link">My voter plan</Link>
        <a href="#" className="site-header__nav-link">Get text alerts</a>
        <a href="#" className="site-header__nav-link">Privacy</a>
        <a href="#" className="site-header__nav-link">Terms of Service</a>
      </nav>

      {/* Hamburger / close button */}
      <button
        className={`site-header__menu${isOpen ? ' site-header__menu--open' : ''}`}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        type="button"
        onClick={() => setIsOpen(o => !o)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      {/* Mobile nav drawer */}
      {isOpen && (
        <nav id="mobile-nav" className="site-header__mobile-nav" aria-label="Mobile navigation">
          <Link to="/voter-plan" className="site-header__mobile-link" onClick={() => setIsOpen(false)}>My voter plan</Link>
          <a href="#" className="site-header__mobile-link" onClick={() => setIsOpen(false)}>Get text alerts</a>
          <a href="#" className="site-header__mobile-link" onClick={() => setIsOpen(false)}>Privacy</a>
          <a href="#" className="site-header__mobile-link" onClick={() => setIsOpen(false)}>Terms of Service</a>
        </nav>
      )}
    </header>
  );
}
