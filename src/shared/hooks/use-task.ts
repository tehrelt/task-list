import { useTaskStore } from "@/store/tasks";

export const useTask = (id: number) => {
  const task = useTaskStore((state) => state.tasks.find((t) => t.id === id));

  if (!task) {
    throw new Error("Task not found");
  }

  return task;
};
