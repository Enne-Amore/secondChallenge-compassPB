import { TableTask } from "./TableTask";
import { Task } from "./Task";
import styles from "./TablesTasks.module.css";

export const TablesTasks = () => {
  return (
    <section className={styles.containerTables}>
      <TableTask
        title={"To do"}
        qtd={25}
        topBgColor={"bg-[#D3D0F8]"}
        strongBgColor={"bg-[#4F46E5]"}
        titleColor={"text-[#4F46E5]"}
        moreIcon={"#4F46E5"}
        task={
          <>
            <Task />

            <Task />
          </>
        }
      />

      <TableTask
        title={"In progress"}
        qtd={8}
        topBgColor={"bg-[#FCE6C2]"}
        strongBgColor={"bg-[#F59E0B]"}
        titleColor={"text-[#F59E0B]"}
        moreIcon={"#F59E0B"}
        task={
          <>
            <Task />

            <Task />
            
            <Task />
          </>
        }
      />

      <TableTask
        title={"Done"}
        qtd={5}
        topBgColor={"bg-[#C7F0D6]"}
        strongBgColor={"bg-[#22C55E]"}
        titleColor={"text-[#22C55E]"}
        moreIcon={"#22C55E"}
        task={
          <>
            <Task />
          </>
        }
      />
    </section>
  );
};
