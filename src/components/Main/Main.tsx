import s from "./Main.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./myPosts/MyPosts";

const Main = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};


export default Main;
