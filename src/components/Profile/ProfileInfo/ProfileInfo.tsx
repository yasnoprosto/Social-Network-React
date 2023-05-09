import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
  return (
    <div>
      <img
        className={s.profileInfo__img}
        src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
        alt="mountains"
      />
      <div className={s.profileInfo__desc}>avatar + description</div>
    </div>
  );
};

export default ProfileInfo;
