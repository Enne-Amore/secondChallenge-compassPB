import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import imgProfile from "../../assets/profile-img-1.png";
import { FaCircleCheck } from "react-icons/fa6";
import { useState } from "react";

export const Task = () => {
  const [progress, setProgress] = useState<string>("0");

  return (
    <article className="bg-white rounded-2xl shadow-sm p-2.5 pb-1.5 flex flex-col gap-3 min-w-52">
      <strong className="bg-[#FFFBEB] text-[#F59E0B] text-xs font-semibold font-plus py-1.5 px-2.5 rounded-full w-max">
        Mid
      </strong>

      <h3 className="text-[#1E293B] text-xs font-bold mb-1">Task 3</h3>

      <div className="flex flex-col gap-2.5">
        <div className="flex justify-between items-center">
          <label
            htmlFor="progress"
            className="text-[#475569] text-xs font-medium font-plus"
          >
            Progress
          </label>

          <strong className="text-xs font-bold font-plus">{progress}</strong>
        </div>

        <input
          type="range"
          name="progress"
          id="progress"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
          className="w-full h-2.5 rounded-full"
        />
      </div>

      <div className="flex justify-between items-center">
        <ul className="flex items-center">
          <figure className="w-6 h-6">
            <img
              src={imgProfile}
              alt="Profile image"
              className="w-full h-full rounded-full"
            />
          </figure>

          <figure className="w-6 h-6 -ml-2 rounded-full box-content border-white border-2">
            <img
              src={imgProfile}
              alt="Profile image"
              className="w-full h-full rounded-full"
            />
          </figure>
        </ul>

        <div className="flex gap-3.5">
          <div className="flex items-center gap-1">
            <IoChatbubbleEllipsesSharp className="text-[#94A3B8] text-sm" />

            <span className="text-xs font-semibold font-plus">987</span>
          </div>

          <div className="flex items-center gap-1">
            <FaCircleCheck className="text-[#94A3B8] text-sm" />

            <span className="text-xs font-semibold font-plus">210</span>
          </div>
        </div>
      </div>
    </article>
  );
};
