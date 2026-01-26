import type { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const Footer: FunctionComponent = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer__inner">
          <nav className="footer__nav" aria-label="Footer navigation">
            <h3 className="footer__title">Quick links:</h3>
            <ul className="footer__list">
              <li>
                <Link to="/#projects">Projects</Link>
              </li>
              <li>
                <Link to="/playground">Playground</Link>
              </li>
              <li>
                <Link to="/#about">About</Link>
              </li>
              <li>
                <Link to="/#contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="footer__logo">
            <Link className="footer__logo-link" to="/#home" aria-label="Home">
              <img
                src={`${import.meta.env.BASE_URL}projects-img/logoAG.png`}
                alt="AG logo"
                width={60}
                height={60}
                decoding="async"
                loading="eager"
                fetchPriority="high"
              />
            </Link>
          </div>

          <div className="footer__legal">
            <div className="footer__legal-inner">
              <small>© {year} Alex. All rights reserved.</small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
