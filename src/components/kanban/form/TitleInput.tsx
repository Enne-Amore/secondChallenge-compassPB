import { ComponentProps } from "react";

export type Styles = ComponentProps<"label"> & {
  stylesLabel: string;
  stylesInput: string;
};

export const TitleInput = ({ stylesLabel, stylesInput }: Styles) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="title" className={stylesLabel}>
        Title
      </label>

      <input
        type="text"
        id="title"
        placeholder="Enter the title of the task"
        className={stylesInput}
        min={5}
      />
    </div>
  );
};
