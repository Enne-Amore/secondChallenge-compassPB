import { FixedCard } from "../components/kanban/FixedCard";
import { Notification } from "../components/kanban/Notification";
import { TablesTasks } from "../components/kanban/TablesTasks";

export const Kanban = () => {
  return (
    <main className="relative flex flex-col items-center">
      <FixedCard />

      <TablesTasks />

      <Notification />
    </main>
  );
};
