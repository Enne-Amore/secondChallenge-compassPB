import { ChangeEvent, ComponentProps } from "react";

export type Styles = ComponentProps<"label"> & {
  stylesLabel: string;
  stylesInput: string;
  val: string;
  changeVal: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const DescriptionInput = ({ stylesLabel, stylesInput, val, changeVal }: Styles) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor="description"
        className={stylesLabel}
      >
        Description
      </label>

      <textarea
        id="description"
        placeholder="Enter a description"
        value={val}
        onChange={changeVal}
        className={`${stylesInput} h-20 resize-none`}
        maxLength={300}
      ></textarea>
    </div>
  );
};
