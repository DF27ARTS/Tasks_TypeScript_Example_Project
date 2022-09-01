import { Task } from "../interfaces/Task";

interface Props {
  task: Task;
  DeleteATask: (id: number) => void;
}

export default function TaskCard({ task, DeleteATask }: Props) {
  return (
    <div className="card card-body bg-secondary rounded-0 text-dark">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button
        onClick={() => task.id && DeleteATask(task.id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </div>
  );
}
