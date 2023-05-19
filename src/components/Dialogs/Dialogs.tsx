import { NavLink } from "react-router-dom";
import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { addMessageActionCreator, onMessageTextChangeActionCreator } from "../../redux/dialogsReducer";

// ~~~~~~~~~~~~~~~~~~~ Component~~~~~~~~~~~~~~~~~~~~ //

const Dialogs = (props: any) => {
  // debugger

  const dialogsElements = props.friendsList.map(
    (f: { path: string; name: string; avatarURL: string }) => (
      <Dialog path={f.path} userName={f.name} avatarURL={f.avatarURL} />
    )
  );

  const messagesElements = props.messagesList.map(
    (m: { messageText: string }) => {
      return <Message messageContent={m.messageText} />;
    }
  );

  const addMessage = () => {
    props.addMessage();
  };

  const onMessageTextChange = (e) => {
    let text = e.target?.value;
    props.onMessageTextChange(text);
  };
  
  return (
    <div className={s.dialogs__container}>
      <div className={s.dialogs__users}>{dialogsElements}</div>
      <div className={s.dialogs__messages__container}>
        <div className={s.dialogs__messages}>{messagesElements}</div>
        <textarea
          onChange={onMessageTextChange}
          className={s.dialogs__textarea}
          value={props.newMessageText}
          placeholder="Enter some text"
        ></textarea>
        <button onClick={addMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
