const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        messageId: 6,
        messageText: state.newMessageText,
      };
      state.messagesList.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_MESSAGE:
      state.newMessageText = action.newText;
      console.log(action.newText);
      return state;
    default:
      return state;
  }
};


export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const onMessageTextChangeActionCreator = (text: any) => ({
  type: UPDATE_MESSAGE,
  newText: text,
});

export default dialogsReducer;
