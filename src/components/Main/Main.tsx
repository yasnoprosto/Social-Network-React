import s from "./Main.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./myPosts/MyPosts";


const Main = (props: any) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsList={props.profileData.postsList}/>
    </div>
  );
};


export default Main;
