import { CiSearch } from "react-icons/ci";

export const AddPeopleInput = () => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor="add-people"
        className="text-[#331436] text-xs font-medium"
      >
        Add people
      </label>

      <div className="relative w-full">
        <input
          type="text"
          id="add-people"
          placeholder="John Doe"
          className="text-[#5E6366] text-xs border border-[#0000001A] py-1.5 pl-8 pr-2 rounded-md w-full"
        />

        <CiSearch className="absolute top-1.5 left-2 text-[#00000080]" />
      </div>
    </div>
  );
};
