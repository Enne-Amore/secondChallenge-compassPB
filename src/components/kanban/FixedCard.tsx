import React, { useState } from "react";
import { TbPinnedFilled } from "react-icons/tb";
import { PersonProfile } from "./PersonProfile";
import styles from "./FixedCard.module.css";

export const FixedCard = () => {
  const [openFixed, setOpenFixed] = useState<boolean>(false);
  let fixed: string;
  let styleIcon: string;

  if (openFixed === true) {
    fixed = "flex";
    styleIcon = "top-5 right-1 desktop:left-0 desktop:right-0 bg-transparent desktop:absolute desktop:left-auto desktop:top-3 desktop:right-1.5";
  } else {
    fixed = "hidden";
    styleIcon =
      "absolute top-1.5 left-28 bg-[#94A3B8] hover:bg-[#1E293B] transition-all desktop:relative desktop:top-0 desktop:left-0";
  }

  const keyDown = (event: React.KeyboardEvent<SVGElement>) => {
    if (event.key === "Enter") {
      setOpenFixed(!openFixed);
    }
  };

  return (
    <div className={styles.container}>
      <TbPinnedFilled
        className={`${styleIcon} ${styles.icon}`}
        onClick={() => setOpenFixed(!openFixed)}
        onKeyDown={keyDown}
        tabIndex={0}
      />

      <div
        className={`${styles.containerMain} ${fixed}`}
      >
        <section>
          <h2 className={styles.title}>In this project</h2>

          <ul className={styles.peopleList}>
            <PersonProfile styleTitle="desktop:text-base" styleJob="desktop:text-10" />

            <PersonProfile styleTitle="desktop:text-base" styleJob="desktop:text-10" />

            <PersonProfile styleTitle="desktop:text-base" styleJob="desktop:text-10" />
          </ul>

          <a href="" className={styles.viewAllBtn}>
            View all (10)
          </a>
        </section>

        <section>
          <h2 className={styles.title}>Metrics</h2>

          <div className={styles.containerGrid}>
            <article className={styles.containerTotalTasks}>
              <h3 className={styles.titleContainerGrid}>Total Tasks</h3>

              <ol>
                <li className={styles.containerLiTotalTasks}>
                  <strong className={`${styles.qtdTotalTasks} text-[#4F46E5]`}>
                    10
                  </strong>
                  <span className={styles.textTotalTasks}>To do</span>
                </li>

                <li className={styles.containerLiTotalTasks}>
                  <strong className={`${styles.qtdTotalTasks} text-[#F59E0B]`}>
                    15
                  </strong>

                  <span className={styles.textTotalTasks}>In progress</span>
                </li>

                <li className={styles.containerLiTotalTasks}>
                  <strong className={`${styles.qtdTotalTasks} text-[#22C55E]`}>
                    11
                  </strong>

                  <span className={styles.textTotalTasks}>Done</span>
                </li>
              </ol>
            </article>

            <article className={styles.containerMostActive}>
              <h3 className={styles.titleContainerGrid}>Most active</h3>

              <h4 className={styles.subtitleMostActive}>lats 30 days</h4>

              <ul className={styles.peopleListMostActive}>
                <PersonProfile styleTitle="desktop:text-10" styleJob="desktop:text-5" />

                <PersonProfile styleTitle="desktop:text-10" styleJob="desktop:text-5" />

                <PersonProfile styleTitle="desktop:text-10" styleJob="desktop:text-5" />
              </ul>
            </article>

            <article className={styles.containerTimeEstimed}>
              <h3 className={styles.titleContainerGrid}>Total time estimated</h3>

              <strong className={styles.time}>
                00:00
              </strong>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};
