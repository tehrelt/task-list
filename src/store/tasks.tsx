import type { Task, TaskCreate } from "@/entities/task";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface TasksState {
  tasks: Task[];
}

interface TasksAction {
  create: (task: TaskCreate) => void;
  update: (task: Task) => void;
  delete: (task: Task) => void;
}

type TaskStore = TasksState & TasksAction;

export const useTaskStore = create<TaskStore>()(
  devtools(
    persist(
      (set) => ({
        tasks: [],
        create: (task) =>
          set((state) => ({
            tasks: [
              ...state.tasks,
              {
                ...task,
                id: state.tasks.length + 1,
                createdAt: new Date(),
                updatedAt: new Date(),
              },
            ],
          })),
        update: (task) =>
          set((state) => ({
            tasks: state.tasks.map((t) =>
              t.id === task.id ? { ...task, updatedAt: new Date() } : t
            ),
          })),
        delete: (task) =>
          set((state) => ({
            tasks: state.tasks.filter((t) => t.id !== task.id),
          })),
      }),
      {
        name: "tasks",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
