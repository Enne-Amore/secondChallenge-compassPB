import React, { ComponentProps } from "react";

export type InfoRadioInut = ComponentProps<"ul"> & {
  label: string;
  radioInputs: React.ReactNode;
};

export const RadioInputs = ({ label, radioInputs }: InfoRadioInut) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="status" className="text-[#331436] text-xs font-medium">
        {label}
      </label>

      <ul className="flex items-center gap-2">{radioInputs}</ul>
    </div>
  );
};
