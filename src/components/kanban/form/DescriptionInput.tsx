import { ComponentProps } from "react";

export type Styles = ComponentProps<"label"> & {
  stylesLabel: string;
  stylesInput: string;
};

export const DescriptionInput = ({ stylesLabel, stylesInput }: Styles) => {
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
        className={`${stylesInput} h-20 resize-none`}
        maxLength={300}
      ></textarea>
    </div>
  );
};
