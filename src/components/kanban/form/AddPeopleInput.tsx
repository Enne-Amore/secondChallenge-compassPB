import { ChangeEvent, ComponentProps } from "react";
import { CiSearch } from "react-icons/ci";

export type Styles = ComponentProps<"label"> & {
  stylesLabel: string;
  val: string;
  changeVal: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const AddPeopleInput = ({ stylesLabel, val, changeVal }: Styles) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor="addPeople"
        className={stylesLabel}
      >
        Add people
      </label>

      <div className="relative w-full">
        <input
          type="text"
          id="addPeople"
          placeholder="John Doe"
          value={val}
          onChange={changeVal}
          required
          className="text-[#5E6366] text-xs desktop:text-base border border-[#0000001A] py-1.5 pl-8 pr-2 rounded-md w-full desktop:py-2 desktop:pl-12"
        />

        <CiSearch className="absolute top-1.5 left-2 text-[#00000080] desktop:text-2xl desktop:top-2 desktop:left-3" />
      </div>
    </div>
  );
};
