import s from "./Main.module.css"
import MyPosts from "./myPosts/MyPosts";

const Main = () => {
  return (
    <div>
      <img
        className={s.main__img}
        src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
        alt="mountains"
      />
      <div className={s.main__profile}>avatar + description</div>
      <MyPosts />
    </div>
  );
};


export default Main;
