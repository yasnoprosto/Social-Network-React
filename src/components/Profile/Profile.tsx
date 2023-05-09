import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./myPosts/MyPosts";


const Profile = (props: any) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsList={props.profileData.postsList}/>
    </div>
  );
};


export default Profile;
