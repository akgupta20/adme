import styles from "./Navbar.module.css";
import { siteTitle, navLinks } from "../Utils/Constant";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <img
          src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
          width="30"
          height="30"
          alt="Logo"
          className={styles.navbarLogo}
        />
      </div>

      <h2 className={styles.title}>{siteTitle}</h2>
      <ul className={styles.navbarLinks}>
        {navLinks.map((link) => {
          return (
            <li className={styles.navbarLink}>
              <a href="#">{link.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
