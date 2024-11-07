import React, { useState } from "react";
import { TbPinnedFilled } from "react-icons/tb";
import { PersonProfile } from "./PersonProfile";

export const FixedCard = () => {
  const [openFixed, setOpenFixed] = useState<boolean>(false);
  let fixed: string;
  let styleIcon: string;

  if (openFixed === true) {
    fixed = "flex";
    styleIcon = "top-5 right-1 bg-transparent";
  } else {
    fixed = "hidden";
    styleIcon =
      "top-1.5 left-28 bg-[#94A3B8] hover:bg-[#1E293B] transition-all";
  }

  const keyDown = (event: React.KeyboardEvent<SVGElement>) => {
    if (event.key === "Enter") {
      setOpenFixed(!openFixed);
    }
  };

  return (
    <div className="absolute text-white w-max h-max z-10">
      <TbPinnedFilled
        className={`absolute ${styleIcon} cursor-pointer text-xl w-max h-max rounded-full p-3`}
        onClick={() => setOpenFixed(!openFixed)}
        onKeyDown={keyDown}
        tabIndex={0}
      />

      <div
        className={`bg-[#6C7D96] rounded-3xl px-5 py-8 font-bold flex-col gap-6 ${fixed}`}
      >
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

              <span className="text-xs text-[#4F46E5] -mt-5">lats 30 days</span>

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
  );
};
