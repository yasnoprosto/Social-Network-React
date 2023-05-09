import s from "../Dialogs.module.css";

// ~~~~~~~~~~~~~~~~~~ Props Type ~~~~~~~~~~~~~~~~~~~~~ //

type MessagePropType = {
  messageContent: string;
};

// ~~~~~~~~~~~~~~~~~~~ JSX Component ~~~~~~~~~~~~~~~~~~~~ //

const Message = (props: MessagePropType) => (
  <div className={s.message__container}>
    <img
      className={s.message__status__circle}
      src="https://photogora.ru/img/product/big/6032/14780170120.jpg"
      alt="status__message"
    />
    <div className={s.dialogs__message}>{props.messageContent}</div>
    <img
      className={s.message__status__circle}
      src="https://www.ltmaster.ru/image/cache/catalog/image/cache/catalog/LDSP/belyi-sveza-800x800.webp"
      alt="status__message"
    />
  </div>
);

export default Message;
