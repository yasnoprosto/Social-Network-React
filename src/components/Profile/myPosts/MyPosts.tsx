import s from "./MyPosts.module.css";
import Post from "./post/Post";

// ~~~~~~~~~~~~~~~~~~~ MyPosts Component ~~~~~~~~~~~~~~~~~~~~ //

const MyPosts = (props: any) => {
  const postsArray = props.postsList.map(
    (p: { message: string; likesCount: number }) => {
      return <Post message={p.message} likesCount={p.likesCount} />;
    }
  );

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
      <div className={s.main__posts}>{postsArray}</div>
    </div>
  );
};

export default MyPosts;
