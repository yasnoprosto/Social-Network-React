import s from "../Dialogs.module.css";

// ~~~~~~~~~~~~~~~~~~ Props Type ~~~~~~~~~~~~~~~~~~~~~ //

type MessagePropType = {
  messageContent: string;
}


// ~~~~~~~~~~~~~~~~~~~ JSX Component ~~~~~~~~~~~~~~~~~~~~ //

  const Message = (props: MessagePropType) => (
    <div className={s.dialogs__message}>{props.messageContent}</div>
  );

  export default Message;