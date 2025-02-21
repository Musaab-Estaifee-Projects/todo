import { atom } from "jotai";

export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  priority: string;
};

const storedTasks = localStorage.getItem("tasks");
const initialTasks: Task[] = storedTasks ? JSON.parse(storedTasks) : [];

export const tasksAtom = atom<Task[]>(initialTasks);
