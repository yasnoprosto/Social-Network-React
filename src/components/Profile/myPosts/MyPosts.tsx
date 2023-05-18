import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post"; 
import { addPostActionCreator, onPostChangeActionCreator } from "../../../redux/profileReducer";
import { Db } from "mongodb";


 
// ~~~~~~~~~~~~~~~~~~~ MyPosts Component ~~~~~~~~~~~~~~~~~~~~ //

const MyPosts = (props: any) => {
  debugger
  const postsArray = props.profileData.postsList.map(
    (p: { message: string; likesCount: number }) => {
      return <Post message={p.message} likesCount={p.likesCount} />;
    }
  );
    const addPost = () => {
      const action = addPostActionCreator();
      props.dispatch(action);
    }

    const onPostChange = (e) => {
      debugger
      let text = e.target?.value;
      const action = onPostChangeActionCreator(text);
      props.dispatch(action);
    }

  return (
    <div className={s.profile__myPosts}>
      <h3>My Posts</h3>
      <div className={s.profile__newPost}>
        <div>
          <textarea placeholder={"Write smth interesting"} onChange={onPostChange} value={props.profileData.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.main__posts}>{postsArray}</div>
    </div>
  );
};

export default MyPosts;
