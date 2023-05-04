import s from "./Navigation.module.css"

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <div className={s.nav__container}><a className={`${s.nav__item} ${s.active}`} href="#">Profiles</a></div>
      <div className={s.nav__container}><a className={s.nav__item} href="#">Messages</a></div>
      <div className={s.nav__container}><a className={s.nav__item} href="#">News</a></div>
      <div className={s.nav__container}><a className={s.nav__item} href="#">Music</a></div>
      <div className={s.nav__container}><a className={s.nav__item} href="#">Settings</a></div>
    </nav>
  );
};

export default Navigation;
