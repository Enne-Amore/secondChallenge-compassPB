import imgProfile from "../../assets/profile-img-1.png";
import styles from "./PersonProfile.module.css";

export const PersonProfile = () => {
  return (
    <article className={styles.container}>
      <figure className={styles.figure}>
        <img
          src={imgProfile}
          alt="Profile image"
          className={styles.img}
        />
      </figure>

      <div className={styles.containerInfo}>
        <h3 className={styles.name}>John Doe</h3>

        <span className={styles.job}>Project Manager</span>
      </div>
    </article>
  );
};
