import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import imgProfile from "../../assets/profile-img-1.png";
import { FaCircleCheck } from "react-icons/fa6";
import { ComponentProps, useState } from "react";
import styles from "./Task.module.css";

export type InfoTask = ComponentProps<"strong"> &
  ComponentProps<"h3"> &
  ComponentProps<"input"> &
  ComponentProps<"span"> & {
    imgSrc?: string;
    priority: string;
    title: string;
    qtdComments: number;
    qtdCompletedTasks: number;
  };

export const Task = ({
  imgSrc,
  priority,
  title,
  qtdComments,
  qtdCompletedTasks,
}: InfoTask) => {
  const [progress, setProgress] = useState<string>("0");

  let stylePriority: string = "";

  if (priority === "mid") {
    stylePriority = "bg-[#FFFBEB] text-[#F59E0B]";
  } else if (priority === "low") {
    stylePriority = "bg-[#EEF2FF] text-[#4F46E5]";
  } else if (priority === "high") {
    stylePriority = "bg-[#BD2323] text-white";
  }

  return (
    <article className={styles.container}>
      {imgSrc && (
        <figure className={styles.figureTask}>
          <img src={imgSrc} alt={imgSrc} className={styles.imgTask} />
        </figure>
      )}

      <strong className={`${styles.priority} ${stylePriority}`}>
        {priority}
      </strong>

      <h3 className={styles.title}>{title}</h3>

      <div className={styles.containerProgress}>
        <div className={styles.containerInfoProgress}>
          <label htmlFor="progress" className={styles.labelProgress}>
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
            <img src={imgProfile} alt="Profile image" className={styles.img} />
          </figure>

          <figure className={styles.othersPeople}>
            <img src={imgProfile} alt="Profile image" className={styles.img} />
          </figure>
        </ul>

        <div className={styles.containerInfo}>
          <div className={styles.containerData}>
            <IoChatbubbleEllipsesSharp className={styles.icon} />

            <span className={styles.qtd}>{qtdComments}</span>
          </div>

          <div className={styles.containerData}>
            <FaCircleCheck className={styles.icon} />

            <span className={styles.qtd}>{qtdCompletedTasks}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
