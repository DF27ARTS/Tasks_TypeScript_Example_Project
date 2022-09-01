import { Task } from "../interfaces/Task";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
  DeleteATask: (id: number) => void;
}

export default function TaskList({ tasks, DeleteATask }: Props) {
  return (
    <>
      {tasks.map((task) => (
        <div className="col-md-4 pb-2" key={task.id}>
          <TaskCard task={task} DeleteATask={DeleteATask} />
        </div>
      ))}
    </>
  );
}
