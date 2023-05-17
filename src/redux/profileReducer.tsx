const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 6,
        message: state.newPostText,
        likesCount: 0,
      };
      state.postsList.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_POST_TEXT:
      state.newPostText = action.newText;
      console.log(action.newText);
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const onPostChangeActionCreator = (text: any) => ({
  type: UPDATE_POST_TEXT,
  newText: text,
});

export default profileReducer;
