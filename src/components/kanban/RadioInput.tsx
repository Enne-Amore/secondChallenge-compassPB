import { ComponentProps } from "react";

export type InfoRadio = ComponentProps<"input"> &
  ComponentProps<"label"> & {
    id: string;
    name: string;
    label: string;
  };

export const RadioInput = ({ id, name, label }: InfoRadio) => {
  return (
    <li className="flex items-center gap-1">
      <input
        type="radio"
        name={name}
        id={id}
        value={id}
        className="form-radio h-4 w-4 transition duration-200 ease-in-out"
      />
      <label htmlFor={id} className="text-[#2B2F32] text-xs font-normal">
        {label}
      </label>
    </li>
  );
};
