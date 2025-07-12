import type { Task } from "@/entities/task";

interface Props {
  task: Task;
}

export const TaskItem = ({ task }: Props) => {
  return <div>{task.title}</div>;
};
