import { NavLink } from "react-router-dom";
import s from "../Dialogs.module.css";

// ~~~~~~~~~~~~~~~~~~ Props Type ~~~~~~~~~~~~~~~~~~~~~ //

type FriendsListPropsType = {
  path: string;
  userName: string;
  avatarURL: string;
};

// ~~~~~~~~~~~~~~~~~~~ JSX Component ~~~~~~~~~~~~~~~~~~~~ //

const Dialog = (props: FriendsListPropsType) => {
  return (
    <div className={s.dialogs__item + " " + s.active}>
      <NavLink
        to={props.path}
        className={s.dialogs__item}
        activeClassName={s.activeLink}
      >
        <img
          className={s.dialogs__item_img}
          src={props.avatarURL}
          alt="avatar"
        />
        <span className={s.dialogs__item_text}>{props.userName}</span>
      </NavLink>
    </div>
  );
};

export default Dialog;
