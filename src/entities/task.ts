export const taskStatuses = ["todo", "in-progress", "done"] as const;
export const taskPriorities = ["low", "medium", "high"] as const;
export const taskCategories = [
  "bug",
  "feature",
  "documentation",
  "refactor",
  "test",
] as const;

export type TaskStatus = (typeof taskStatuses)[number];
export type TaskPriority = (typeof taskPriorities)[number];
export type TaskCategory = (typeof taskCategories)[number];

export type Task = {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  category: TaskCategory;
  updatedAt: Date;
  createdAt: Date;
};
