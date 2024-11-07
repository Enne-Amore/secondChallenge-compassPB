export const TitleInput = () => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="title" className="text-[#331436] text-xs font-medium">
        Title
      </label>

      <input
        type="text"
        id="title"
        placeholder="Enter the title of the task"
        className="text-[#00000080] text-xs border border-[#0000001A] py-1 px-2 rounded-md"
        min={5}
      />
    </div>
  );
};
