import { TaskStatusColumn } from "./task-category";
import { taskStatuses } from "@/entities/task";

export const TaskList = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4">
        {taskStatuses.map((status) => (
          <TaskStatusColumn key={status} status={status} className="flex-1" />
        ))}
      </div>
    </div>
  );
};
