import { AddPeopleInput } from "./AddPeopleInput";
import { DescriptionInput } from "./DescriptionInput";
import { RadioInput } from "./RadioInput";
import { DateInputs } from "./DateInputs";
import { TaskCoverInput } from "./TaskCoverInput";
import { TitleInput } from "./TitleInput";
import { RadioInputs } from "./RadioInputs";
import styles from "./FormCreateTask.module.css";

export const FormCreateTask = () => {
  return (
    <form action="" method="post" className={styles.container}>
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
        className={styles.btn}
      >
        Create!
      </button>
    </form>
  );
};
