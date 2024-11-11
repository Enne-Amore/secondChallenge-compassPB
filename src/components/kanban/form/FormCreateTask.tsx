import { AddPeopleInput } from "./AddPeopleInput";
import { DescriptionInput } from "./DescriptionInput";
import { RadioInput } from "./RadioInput";
import { DateInputs } from "./DateInputs";
import { TaskCoverInput } from "./TaskCoverInput";
import { TitleInput } from "./TitleInput";
import { RadioInputs } from "./RadioInputs";
import styles from "./FormCreateTask.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { Modal } from "../ModalCreateTask";

export const FormCreateTask = ({ setModalCreate, modalCreate }: Modal) => {
  const [title, setTitle] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("2020-12-12");
  const [endDate, setEndDate] = useState<string>("2020-12-12");
  const [startTime, setStartTime] = useState<string>("00:00");
  const [endTime, setEndTime] = useState<string>("00:00");
  const [fileName, setFileName] = useState<string | null>(null);
  const [addPeople, setAddPeople] = useState<string>("");
  const [priority, setPriority] = useState<string>("");

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  const handleDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleStartDate = (e: ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDate = (e: ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const handleStartTime = (e: ChangeEvent<HTMLInputElement>) => {
    setStartTime(e.target.value);
  };

  const handleEndTime = (e: ChangeEvent<HTMLInputElement>) => {
    setEndTime(e.target.value);
  };

  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFileName(file ? file.name : null);
  };

  const handleAddPeople = (e: ChangeEvent<HTMLInputElement>) => {
    setAddPeople(e.target.value);
  };

  const handlePriority = (e: ChangeEvent<HTMLInputElement>) => {
    setPriority(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setModalCreate(!modalCreate);
  };

  return (
    <form
      action=""
      method="post"
      className={styles.container}
      onSubmit={handleSubmit}
    >
      <TitleInput
        stylesLabel={styles.titleLabel}
        stylesInput={styles.inputText}
        val={title}
        changeVal={handleTitle}
      />

      <RadioInputs
        stylesLabel={styles.titleLabel}
        label="Status"
        radioInputs={
          <>
            <RadioInput
              id="todo"
              label="To do"
              name="status"
              stylesLabel={styles.radioLabel}
              val={status}
              changeVal={handleStatus}
            />

            <RadioInput
              id="inProgress"
              label="In progress"
              name="status"
              stylesLabel={styles.radioLabel}
              val={status}
              changeVal={handleStatus}
            />

            <RadioInput
              id="done"
              label="Done"
              name="status"
              stylesLabel={styles.radioLabel}
              val={status}
              changeVal={handleStatus}
            />
          </>
        }
      />

      <DescriptionInput
        stylesLabel={styles.titleLabel}
        stylesInput={styles.inputText}
        val={description}
        changeVal={handleDescription}
      />

      <DateInputs
        stylesLabel={styles.titleLabel}
        stylesInput={styles.inputText}
        label="Start Date"
        idDate="startDate"
        idTime="startTime"
        valDate={startDate}
        changeValDate={handleStartDate}
        valTime={startTime}
        changeValTime={handleStartTime}
      />

      <DateInputs
        stylesLabel={styles.titleLabel}
        stylesInput={styles.inputText}
        label="End Date"
        idDate="endDate"
        idTime="endTime"
        valDate={endDate}
        changeValDate={handleEndDate}
        valTime={endTime}
        changeValTime={handleEndTime}
      />

      <TaskCoverInput
        stylesLabel={styles.titleLabel}
        changeVal={handleImg}
        fileName={fileName}
        setFileName={setFileName}
      />

      <AddPeopleInput
        stylesLabel={styles.titleLabel}
        val={addPeople}
        changeVal={handleAddPeople}
      />

      <RadioInputs
        stylesLabel={styles.titleLabel}
        label="Priority"
        radioInputs={
          <>
            <RadioInput
              id="low"
              label="Low"
              name="priority"
              stylesLabel={styles.radioLabel}
              val={priority}
              changeVal={handlePriority}
            />

            <RadioInput
              id="mid"
              label="Mid"
              name="priority"
              stylesLabel={styles.radioLabel}
              val={priority}
              changeVal={handlePriority}
            />

            <RadioInput
              id="high"
              label="High"
              name="priority"
              stylesLabel={styles.radioLabel}
              val={priority}
              changeVal={handlePriority}
            />
          </>
        }
      />

      <button type="submit" className={styles.btn}>
        Create!
      </button>
    </form>
  );
};
