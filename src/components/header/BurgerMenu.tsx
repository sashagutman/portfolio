import { useId, useRef, type FunctionComponent } from "react";
import type { NavItem } from "./types/navType";
import "../../styles/header-style/burger-menu.css";
import { Link } from "react-router-dom";

interface BurgerMenuProps {
  items: NavItem[];
}

const BurgerMenu: FunctionComponent<BurgerMenuProps> = ({ items }) => {
  const uid = useId();
  const checkboxId = `burger-btn-${uid}`;
  const cbRef = useRef<HTMLInputElement | null>(null);

  const closeMenu = () => {
    if (cbRef.current) cbRef.current.checked = false;
  };

  return (
    <div className="burger">
      <input
        ref={cbRef}
        className="burger__btn"
        type="checkbox"
        id={checkboxId}
      />

      <label className="burger-icon burger1" htmlFor={checkboxId} aria-label="Toggle menu">
  <span className="burger-bars"></span>
</label>

      {/* оверлей — клик по нему закрывает меню */}
      <label className="burger__overlay" htmlFor={checkboxId} aria-hidden="true" />

      <nav className="burger__menu" aria-label="Mobile navigation">
        <ul className="burger__list">
          {items.map(({ label, href }) => (
            <li className="burger__item" key={href}>
              <Link className="burger__link" to={href} onClick={closeMenu}>
                {label}
                <span className="burger__underline" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
