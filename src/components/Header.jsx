import HeaderImg from "/header.jpg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <img
        className={styles.headerImg}
        src={HeaderImg}
        alt="Header"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default Header;
