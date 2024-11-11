import React, { ComponentProps } from "react";

export type InfoRadioInut = ComponentProps<"ul"> & {
  label: string;
  stylesLabel: string;
  radioInputs: React.ReactNode;
};

export const RadioInputs = ({
  label,
  stylesLabel,
  radioInputs,
}: InfoRadioInut) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="status" className={stylesLabel}>
        {label}
      </label>

      <ul className="flex items-center gap-2 desktop:gap-6">{radioInputs}</ul>
    </div>
  );
};
