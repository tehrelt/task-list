import { useTaskStore } from "@/store/tasks";
import { TaskItem } from "./task-item";

export const TaskList = () => {
  const { tasks, create, update, delete: deleteTask } = useTaskStore();

  return (
    <div>
      <h1>Task List</h1>
      <But

      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};
