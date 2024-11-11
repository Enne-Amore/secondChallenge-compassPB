import { ChangeEvent, ComponentProps } from "react";
import { BsUpload } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { GoPaperclip } from "react-icons/go";

export type Styles = ComponentProps<"label"> & {
  stylesLabel: string;
  changeVal: (e: ChangeEvent<HTMLInputElement>) => void;
  fileName: string | null;
  setFileName: (fileName: string | null) => void;
};

export const TaskCoverInput = ({
  stylesLabel,
  changeVal,
  fileName,
  setFileName,
}: Styles) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="img" className={stylesLabel}>
        Task Cover
      </label>

      <div className="relative w-full flex flex-col items-end desktop:-mt-1.5">
        <input
          type="file"
          id="fileUpload"
          className="hidden"
          onChange={changeVal}
        />

        <span className="text-xs text-[#4F46E5] font-medium">optional</span>

        {fileName ? (
          <div className="bg-[#EFF6FF] border-[#60A5FA] border rounded p-2 w-full mb-2 flex justify-between items-center desktop:p-2.5">
            <div className="flex items-center gap-1 desktop:gap-1.5">
              <GoPaperclip className="text-xs desktop:text-base" />

              <span className="text-xs font-normal desktop:text-base">
                {fileName}
              </span>
            </div>

            <FiTrash2
              className="text-xs cursor-pointer desktop:text-base"
              onClick={() => setFileName(null)}
            />
          </div>
        ) : null}

        <label
          htmlFor="fileUpload"
          className="flex flex-col items-center gap-2 w-full border border-[#60A5FA] border-dashed rounded-lg px-8 py-4 desktop:py-6 text-[#4B5563] text-xs font-normal cursor-pointer"
        >
          <BsUpload className="text-lg" />

          <span className="text-base">
            Drop here to attach or{" "}
            <strong className="text-[#60A5FA] font-normal">upload</strong>
          </span>

          <p className="desktop:text-sm">Max size: 5GB</p>
        </label>
      </div>
    </div>
  );
};
