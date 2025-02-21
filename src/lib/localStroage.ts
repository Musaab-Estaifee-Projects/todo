import { Task } from "@/atoms/tasksAtom";

export const saveTasksToLocalStorage = (tasks: Task[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
