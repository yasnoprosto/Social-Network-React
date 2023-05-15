import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post"; 
// ~~~~~~~~~~~~~~~~~~~ MyPosts Component ~~~~~~~~~~~~~~~~~~~~ //

const MyPosts = (props: any) => {
  const postsArray = props.profileData.postsList.map(
    (p: { message: string; likesCount: number }) => {
      return <Post message={p.message} likesCount={p.likesCount} />;
    }
  );

    const profileTextArea = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
      const action = { type: 'ADD-POST' };
      props.dispatch(action);
    }

    const onPostChange = () => {
      let text = profileTextArea.current?.value;
      let action = { type: 'UPDATE-POST-TEXT', newText: text };
      props.dispatch(action);
    }

  return (
    <div className={s.profile__myPosts}>
      <h3>My Posts</h3>
      <div className={s.profile__newPost}>
        <div>
          <textarea ref={profileTextArea} onChange={onPostChange} value={props.profileData.newPostText}/>
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
