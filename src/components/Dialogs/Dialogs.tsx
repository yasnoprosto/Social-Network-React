import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";





// ~~~~~~~~~~~~~~~~~~~ Component~~~~~~~~~~~~~~~~~~~~ //

const Dialogs = (props: any) => {
  const dialogsData = props.dialogsData.friendsList.map((f: { path: string; name: string; }) => (
    <Dialog path={f.path} userName={f.name} />
  ));
  
  const messagesData = props.dialogsData.messagesList.map((m: { messageText: string; }) => {
    return <Message messageContent={m.messageText} />;
  });
  return (
    <div className={s.dialogs__container}>
      <div className={s.dialogs__users}>{dialogsData}</div>
      <div className={s.dialogs__messages}>{messagesData}</div>
    </div>
  );
};

export default Dialogs;
