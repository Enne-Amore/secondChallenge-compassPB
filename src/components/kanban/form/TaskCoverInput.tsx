import { useState } from "react";
import { BsUpload } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { GoPaperclip } from "react-icons/go";

export const TaskCoverInput = () => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setFileName(file ? file.name : null);
  };

  return (
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

        <span className="text-xs text-[#4F46E5] font-medium">optional</span>

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
  );
};
