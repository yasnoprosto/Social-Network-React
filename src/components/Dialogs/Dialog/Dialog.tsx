import { NavLink } from "react-router-dom";
import s from "../Dialogs.module.css";


// ~~~~~~~~~~~~~~~~~~ Props Type ~~~~~~~~~~~~~~~~~~~~~ //

type FriendsListPropsType = {
    path: string;
    userName: string;
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
          {props.userName}
        </NavLink>
      </div>
    );
  };

  export default Dialog;