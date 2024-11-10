import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import imgProfile from "../../assets/profile-img-1.png";
import { FaCircleCheck } from "react-icons/fa6";
import { useState } from "react";
import styles from "./Task.module.css";

export const Task = () => {
  const [progress, setProgress] = useState<string>("0");

  return (
    <article className={styles.container}>
      <strong className={styles.priority}>
        Mid
      </strong>

      <h3 className={styles.title}>Task 3</h3>

      <div className={styles.containerProgress}>
        <div className={styles.containerInfoProgress}>
          <label
            htmlFor="progress"
            className={styles.labelProgress}
          >
            Progress
          </label>

          <strong className={styles.percentage}>{progress}%</strong>
        </div>

        <input
          type="range"
          name="progress"
          id="progress"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
          className={styles.inputProgress}
        />
      </div>

      <div className={styles.containerPeople}>
        <ul className={styles.imgsPeople}>
          <figure className={styles.firstPerson}>
            <img
              src={imgProfile}
              alt="Profile image"
              className={styles.img}
            />
          </figure>

          <figure className={styles.othersPeople}>
            <img
              src={imgProfile}
              alt="Profile image"
              className={styles.img}
            />
          </figure>
        </ul>

        <div className={styles.containerInfo}>
          <div className={styles.containerData}>
            <IoChatbubbleEllipsesSharp className={styles.icon} />

            <span className={styles.qtd}>987</span>
          </div>

          <div className={styles.containerData}>
            <FaCircleCheck className={styles.icon} />

            <span className={styles.qtd}>210</span>
          </div>
        </div>
      </div>
    </article>
  );
};
