import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header" role="banner">
      <Link to="/" className="site-header__logo" aria-label="GetReadyVote – home">
        GetReadyVote
      </Link>
      <nav className="site-header__nav" aria-label="Main navigation">
        <Link to="/voter-plan" className="site-header__nav-link">My voter plan</Link>
        <a href="#" className="site-header__nav-link">Get text alerts</a>
        <a href="#" className="site-header__nav-link">Privacy</a>
        <a href="#" className="site-header__nav-link">Terms of Service</a>
      </nav>
      <button
        className="site-header__menu"
        aria-label="Open menu"
        aria-expanded="false"
        type="button"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </header>
  );
}
