import { FixedCard } from "./FixedCard";
import { Notification } from "./Notification";
import { TablesTasks } from "./TablesTasks";
import styles from "./Main.module.css";

export const Main = () => {
  return (
    <main className={styles.container}>
      <FixedCard />

      <TablesTasks />

      <Notification />
    </main>
  );
};
