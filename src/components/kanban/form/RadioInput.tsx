import { ChangeEvent, ComponentProps } from "react";

export type InfoRadio = ComponentProps<"input"> &
  ComponentProps<"label"> & {
    id: string;
    name: string;
    label: string;
    stylesLabel: string;
    val: string;
    changeVal: (e: ChangeEvent<HTMLInputElement>) => void;
  };

export const RadioInput = ({
  id,
  name,
  label,
  stylesLabel,
  val,
  changeVal,
}: InfoRadio) => {
  return (
    <li className="flex items-center gap-1 desktop:gap-1.5">
      <input
        type="radio"
        name={name}
        id={id}
        value={id}
        checked={val === id}
        onChange={changeVal}
        required
        className="form-radio h-4 w-4 transition duration-200 ease-in-out"
      />
      <label htmlFor={id} className={stylesLabel}>
        {label}
      </label>
    </li>
  );
};
