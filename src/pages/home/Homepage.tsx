import { Task, tasksAtom } from "@/atoms/tasksAtom";
import TaskItem from "@/components/shared/TaskItem";
import { Button } from "@/components/ui/button";
import { saveTasksToLocalStorage } from "@/lib/localStroage";
import { useAtom } from "jotai";
import { Link } from "react-router";

const Homepage = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);

  const toggleCompletion = (task: Task) => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">TODO List</h1>
      <Link to="/create">
        <Button className="mb-4 py-3 bg-green-500 text-white rounded px-12" size={"lg"}>
          Add Task
        </Button>
      </Link>
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={() => deleteTask(task.id)}
            toggleCompletion={() => toggleCompletion(task)}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
