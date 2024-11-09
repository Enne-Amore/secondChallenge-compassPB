import { useState } from "react";
import logo from "../../../public/logo.png";
import styles from "./Notification.module.css";

export const Notification = () => {
  const [display, setDisplay] = useState<string>("flex");

  return (
    <aside className={`${styles.container} ${display}`}>
      <div className={styles.containerTop}>
        <figure className={styles.figure}>
          <img
            src={logo}
            alt="Project Manager logo"
            className={styles.img}
          />
        </figure>

        <h2 className={styles.title}>Trabalhar no aplicativo</h2>
      </div>

      <p className={styles.paragraph}>
        Adicione ideias, notas e faça um plano de organização de onde estiver.
      </p>

      <div className={styles.containerBtn}>
        <button
          type="button"
          className={styles.btnClose}
          onClick={() => setDisplay("hidden")}
        >
          Agora não
        </button>

        <a
          href=""
          className={styles.btnConfirm}
        >
          Usar o aplicativo
        </a>
      </div>
    </aside>
  );
};
