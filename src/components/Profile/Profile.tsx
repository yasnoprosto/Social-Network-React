import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./myPosts/MyPosts";


const Profile = (props: any) => {
  debugger
  return (
    <div>
      <ProfileInfo />
      <MyPosts profileData={props.profileData} dispatch={props.dispatch}/>
    </div>
  );
};


export default Profile;
