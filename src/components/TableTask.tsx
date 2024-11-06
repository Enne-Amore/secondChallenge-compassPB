import { ComponentProps } from "react";
import { Task } from "./Task";

export type Colors = ComponentProps<"div"> &
  ComponentProps<"strong"> &
  ComponentProps<"h2"> &
  ComponentProps<"path"> & {
    title: string;
    qtd?: number;
    darkColor: string;
    lightColor: string;
  };

export const TableTask = ({ title, qtd, darkColor, lightColor }: Colors) => {
  return (
    <article className="bg-[#1E293B1A] rounded-3xl">
      <div
        className={`bg-[${lightColor}] flex items-center justify-between py-1 pl-2 pr-3 rounded-full`}
      >
        <div className="flex items-center gap-2.5">
          <strong
            className={`bg-[${darkColor}] text-white text-xs pt-1.5 pb-2.5 px-3 rounded-3xl font-semibold`}
          >
            {qtd}
          </strong>

          <h2 className={`text-[${darkColor}] text-xs font-bold`}>{title}</h2>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 9 10"
          fill="none"
          className="cursor-pointer"
        >
          <path
            d="M7.96113 4.91918C7.96113 5.02419 7.91941 5.12491 7.84515 5.19916C7.7709 5.27342 7.67018 5.31514 7.56517 5.31514H5.05743V7.82287C5.05743 7.92789 5.01571 8.0286 4.94146 8.10286C4.8672 8.17712 4.76649 8.21883 4.66147 8.21883C4.55646 8.21883 4.45574 8.17712 4.38149 8.10286C4.30723 8.0286 4.26551 7.92789 4.26551 7.82287V5.31514H1.75778C1.65276 5.31514 1.55205 5.27342 1.47779 5.19916C1.40353 5.12491 1.36182 5.02419 1.36182 4.91918C1.36182 4.81416 1.40353 4.71345 1.47779 4.63919C1.55205 4.56494 1.65276 4.52322 1.75778 4.52322H4.26551V2.01548C4.26551 1.91047 4.30723 1.80975 4.38149 1.7355C4.45574 1.66124 4.55646 1.61952 4.66147 1.61952C4.76649 1.61952 4.8672 1.66124 4.94146 1.7355C5.01571 1.80975 5.05743 1.91047 5.05743 2.01548V4.52322H7.56517C7.67018 4.52322 7.7709 4.56494 7.84515 4.63919C7.91941 4.71345 7.96113 4.81416 7.96113 4.91918Z"
            fill={`${darkColor}`}
          />
        </svg>
      </div>

      <ul className="flex flex-col gap-3.5 py-3 px-3.5">
        <Task />

        <Task />

        <Task />
      </ul>
    </article>
  );
};
