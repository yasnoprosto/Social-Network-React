import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../redux/profileReducer";
import { Db } from "mongodb";
import MyPosts from "./MyPosts";

// ~~~~~~~~~~~~~~~~~~~ MyPosts Component ~~~~~~~~~~~~~~~~~~~~ //

const MyPostsContainer = (props: any) => {
  // debugger;

  let state = props.store.getState();

  const addPost = () => {
    const action = addPostActionCreator();
    props.store.dispatch(action);
  };

  const onPostChange = (text) => {
    const action = onPostChangeActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      postsList={state.profileData.postsList}
      newPostText={state.profileData.newPostText}
    />
  );
};

export default MyPostsContainer;
