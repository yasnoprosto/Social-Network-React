import s from "./MyPosts.module.css";
import Post from "./post/Post";

// ~~~~~~~~~~~~~~~~~~ Data ~~~~~~~~~~~~~~~~~~~~~ //

let posts: Array<any> = [
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
];

// ~~~~~~~~~~~~~~~~~~~ Mapping Posts ~~~~~~~~~~~~~~~~~~~~ //

const postsArray = posts.map((p) => {
  return (
    <Post message={p.message} likesCount={p.likesCount} />
  );
});

// ~~~~~~~~~~~~~~~~~~~ MyPosts Component ~~~~~~~~~~~~~~~~~~~~ //

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
      <div className={s.main__posts}>{postsArray}</div>
    </div>
  );
};

export default MyPosts;
