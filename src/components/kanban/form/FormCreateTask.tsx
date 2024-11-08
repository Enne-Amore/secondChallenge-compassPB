import { AddPeopleInput } from "./AddPeopleInput";
import { DescriptionInput } from "./DescriptionInput";
import { RadioInput } from "./RadioInput";
import { DateInputs } from "./DateInputs";
import { TaskCoverInput } from "./TaskCoverInput";
import { TitleInput } from "./TitleInput";
import { RadioInputs } from "./RadioInputs";

export const FormCreateTask = () => {
  return (
    <form action="" method="post" className="flex flex-col gap-3">
      <TitleInput />

      <RadioInputs
        label="Status"
        radioInputs={
          <>
            <RadioInput id="todo" label="To do" name="status" />

            <RadioInput id="inProgress" label="In progress" name="status" />

            <RadioInput id="done" label="Done" name="status" />
          </>
        }
      />

      <DescriptionInput />

      <DateInputs label="Start Date" id="startDate" />

      <DateInputs label="End Date" id="endDate" />

      <TaskCoverInput />

      <AddPeopleInput />

      <RadioInputs
        label="Priority"
        radioInputs={
          <>
            <RadioInput id="low" label="Low" name="priority" />

            <RadioInput id="mid" label="Mid" name="priority" />

            <RadioInput id="high" label="High" name="priority" />
          </>
        }
      />

      <button
        type="submit"
        className="bg-[#22C55E] hover:bg-[#5CB77D] transition-all text-white rounded-lg p-1 mt-2"
      >
        Create!
      </button>
    </form>
  );
};
