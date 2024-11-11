import { ComponentProps } from "react";
import imgProfile from "../../assets/profile-img-1.png";
import styles from "./PersonProfile.module.css";

export type StylePersonProfile = ComponentProps<"h3"> & ComponentProps<"span"> & {
  styleTitle: string;
  styleJob: string;
}

export const PersonProfile = ({ styleTitle, styleJob }: StylePersonProfile) => {
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
        <h3 className={`${styles.name} ${styleTitle}`}>John Doe</h3>

        <span className={`${styles.job} ${styleJob}`}>Project Manager</span>
      </div>
    </article>
  );
};
