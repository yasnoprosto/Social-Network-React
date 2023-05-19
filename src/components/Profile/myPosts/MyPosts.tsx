import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post";

// ~~~~~~~~~~~~~~~~~~~ MyPosts Component ~~~~~~~~~~~~~~~~~~~~ //

const MyPosts = (props: any) => {
  // debugger;
  const postsArray = props.postsList.map(
    (p: { message: string; likesCount: number }) => {
      return <Post message={p.message} likesCount={p.likesCount} />;
    }
  );

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = (e) => {
    // debugger
    let text = e.target?.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.profile__myPosts}>
      <h3>My Posts</h3>
      <div className={s.profile__newPost}>
        <div>
          <textarea
            placeholder={"Write smth interesting"}
            onChange={onPostChange}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add Post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.main__posts}>{postsArray}</div>
    </div>
  );
};

export default MyPosts;
