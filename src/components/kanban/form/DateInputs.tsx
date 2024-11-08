import { ComponentProps } from "react";

export type InfoDateInputs = ComponentProps<"label"> & {
  id: string;
  label: string;
};

export const DateInputs = ({ label, id }: InfoDateInputs) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-[#331436] text-xs font-medium">
        {label}
      </label>

      <div className="flex gap-1.5">
        <input
          type="date"
          id={id}
          defaultValue={"2020-12-12"}
          className="text-[#00000080] text-xs border border-[#0000001A] py-1 px-2 rounded-md"
        />

        <input
          type="time"
          id="time"
          defaultValue={"00:00"}
          className="text-[#00000080] text-xs border border-[#0000001A] py-1 px-2 rounded-md -translate-y-0.5"
        />
      </div>
    </div>
  );
};
