import React, { ComponentProps, useState } from "react";
import { ModalCreateTask } from "./ModalCreateTask";
import styles from "./TableTask.module.css";

export type Colors = ComponentProps<"div"> &
  ComponentProps<"strong"> &
  ComponentProps<"h2"> &
  ComponentProps<"path"> & {
    title: string;
    qtd: number;
    topBgColor: string;
    strongBgColor: string;
    titleColor: string;
    moreIcon: string;
    task: React.ReactNode;
  };

export const TableTask = ({
  title,
  qtd,
  topBgColor,
  strongBgColor,
  titleColor,
  moreIcon,
  task,
}: Colors) => {
  const [modalCreate, setModalCreate] = useState<boolean>(false);

  const keyDown = (event: React.KeyboardEvent<SVGElement>) => {
    if (event.key === "Enter") {
      setModalCreate(!modalCreate);
    }
  };

  return (
    <article className={styles.containerTable}>
      <div className={`${topBgColor} ${styles.containerInfoTop}`}>
        <div className={styles.containerInfo}>
          <strong className={`${strongBgColor} ${styles.qtd}`}>{qtd}</strong>

          <h2 className={`${titleColor} ${styles.title}`}>{title}</h2>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 9 10"
          fill="none"
          className={styles.moreIcon}
          tabIndex={0}
          onClick={() => setModalCreate(!modalCreate)}
          onKeyDown={keyDown}
        >
          <path
            d="M7.96113 4.91918C7.96113 5.02419 7.91941 5.12491 7.84515 5.19916C7.7709 5.27342 7.67018 5.31514 7.56517 5.31514H5.05743V7.82287C5.05743 7.92789 5.01571 8.0286 4.94146 8.10286C4.8672 8.17712 4.76649 8.21883 4.66147 8.21883C4.55646 8.21883 4.45574 8.17712 4.38149 8.10286C4.30723 8.0286 4.26551 7.92789 4.26551 7.82287V5.31514H1.75778C1.65276 5.31514 1.55205 5.27342 1.47779 5.19916C1.40353 5.12491 1.36182 5.02419 1.36182 4.91918C1.36182 4.81416 1.40353 4.71345 1.47779 4.63919C1.55205 4.56494 1.65276 4.52322 1.75778 4.52322H4.26551V2.01548C4.26551 1.91047 4.30723 1.80975 4.38149 1.7355C4.45574 1.66124 4.55646 1.61952 4.66147 1.61952C4.76649 1.61952 4.8672 1.66124 4.94146 1.7355C5.01571 1.80975 5.05743 1.91047 5.05743 2.01548V4.52322H7.56517C7.67018 4.52322 7.7709 4.56494 7.84515 4.63919C7.91941 4.71345 7.96113 4.81416 7.96113 4.91918Z"
            fill={`${moreIcon}`}
          />
        </svg>
      </div>

      {modalCreate && (
        <ModalCreateTask
          modalCreate={modalCreate}
          setModalCreate={setModalCreate}
        />
      )}

      <ul className={styles.taskList}>{task}</ul>
    </article>
  );
};
