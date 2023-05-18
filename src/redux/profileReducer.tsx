const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

let initialState = {
  postsList: [
    {
      id: 1,
      message: "Hello everyone!",
      likesCount: 630,
    },
    {
      id: 2,
      message: "My cats are crazy!",
      likesCount: 789,
    },
    {
      id: 3,
      message: "I love u guys!",
      likesCount: 967,
    },
    {
      id: 4,
      message: "Yes, I'm React Developer!",
      likesCount: 580,
    },
    {
      id: 5,
      message: "This is my first post!",
      likesCount: 800,
    },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState , action) => {
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
