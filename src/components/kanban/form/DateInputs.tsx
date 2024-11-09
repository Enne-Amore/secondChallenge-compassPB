import { ComponentProps } from "react";

export type InfoDateInputs = ComponentProps<"label"> & {
  id: string;
  label: string;
  stylesLabel: string;
  stylesInput: string;
};

export const DateInputs = ({ label, id, stylesLabel, stylesInput }: InfoDateInputs) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className={stylesLabel}>
        {label}
      </label>

      <div className="flex gap-1.5">
        <input
          type="date"
          id={id}
          defaultValue={"2020-12-12"}
          className={stylesInput}
        />

        <input
          type="time"
          id="time"
          defaultValue={"00:00"}
          className={`${stylesInput} -translate-y-0.5`}
        />
      </div>
    </div>
  );
};
