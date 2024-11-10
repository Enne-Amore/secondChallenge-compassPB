import { ChangeEvent, ComponentProps } from "react";

export type InfoDateInputs = ComponentProps<"label"> & {
  idDate: string;
  idTime: string;
  label: string;
  stylesLabel: string;
  stylesInput: string;
  valDate: string;
  changeValDate: (e: ChangeEvent<HTMLInputElement>) => void;
  valTime: string;
  changeValTime: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const DateInputs = ({ label, idDate, idTime, stylesLabel, stylesInput, valDate, changeValDate, valTime, changeValTime }: InfoDateInputs) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={idDate} className={stylesLabel}>
        {label}
      </label>

      <div className="flex gap-1.5">
        <input
          type="date"
          id={idDate}
          value={valDate}
          onChange={changeValDate}
          className={stylesInput}
        />

        <input
          type="time"
          id={idTime}
          value={valTime}
          onChange={changeValTime}
          className={`${stylesInput} -translate-y-0.5`}
        />
      </div>
    </div>
  );
};
