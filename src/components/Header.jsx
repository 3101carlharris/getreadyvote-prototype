import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header" role="banner">
      <Link to="/" className="site-header__logo" aria-label="GetReadyVote – home">
        GetReadyVote
      </Link>
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
