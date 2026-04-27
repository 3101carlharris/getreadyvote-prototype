export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="site-footer__inner">
        <p className="site-footer__brand">GetReadyVote</p>
        <nav aria-label="Footer links" className="site-footer__links">
          <a href="#" className="site-footer__link">Get text alerts</a>
          <a href="#" className="site-footer__link">Privacy</a>
          <a href="#" className="site-footer__link">SMS Terms</a>
        </nav>
        <div className="site-footer__cfa">
          <p>This is a free service built by Code for America — a nonprofit that uses technology to make government work for the people who need it most.</p>
        </div>
      </div>
    </footer>
  );
}
