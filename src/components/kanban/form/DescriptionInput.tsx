export const DescriptionInput = () => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor="description"
        className="text-[#331436] text-xs font-medium"
      >
        Description
      </label>

      <textarea
        id="description"
        placeholder="Enter a description"
        className="text-[#00000080] text-xs border border-[#0000001A] py-1 px-2 rounded-md h-20 resize-none"
        maxLength={300}
      ></textarea>
    </div>
  );
};
