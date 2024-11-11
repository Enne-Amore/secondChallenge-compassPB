import { useEffect, useState } from "react";
import { TableTask } from "./TableTask";
import styles from "./TablesTasks.module.css";
import { Tasks } from "../types/Tasks";
import axios from "axios";
import { Task } from "./Task";

export const TablesTasks = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  const getTasks = async () => {
    try {
      const response = await axios.get("http://localhost:4000/tasks");
      const data: Tasks[] = response.data;
      setTasks(data);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const todoTasks = tasks.filter((task) => task.status === "todo");
  const inProgressTasks = tasks.filter((task) => task.status === "inProgress");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <section className={styles.containerTables}>
      <TableTask
        title={"To do"}
        qtd={todoTasks.length}
        topBgColor={"bg-[#D3D0F8]"}
        strongBgColor={"bg-[#4F46E5]"}
        titleColor={"text-[#4F46E5]"}
        moreIcon={"#4F46E5"}
        task={todoTasks.map((task) => (
          <Task
            key={task.id}
            priority={task.priority}
            title={task.title}
            qtdComments={task.qtdComments}
            qtdCompletedTasks={task.qtdCompletedTasks}
          />
        ))}
      />

      <TableTask
        title={"In progress"}
        qtd={inProgressTasks.length}
        topBgColor={"bg-[#FCE6C2]"}
        strongBgColor={"bg-[#F59E0B]"}
        titleColor={"text-[#F59E0B]"}
        moreIcon={"#F59E0B"}
        task={inProgressTasks.map((task) => (
          <Task
            key={task.id}
            priority={task.priority}
            title={task.title}
            qtdComments={task.qtdComments}
            qtdCompletedTasks={task.qtdCompletedTasks}
          />
        ))}
      />

      <TableTask
        title={"Done"}
        qtd={doneTasks.length}
        topBgColor={"bg-[#C7F0D6]"}
        strongBgColor={"bg-[#22C55E]"}
        titleColor={"text-[#22C55E]"}
        moreIcon={"#22C55E"}
        task={doneTasks.map((task) => (
          <Task
            key={task.id}
            priority={task.priority}
            title={task.title}
            qtdComments={task.qtdComments}
            qtdCompletedTasks={task.qtdCompletedTasks}
          />
        ))}
      />
    </section>
  );
};
