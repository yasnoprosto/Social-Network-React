import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post";

// ~~~~~~~~~~~~~~~~~~~ MyPosts Component ~~~~~~~~~~~~~~~~~~~~ //

const MyPosts = (props: any) => {
  const postsArray = props.postsList.map(
    (p: { message: string; likesCount: number }) => {
      return <Post message={p.message} likesCount={p.likesCount} />;
    }
  );

    const profileTextArea = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
      debugger;
      let text = profileTextArea.current?.value
      alert(text);
    }
  
    const removePost = () => {
      alert("Post removed")
    }

  return (
    <div className={s.profile__myPosts}>
      <h3>My Posts</h3>
      <div className={s.profile__newPost}>
        <div>
          <textarea ref={profileTextArea}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
          <button onClick={removePost}>Remove</button>
        </div>
      </div>
      <div className={s.main__posts}>{postsArray}</div>
    </div>
  );
};

export default MyPosts;
