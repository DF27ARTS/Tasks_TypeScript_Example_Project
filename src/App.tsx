import "./App.css";
import logo from "./logo.svg";
import { useState } from "react";
import { Task } from "./interfaces/Task";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

interface Props {
  title?: string;
}

function App({ title }: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn react",
      description: "Learn react",
      completed: false,
    },
  ]);

  const getCurrentTimestamp = (): any => new Date().getTime();

  const newANewTask = (task: Task) =>
    setTasks([
      ...tasks,
      { ...task, id: getCurrentTimestamp(), completed: false },
    ]);

  const DeleteATask = (id: number) =>
    setTasks(tasks.filter((task) => task.id !== id));

  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brant">
            <img style={{ width: "4rem" }} src={logo} alt="react logo" />
          </a>
          {title}
        </div>
      </nav>
      <main className="container p-4">
        <div>
          <div className="col-md-12 pb-4">
            <TaskForm newANewTask={newANewTask} />
          </div>

          <div className="col-md-12">
            <div className="row">
              <TaskList tasks={tasks} DeleteATask={DeleteATask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
