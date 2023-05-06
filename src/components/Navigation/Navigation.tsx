import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.nav}>
        <NavLink
          className={s.nav__item}
          activeClassName={s.activeLink}
          to="/profile"
        >
          Profile
        </NavLink>
      <div className={s.nav__container}>
        <NavLink
          className={s.nav__item}
          activeClassName={s.activeLink}
          to="/dialogs"
        >
          Messages
        </NavLink>
      </div>
      <div className={s.nav__container}>
        <NavLink className={s.nav__item} activeClassName={s.activeLink} to="/news">
          News
        </NavLink>
      </div>
      <div className={s.nav__container}>
        <NavLink className={s.nav__item} activeClassName={s.activeLink} to="/music">
          Music
        </NavLink>
      </div>
      <div className={s.nav__container}>
        <NavLink
          className={s.nav__item}
          activeClassName={s.activeLink}
          to="/settings"
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
