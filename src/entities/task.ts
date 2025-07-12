import { z } from "zod";

export const taskStatuses = z.enum(["todo", "in-progress", "done"], {
  error: "Status is required",
});
export const taskPriorities = z.enum(["low", "medium", "high"], {
  error: "Priority is required",
});
export const taskCategories = z.enum(
  ["bug", "feature", "documentation", "refactor", "test"],
  {
    error: "Category is required",
  }
);

export type TaskStatus = z.infer<typeof taskStatuses>;
export type TaskPriority = z.infer<typeof taskPriorities>;
export type TaskCategory = z.infer<typeof taskCategories>;

export const taskSchema = z.object({
  id: z.number(),
  title: z.string({ error: "Title is required" }),
  description: z.string().optional(),
  status: taskStatuses,
  priority: taskPriorities,
  category: taskCategories,
  updatedAt: z.date().default(new Date()),
  createdAt: z.date().default(new Date()),
});

export const taskCreateSchema = taskSchema.omit({
  id: true,
  updatedAt: true,
  createdAt: true,
});

export type Task = z.infer<typeof taskSchema>;
export type TaskCreate = z.infer<typeof taskCreateSchema>;
