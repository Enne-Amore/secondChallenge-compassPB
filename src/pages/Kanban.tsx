import { TableTask } from "../components/kanban/TableTask";
import { FixedCard } from "../components/kanban/FixedCard";
import { Notification } from "../components/kanban/Notification";

export const Kanban = () => {
  return (
    <main className="relative flex flex-col items-center">
      <FixedCard />

      <section className="flex gap-4 bg-kanban bg-no-repeat bg-cover rounded-3xl py-60 w-11/12 overflow-auto">
        <TableTask
          title={"To do"}
          qtd={25}
          darkColor={"#4F46E5"}
          lightColor={"#D3D0F8"}
        />

        <TableTask
          title={"In progress"}
          qtd={8}
          darkColor={"#F59E0B"}
          lightColor={"#FCE6C2"}
        />

        <TableTask
          title={"Done"}
          qtd={5}
          darkColor={"#22C55E"}
          lightColor={"#C7F0D6"}
        />
      </section>

      <Notification />
    </main>
  );
};
