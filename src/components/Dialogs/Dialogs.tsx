import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import data from "../../index";


// ~~~~~~~~~~~~~~~~~~~ Mapping JSX ~~~~~~~~~~~~~~~~~~~~ //



const dialogsData = data.friendsList.map((f) => (
  <Dialog path={f.path} userName={f.name} />
));

const messagesData = data.messagesList.map((m) => {
  return <Message messageContent={m.messageText} />;
});


// ~~~~~~~~~~~~~~~~~~~ Component~~~~~~~~~~~~~~~~~~~~ //

const Dialogs = (props: any) => {
  return (
    <div className={s.dialogs__container}>
      <div>{props.a}</div>
      <div className={s.dialogs__users}>{dialogsData}</div>
      <div className={s.dialogs__messages}>{messagesData}</div>
    </div>
  );
};

export default Dialogs;
