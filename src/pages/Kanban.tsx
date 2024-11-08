import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { FixedCard } from "../components/kanban/FixedCard";
import { Notification } from "../components/kanban/Notification";
import { TablesTasks } from "../components/kanban/TablesTasks";

export const Kanban = () => {
  return (
    <>
      <Header showNavbar/>

      <main className="relative flex flex-col items-center mt-4 mb-7">
        <FixedCard />
        <TablesTasks />
        <Notification />
      </main>

      <Footer />
    </>
  );
};
