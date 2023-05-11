import { NavLink } from "react-router-dom";
import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

let messagesTextArea = React.createRef<HTMLTextAreaElement>();

const sendMessage = () => {
  let text = messagesTextArea.current?.value;
  alert(text);
}

// ~~~~~~~~~~~~~~~~~~~ Component~~~~~~~~~~~~~~~~~~~~ //

const Dialogs = (props: any) => {
  const dialogsData = props.dialogsData.friendsList.map(
    (f: { path: string; name: string; avatarURL: string }) => (
      <Dialog path={f.path} userName={f.name} avatarURL={f.avatarURL} />
    )
  );

  const messagesData = props.dialogsData.messagesList.map(
    (m: { messageText: string }) => {
      return <Message messageContent={m.messageText} />;
    }
  );
  return (
    <div className={s.dialogs__container}>
      <div className={s.dialogs__users}>{dialogsData}</div>
      <div className={s.dialogs__messages__container}>
        <div className={s.dialogs__messages}>{messagesData}</div>
        <textarea ref={messagesTextArea} className={s.dialogs__textarea}></textarea>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
