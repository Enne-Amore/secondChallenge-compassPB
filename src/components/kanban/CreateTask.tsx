import { ComponentProps, useState } from "react";
import { BsUpload } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FiTrash2 } from "react-icons/fi";
import { GoPaperclip } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import { TitleInput } from "./InputCreateTask";
import { DescriptionInput } from "./DescriptionInput";
import { RadioInput } from "./RadioInput";

export type Modal = ComponentProps<"div"> & {
  modalCreate: boolean;
  setModalCreate: (modalCreate: boolean) => void;
};

export const CreateTask = ({ modalCreate, setModalCreate }: Modal) => {
  const keyDown = (event: React.KeyboardEvent<SVGElement>) => {
    if (event.key === "Enter") {
      setModalCreate(!modalCreate);
    }
  };

  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setFileName(file ? file.name : null);
  };

  return (
    <div className="fixed min-h-screen inset-x-0 inset-y-0 flex justify-center items-center z-20">
      <div
        className="absolute min-h-screen inset-x-0 inset-y-0 bg-[#00000080]"
        onClick={() => setModalCreate(!modalCreate)}
      ></div>

      <article className="bg-[#FBFBFB] rounded-xl min-w-80 flex flex-col px-6 pt-2 pb-4 z-30">
        <div className="flex justify-between">
          <h2 className="text-[#160A60] text-lg font-semibold mb-2">
            Create new task
          </h2>

          <IoCloseOutline
            className="text-red-800 text-xl font-bold mt-0.5 cursor-pointer focus:outline-0 focus-visible:outline-1"
            tabIndex={0}
            onClick={() => setModalCreate(!modalCreate)}
            onKeyDown={keyDown}
          />
        </div>

        <form action="" method="post" className="flex flex-col gap-3">
          <TitleInput/>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="status"
              className="text-[#331436] text-xs font-medium"
            >
              Status
            </label>

            <ul className="flex items-center gap-2">
              <RadioInput id="todo" label="To do" name="status" />

              <RadioInput id="inProgress" label="In progress" name="status" />

              <RadioInput id="done" label="Done" name="status" />
            </ul>
          </div>

          <DescriptionInput />

          <div className="flex flex-col gap-1">
            <label
              htmlFor="start-date"
              className="text-[#331436] text-xs font-medium"
            >
              Start Date
            </label>

            <div className="flex gap-1.5">
              <input
                type="date"
                id="start-date"
                className="text-[#00000080] text-xs border border-[#0000001A] py-1 px-2 rounded-md"
              />

              <input
                type="time"
                id="time"
                className="text-[#00000080] text-xs border border-[#0000001A] py-1 px-2 rounded-md -translate-y-0.5"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="end-date"
              className="text-[#331436] text-xs font-medium"
            >
              End Date
            </label>

            <div className="flex gap-1.5">
              <input
                type="date"
                id="end-date"
                className="text-[#00000080] text-xs border border-[#0000001A] py-1 px-2 rounded-md"
              />

              <input
                type="time"
                id="time"
                className="text-[#00000080] text-xs border border-[#0000001A] py-1 px-2 rounded-md -translate-y-0.5"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="img" className="text-[#331436] text-xs font-medium">
              Task Cover
            </label>

            <div className="relative w-full flex flex-col items-end">
              <input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={handleFileChange}
              />

              <span className="text-xs text-[#4F46E5] font-medium">
                optional
              </span>

              {fileName ? (
                <div className="bg-[#EFF6FF] border-[#60A5FA] border rounded p-2 w-full mb-2 flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <GoPaperclip className="text-xs" />

                    <span className="text-xs font-normal">{fileName}</span>
                  </div>

                  <FiTrash2
                    className="text-xs cursor-pointer"
                    onClick={() => setFileName(null)}
                  />
                </div>
              ) : null}

              <label
                htmlFor="file-upload"
                className="flex flex-col items-center gap-2 w-full border border-[#60A5FA] border-dashed rounded-lg px-8 py-4 text-[#4B5563] text-xs font-normal cursor-pointer"
              >
                <BsUpload className="text-sm" />

                <span>
                  Drop here to attach or{" "}
                  <strong className="text-[#60A5FA] font-normal">upload</strong>
                </span>

                <p>Max size: 5GB</p>
              </label>
            </div>
          </div>

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

          <div className="flex flex-col gap-1">
            <label
              htmlFor="priority"
              className="text-[#331436] text-xs font-medium"
            >
              Priority
            </label>

            <ul className="flex items-center gap-2">
              <RadioInput id="low" label="Low" name="priority" />

              <RadioInput id="mid" label="Mid" name="priority" />

              <RadioInput id="high" label="High" name="priority" />
            </ul>
          </div>

          <button
            type="submit"
            className="bg-[#22C55E] hover:bg-[#5CB77D] transition-all text-white rounded-lg p-1 mt-2"
          >
            Create!
          </button>
        </form>
      </article>
    </div>
  );
};
