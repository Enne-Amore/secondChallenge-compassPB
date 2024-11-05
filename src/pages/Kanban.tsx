import { TbPinnedFilled } from "react-icons/tb"
import { PersonProfile } from "../components/PersonProfile"
import { Task } from "../components/Task"

export const Kanban = () => {
  return (
    <main className="flex flex-col items-center">
      <div className="relative text-white w-max h-max">
        <TbPinnedFilled className="absolute top-5 right-1 bg-[#94A3B8] text-xl w-max h-max rounded-full p-3" />

        <div className="bg-[#6C7D96] rounded-3xl px-5 py-8 font-bold flex-col gap-6 hidden">
          <section>
            <h2 className="text-sm mb-3">In this project</h2>

            <ul className="flex flex-col gap-2 min-w-52">
              <PersonProfile />

              <PersonProfile />

              <PersonProfile />
            </ul>

            <a href="" className="text-[#C7C3FF] text-xs flex justify-end mt-1">View all (10)</a>
          </section>

          <section>
            <h2 className="text-sm mb-3">Metrics</h2>

            <div className="grid grid-cols-metrics grid-rows-2 gap-2 ">
              <article className="bg-white text-[#160A60] rounded-xl py-1.5 px-2.5">
                <h3 className="text-xs">Total Tasks</h3>
              
                <ol>
                  <li className="flex items-center gap-1">
                    <strong className="text-xl text-[#4F46E5] font-bold">10</strong>
                    <span className="text-xs">To do</span>
                  </li>
              
                  <li className="flex items-center gap-1">
                    <strong className="text-xl text-[#F59E0B] font-bold">15</strong>
              
                    <span className="text-xs">In progress</span>
                  </li>
              
                  <li className="flex items-center gap-1">
                    <strong className="text-xl text-[#22C55E] font-bold">11</strong>
              
                    <span className="text-xs">Done</span>
                  </li>
                </ol>
              </article>

              <article className="bg-[#F6F6F6E5] rounded-xl py-1.5 px-2.5 grid row-span-2">
                <h3 className="text-xs text-[#160A60]">Most active</h3>

                <span className="text-xs text-[#4F46E5] -mt-5">lats 30 days</span>
                
                <ul className="flex flex-col gap-2 -mt-3">
                  <PersonProfile />

                  <PersonProfile />

                  <PersonProfile />
                </ul>
              </article>
              
              <article className="bg-white rounded-xl py-1.5 px-2.5">
                <h3 className="text-xs text-[#160A60]">Total time estimated</h3>

                <strong className="text-2xl text-[#4F46E5] font-bold flex justify-center">00:00</strong>
              </article>
            </div>
          </section>
        </div>
      </div>

      <section className="bg-kanban bg-no-repeat bg-cover rounded-3xl py-60 w-10/12 overflow-auto">
        <article className="bg-[#1E293B1A] rounded-3xl">
          <div className="bg-[#D3D0F8] flex items-center justify-between py-1 pl-2 pr-3 rounded-full">
            <div className="flex items-center gap-2.5">
              <strong className="bg-[#4F46E5] text-white text-xs pt-1.5 pb-3 px-3 rounded-3xl font-semibold">25</strong>
              
              <span className="text-[#4F46E5] text-xs font-bold">To do</span>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 9 10" fill="none">
              <path d="M7.96113 4.91918C7.96113 5.02419 7.91941 5.12491 7.84515 5.19916C7.7709 5.27342 7.67018 5.31514 7.56517 5.31514H5.05743V7.82287C5.05743 7.92789 5.01571 8.0286 4.94146 8.10286C4.8672 8.17712 4.76649 8.21883 4.66147 8.21883C4.55646 8.21883 4.45574 8.17712 4.38149 8.10286C4.30723 8.0286 4.26551 7.92789 4.26551 7.82287V5.31514H1.75778C1.65276 5.31514 1.55205 5.27342 1.47779 5.19916C1.40353 5.12491 1.36182 5.02419 1.36182 4.91918C1.36182 4.81416 1.40353 4.71345 1.47779 4.63919C1.55205 4.56494 1.65276 4.52322 1.75778 4.52322H4.26551V2.01548C4.26551 1.91047 4.30723 1.80975 4.38149 1.7355C4.45574 1.66124 4.55646 1.61952 4.66147 1.61952C4.76649 1.61952 4.8672 1.66124 4.94146 1.7355C5.01571 1.80975 5.05743 1.91047 5.05743 2.01548V4.52322H7.56517C7.67018 4.52322 7.7709 4.56494 7.84515 4.63919C7.91941 4.71345 7.96113 4.81416 7.96113 4.91918Z" fill="#4F46E5"/>
            </svg>
          </div>

          <ul className="flex flex-col gap-3.5 py-3 px-3.5">
            <Task />
            
            <Task />
            
            <Task />
          </ul>
        </article>
      </section>
    </main>
  )
}
