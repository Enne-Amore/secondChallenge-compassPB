import { TbPinnedFilled } from "react-icons/tb";
import { PersonProfile } from "../components/PersonProfile";
import logo from "../../public/logo.png";
import { TableTask } from "../components/TableTask";

export const Kanban = () => {
  return (
    <main className="flex flex-col items-center">
      <div className="relative text-white w-max h-max">
        <TbPinnedFilled className="absolute top-5 right-1 bg-[#94A3B8] hover:bg-[#1E293B] transition-all cursor-pointer text-xl w-max h-max rounded-full p-3" />

        <div className="bg-[#6C7D96] rounded-3xl px-5 py-8 font-bold flex-col gap-6 hidden">
          <section>
            <h2 className="text-sm mb-3">In this project</h2>

            <ul className="flex flex-col gap-2 min-w-52">
              <PersonProfile />

              <PersonProfile />

              <PersonProfile />
            </ul>

            <a href="" className="text-[#C7C3FF] text-xs flex justify-end mt-1">
              View all (10)
            </a>
          </section>

          <section>
            <h2 className="text-sm mb-3">Metrics</h2>

            <div className="grid grid-cols-metrics grid-rows-2 gap-2 ">
              <article className="bg-white text-[#160A60] rounded-xl py-1.5 px-2.5">
                <h3 className="text-xs">Total Tasks</h3>

                <ol>
                  <li className="flex items-center gap-1">
                    <strong className="text-xl text-[#4F46E5] font-bold">
                      10
                    </strong>
                    <span className="text-xs">To do</span>
                  </li>

                  <li className="flex items-center gap-1">
                    <strong className="text-xl text-[#F59E0B] font-bold">
                      15
                    </strong>

                    <span className="text-xs">In progress</span>
                  </li>

                  <li className="flex items-center gap-1">
                    <strong className="text-xl text-[#22C55E] font-bold">
                      11
                    </strong>

                    <span className="text-xs">Done</span>
                  </li>
                </ol>
              </article>

              <article className="bg-[#F6F6F6E5] rounded-xl py-1.5 px-2.5 grid row-span-2">
                <h3 className="text-xs text-[#160A60]">Most active</h3>

                <span className="text-xs text-[#4F46E5] -mt-5">
                  lats 30 days
                </span>

                <ul className="flex flex-col gap-2 -mt-3">
                  <PersonProfile />

                  <PersonProfile />

                  <PersonProfile />
                </ul>
              </article>

              <article className="bg-white rounded-xl py-1.5 px-2.5">
                <h3 className="text-xs text-[#160A60]">Total time estimated</h3>

                <strong className="text-2xl text-[#4F46E5] font-bold flex justify-center">
                  00:00
                </strong>
              </article>
            </div>
          </section>
        </div>
      </div>

      <section className="flex gap-4 bg-kanban bg-no-repeat bg-cover rounded-3xl py-60 w-10/12 overflow-auto">
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
