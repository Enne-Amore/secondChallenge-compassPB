import logo from "../../public/logo.png";
import { TableTask } from "../components/kanban/TableTask";
import { FixedCard } from "../components/kanban/FixedCard";

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

      <aside className="bg-[#00000080] text-white rounded-2xl flex flex-col gap-2 pt-1.5 pb-3 px-2.5 -translate-y-full w-10/12">
        <div className="flex items-center gap-2">
          <figure className="w-6 h-6">
            <img
              src={logo}
              alt="Project Manager logo"
              className="w-full h-full rounded-full"
            />
          </figure>

          <h2 className="text-base font-bold">Trabalhar no aplicativo</h2>
        </div>

        <p className="text-sm font-normal">
          Adicione ideias, notas e faça um plano de organização de onde estiver.
        </p>

        <div className="flex justify-between items-center mt-1">
          <button
            type="button"
            className="bg-[#FFFCFCEB] text-black text-sm font-medium rounded-2xl p-4 py-1"
          >
            Agora não
          </button>

          <a
            href=""
            className="bg-[#4F46E5] text-sm font-medium rounded-2xl p-4 py-1"
          >
            Usar o aplicativo
          </a>
        </div>
      </aside>
    </main>
  );
};
