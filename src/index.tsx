import { rerenderTree } from "./render";
import state, { addPostData, updatePostText } from "./redux/state"

rerenderTree(state, addPostData, updatePostText);