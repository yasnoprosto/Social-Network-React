import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

type DialogsItemPropsType = {
  path: string;
  userName: string;
};

type MessagePropType = {
  messageContent: string
}

const DialogsItem = (props: DialogsItemPropsType) => {
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

const Message = (props: MessagePropType) => {
  return <div className={s.dialogs__message}>{props.messageContent}!</div>;
};

const Dialogs = () => {
  return (
    <div className={s.dialogs__container}>
      <div className={s.dialogs__users}>
        <DialogsItem path="/dialogs/1" userName="Олег" />
        <DialogsItem path="/dialogs/2" userName="Антон" />
        <DialogsItem path="/dialogs/3" userName="Евгений" />
        <DialogsItem path="/dialogs/4" userName="Мама" />
        <DialogsItem path="/dialogs/5" userName="Алина" />
        <DialogsItem path="/dialogs/6" userName="Артур" />
        <DialogsItem path="/dialogs/7" userName="Миша" />
        <DialogsItem path="/dialogs/8" userName="Арсений" />
      </div>
      <div className={s.dialogs__messages}>
        <Message messageContent="Привет!"/>
        <Message messageContent="Как ты?"/>
        <Message messageContent="Я тебя видел сегодня."/>
        <Message messageContent="Ты бегал за авокадо!"/>
        <Message messageContent="Хаха!"/>
      </div>
    </div>
  );
};

export default Dialogs;
