import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./myPosts/MyPosts";
import MyPostsContainer from "./myPosts/MyPostsContainer";


const Profile = (props: any) => {
  // debugger  
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store}/>
    </div>
  );
};


export default Profile;
