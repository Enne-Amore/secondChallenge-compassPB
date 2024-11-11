import { TableTask } from "./TableTask";
import { Task } from "./Task";
import img from "../../assets/task-img-illustration.png"
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
            <Task priority="mid" title="Task 3" qtdComments={987} qtdCompletedTasks={210} />

            <Task priority="low" title="Task 2" qtdComments={32} qtdCompletedTasks={100} />
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
            <Task priority="high" title="Task 3" qtdComments={11} qtdCompletedTasks={187} />

            <Task priority="high" title="Task 3" qtdComments={11} qtdCompletedTasks={187} />
            
            <Task priority="low" title="Task 3" qtdComments={987} qtdCompletedTasks={210} />
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
            <Task imgSrc={img} imgAlt="Task Illustration Image" priority="low" title="Task 3" qtdComments={987} qtdCompletedTasks={210} />
          </>
        }
      />
    </section>
  );
};
