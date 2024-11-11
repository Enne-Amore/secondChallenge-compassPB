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

  return (
    <section className={styles.containerTables}>
      <TableTask
        title={"To do"}
        topBgColor={"bg-[#D3D0F8]"}
        strongBgColor={"bg-[#4F46E5]"}
        titleColor={"text-[#4F46E5]"}
        moreIcon={"#4F46E5"}
        task={
          <>
            {tasks.map((task) => (
              <>
                {task.status === "todo" && (
                  <Task
                    key={task.id}
                    priority={task.priority}
                    title={task.title}
                    qtdComments={task.qtdComments}
                    qtdCompletedTasks={task.qtdCompletedTasks}
                  />
                )}
              </>
            ))}
          </>
        }
      />

      <TableTask
        title={"In progress"}
        topBgColor={"bg-[#FCE6C2]"}
        strongBgColor={"bg-[#F59E0B]"}
        titleColor={"text-[#F59E0B]"}
        moreIcon={"#F59E0B"}
        task={
          <>
            {tasks.map((task) => (
              <>
                {task.status === "inProgress" && (
                  <Task
                    key={task.id}
                    priority={task.priority}
                    title={task.title}
                    qtdComments={task.qtdComments}
                    qtdCompletedTasks={task.qtdCompletedTasks}
                  />
                )}
              </>
            ))}
          </>
        }
      />

      <TableTask
        title={"Done"}
        topBgColor={"bg-[#C7F0D6]"}
        strongBgColor={"bg-[#22C55E]"}
        titleColor={"text-[#22C55E]"}
        moreIcon={"#22C55E"}
        task={
          <>
            {tasks.map((task) => (
              <>
                {task.status === "done" && (
                  <Task
                    key={task.id}
                    priority={task.priority}
                    title={task.title}
                    qtdComments={task.qtdComments}
                    qtdCompletedTasks={task.qtdCompletedTasks}
                  />
                )}
              </>
            ))}
          </>
        }
      />
    </section>
  );
};
