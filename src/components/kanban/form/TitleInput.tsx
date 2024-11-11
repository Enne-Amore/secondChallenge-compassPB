import { ChangeEvent, ComponentProps } from "react";

export type Styles = ComponentProps<"label"> & {
  stylesLabel: string;
  stylesInput: string;
  val: string;
  changeVal: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const TitleInput = ({
  stylesLabel,
  stylesInput,
  val,
  changeVal,
}: Styles) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="title" className={stylesLabel}>
        Title
      </label>

      <input
        type="text"
        id="title"
        placeholder="Enter the title of the task"
        value={val}
        onChange={changeVal}
        className={stylesInput}
        required
        min={5}
      />
    </div>
  );
};
