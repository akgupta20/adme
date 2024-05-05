import HeaderImg from '/public/header.jpg';
import styles from './Header.module.css';

const Header = () => {
  return (
      <div>
        <img className={styles.headerImg} src={HeaderImg} alt="Header Backgroud" />
    </div>
  )
}

export default Header