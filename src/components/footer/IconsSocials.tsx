import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import styles from "./IconsSocials.module.css"
const IconsSocials = () => {
  return (
    <div className={styles.wraperIcons}>
      <a href="https://facebook.com" target="_blank" className={styles.icon}>
          <FaFacebookF className={`${styles.iconSVG} ${styles.iconFacebook}`}/>
      </a>
      <a href="https://www.instagram.com/manager.projectg2/" target="_blank" className={styles.icon}>
          <FaInstagram className={`${styles.iconSVG} ${styles.iconInstagram}`}/>
      </a>
      <a href="https://linkedin.com" target="_blank" className={styles.icon}>
          <FaLinkedinIn className={`${styles.iconSVG} ${styles.iconLinkedin}`}/>
      </a>
    </div>
  )
}

export default IconsSocials
