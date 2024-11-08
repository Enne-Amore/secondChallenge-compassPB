import { ComponentProps } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FormCreateTask } from "./form/FormCreateTask";
import styles from "./ModalCreateTask.module.css";

export type Modal = ComponentProps<"div"> & {
  modalCreate: boolean;
  setModalCreate: (modalCreate: boolean) => void;
};

export const ModalCreateTask = ({ modalCreate, setModalCreate }: Modal) => {
  const keyDown = (event: React.KeyboardEvent<SVGElement>) => {
    if (event.key === "Enter") {
      setModalCreate(!modalCreate);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.transparency}
        onClick={() => setModalCreate(!modalCreate)}
      ></div>

      <article className={styles.containerMain}>
        <div className={styles.containerTop}>
          <h2 className={styles.title}>
            Create new task
          </h2>

          <IoCloseOutline
            className={styles.icon}
            tabIndex={0}
            onClick={() => setModalCreate(!modalCreate)}
            onKeyDown={keyDown}
          />
        </div>

        <FormCreateTask />
      </article>
    </div>
  );
};
