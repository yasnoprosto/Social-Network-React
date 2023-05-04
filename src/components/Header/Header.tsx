import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        className={s.header__logo}
        src="https://cdn.logo.com/hotlink-ok/logo-social.png"
        alt="Logo"
      />
    </header>
  );
};

export default Header;
