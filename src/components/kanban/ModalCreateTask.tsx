import { ComponentProps } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FormCreateTask } from "./form/FormCreateTask";

export type Modal = ComponentProps<"div"> & {
  modalCreate: boolean;
  setModalCreate: (modalCreate: boolean) => void;
};

export const ModalCreateTask = ({ modalCreate, setModalCreate }: Modal) => {
  const keyDown = (event: React.KeyboardEvent<SVGElement>) => {
    if (event.key === "Enter") {
      setModalCreate(!modalCreate);
    }
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

        <FormCreateTask />
      </article>
    </div>
  );
};
