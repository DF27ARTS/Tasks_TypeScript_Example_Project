import { ChangeEvent, FormEvent, useState, useRef } from "react";
// import { AiOutlinePlus } from "react-icons/ai";
import { Task } from "../interfaces/Task";
// import { v4 } from "uuid";
// v4();

interface Props {
  newANewTask: (task: Task) => void;
}

type HaldleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
  title: "",
  description: "",
};

export default function TaskForm({ newANewTask }: Props) {
  const [task, setTask] = useState<Task>(initialState);
  const InputTitle = useRef<HTMLInputElement>(null);

  const HandleINputChange = ({
    target: { name, value },
  }: HaldleInputChange) => {
    setTask({ ...task, [name]: value });
  };

  const HandleNewTask = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    newANewTask(task);
    setTask(initialState);
    InputTitle.current?.focus();
  };

  return (
    <div className="card p-10 card-body bg-secondary text-dark">
      <h1>Add Task</h1>
      <form className="card" onSubmit={HandleNewTask}>
        <input
          type="text"
          placeholder="Write a title"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={HandleINputChange}
          value={task.title}
          autoFocus
          ref={InputTitle}
        />

        <textarea
          name="description"
          rows={2}
          placeholder="Write a description"
          className="form-control mb-3 shadow-none-border-0"
          onChange={HandleINputChange}
          value={task.description}
        ></textarea>

        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  );
}
