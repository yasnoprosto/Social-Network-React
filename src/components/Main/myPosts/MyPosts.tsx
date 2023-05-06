import s from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {
  return (
    <div className={s.main__myPosts}>
      <h3>My Posts</h3>
      <div className={s.main__newPost}>
        <div>
          <textarea>new post</textarea>
        </div>
        <div>
          <button>Add Post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.main__posts}>
        <Post message={"Hello everyone!"} likesCount={630} />
        <Post message={"My cats are crazy!"} likesCount={789} />
        <Post message={"I love u guys!"} likesCount={967} />
        <Post message={"Yes, I'm React Developer!"} likesCount={580} />
        <Post message={"This is my first post!"} likesCount={800} />
      </div>
    </div>
  );
};

export default MyPosts;
