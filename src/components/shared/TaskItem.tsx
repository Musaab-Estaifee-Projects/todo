import { Task } from "@/atoms/tasksAtom";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

type TaskItemProps = {
  task: Task;
  onDelete: () => void;
  toggleCompletion: () => void;
};

const TaskItem = ({ task, onDelete, toggleCompletion }: TaskItemProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${date.toLocaleString("en-US", {
      month: "2-digit",
    })}-${date.getDate()} ${date.getHours()}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div
      className={cn(
        "p-4 border rounded flex justify-between items-center max-md:flex-col max-md:items-start max-md:gap-4 transition-colors md:gap-4",
        task.completed ? "bg-green-100" : "bg-white"
      )}
    >
      <div className="flex items-start justify-start gap-4">
        <div className="mt-1">
          <Input
            type="checkbox"
            onChange={toggleCompletion}
            checked={task.completed}
            className="w-4 h-4"
          />
        </div>
        <div className="flex flex-col items-start">
          <h3 className="font-semibold">{task.title}</h3>
          <p className="text-sm text-gray-600">{task.description}</p>
          <p className="mt-4 text-sm text-gray-400">
            <span className="font-medium">Created At:</span>{" "}
            {formatDate(task.createdAt)}
          </p>
          <div className="mt-2 text-sm text-gray-400 flex gap-2">
            <span className="font-medium">Priority:</span>{" "}
            {task.priority ? (
              <div className="flex items-start justify-center gap-2">
                <div
                  className={cn(
                    "rounded-full w-3 h-3 mt-1",
                    task.priority === "High"
                      ? "bg-red-500"
                      : task.priority === "Medium"
                      ? "bg-yellow-500"
                      : "bg-blue-500"
                  )}
                ></div>
                <span
                  className={cn(
                    "",
                    task.priority === "High"
                      ? "text-red-500 font-medium"
                      : task.priority === "Medium"
                      ? "text-yellow-500 font-medium"
                      : "text-blue-500 font-medium"
                  )}
                >
                  {task.priority}
                </span>
              </div>
            ) : (
              <span>Not Set yet</span>
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-2 max-md:ml-8">
        <Link to={`/edit/${task.id}`}>
          <Button size={"lg"} className="bg-yellow-500 hover:bg-yellow-600">
            Edit
          </Button>
        </Link>
        <Button
          size={"lg"}
          className="bg-red-500 hover:bg-red-600"
          onClick={onDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TaskItem;
