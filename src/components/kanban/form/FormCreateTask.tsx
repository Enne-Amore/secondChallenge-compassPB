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
      <TitleInput stylesLabel={styles.titleLabel} stylesInput={styles.inputText} />

      <RadioInputs
        stylesLabel={styles.titleLabel}
        label="Status"
        radioInputs={
          <>
            <RadioInput id="todo" label="To do" name="status" stylesLabel={styles.radioLabel} />

            <RadioInput id="inProgress" label="In progress" name="status" stylesLabel={styles.radioLabel} />

            <RadioInput id="done" label="Done" name="status" stylesLabel={styles.radioLabel} />
          </>
        }
      />

      <DescriptionInput stylesLabel={styles.titleLabel} stylesInput={styles.inputText} />

      <DateInputs stylesLabel={styles.titleLabel} stylesInput={styles.inputText} label="Start Date" id="startDate" />

      <DateInputs stylesLabel={styles.titleLabel} stylesInput={styles.inputText} label="End Date" id="endDate" />

      <TaskCoverInput stylesLabel={styles.titleLabel} />

      <AddPeopleInput stylesLabel={styles.titleLabel} />

      <RadioInputs
        stylesLabel={styles.titleLabel}
        label="Priority"
        radioInputs={
          <>
            <RadioInput id="low" label="Low" name="priority" stylesLabel={styles.radioLabel} />

            <RadioInput id="mid" label="Mid" name="priority" stylesLabel={styles.radioLabel} />

            <RadioInput id="high" label="High" name="priority" stylesLabel={styles.radioLabel} />
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
