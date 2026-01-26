import type { FunctionComponent } from "react";
import type { NavItem } from "./types/navType";
import "../../styles/header-style/header.css";
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-router-dom";

interface HeaderProps {
  items: NavItem[];
}

const Header: FunctionComponent<HeaderProps> = ({ items }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <Link className="header__logo-link" to="/#home" aria-label="Home">
              <img
                src={`${import.meta.env.BASE_URL}projects-img/logoAG.png`}
                alt="AG logo"
                width={50}
                height={50}
                decoding="async"
                loading="eager"
                fetchPriority="high"
              />
              <span>Alex Gutman</span>
            </Link>
          </div>

          <nav className="header__nav nav" aria-label="Main navigation">
            <ul className="nav__list">
              {items.map(({ label, href }) => (
                <li className="nav__item" key={href}>
                  <Link className="nav__link" to={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <BurgerMenu items={items} />
        </div>
      </div>
    </header>
  );
};

export default Header;
