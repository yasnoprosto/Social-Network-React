import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import Friends from "./Friends/Friends";

const Navigation = (props: any) => {
  debugger

  // ~~~~~~~~~~~~~~~~~~~  NAVIGATION MENU ITEM MAPPING JSX  ~~~~~~~~~~~~~~~~~~~~ //

  const navigationMenuItem = props.navigationData.navigationMenuItems.map((i) => {
    return (
      <div className={s.nav__container}>
      <NavLink
        className={s.nav__item}
        activeClassName={s.activeLink}
        to={i.path}
      >
        {i.name}
      </NavLink>
      </div>
    )
  })


  // ~~~~~~~~~~~~~~~~~  NAVIGATION FRIENDS MAPPING JSX ~~~~~~~~~~~~~~~~~~~~~~ //
  
  const friendsList = props.navigationData.friendsListNav.map((f) => {
    return (
      <NavLink className={s.nav__friends_item} to={f.path}>
        <img
          className={s.friends__item_avatar}
          src={f.avatarURL}
          alt="user avatar"
        />
        <div>{f.name}</div>
      </NavLink>
    );
  });

  // ~~~~~~~~~~~~~~~~~~ COMPONENT RENDER ~~~~~~~~~~~~~~~~~~~~~ //
  return (
    <nav className={s.nav}>
      {navigationMenuItem}
      <div className={s.nav__friends_container}>
        <div className={s.nav__friends_header}>Friends</div>
        <div className={s.nav__friends_items}>{friendsList}</div>
      </div>
    </nav>
  );
};

export default Navigation;
