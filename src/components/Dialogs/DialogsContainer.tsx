import { NavLink } from "react-router-dom";
import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  onMessageTextChangeActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

// ~~~~~~~~~~~~~~~~~~~ Component~~~~~~~~~~~~~~~~~~~~ //

const DialogsContainer = (props: any) => {
  debugger;

  const state = props.store.getState();

  const addMessage = () => {
    const action = addMessageActionCreator();
    props.store.dispatch(action);
  };

  const onMessageTextChange = (textMessage) => {
    const action = onMessageTextChangeActionCreator(textMessage);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      addMessage={addMessage}
      onMessageTextChange={onMessageTextChange}
      friendsList={state.dialogsData.friendsList}
      messagesList={state.dialogsData.messagesList}
      newMessageText={state.dialogsData.newMessageText}
    />
  );
};

export default DialogsContainer;
