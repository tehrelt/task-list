import { taskStatuses, type Task } from "@/entities/task";
import { Button } from "./ui/button";
import { useTaskStore } from "@/store/tasks";
import { Badge } from "./ui/badge";
import { ArrowLeft, ArrowRight, Trash } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  task: Task;
}

export const TaskItem = ({ task }: Props) => {
  const { delete: deleteTask, update: updateTask } = useTaskStore();

  const handleDelete = () => {
    deleteTask(task);
  };

  const handleMove = (direction: "left" | "right") => {
    const shift = direction === "left" ? -1 : 1;
    const currentIndex = Object.values(taskStatuses.enum).indexOf(task.status);
    const newIndex = currentIndex + shift;
    const newStatus = Object.values(taskStatuses.enum)[newIndex];
    updateTask({ ...task, status: newStatus });
  };

  return (
    <div className="p-4 border rounded-md hover:shadow transition-all duration-300 space-y-2">
      <div className="flex justify-between">
        <div className="space-y-2">
          <Link
            to={`/task/${task.id}`}
            className="text-lg font-bold hover:underline"
          >
            {task.title}
          </Link>
          <div className="text-sm text-muted-foreground line-clamp-2">
            {task.description}
          </div>

          <div className="flex gap-2">
            <Badge variant="priority">{task.priority}</Badge>
            <Badge variant="category">{task.category}</Badge>
          </div>
        </div>

        <div>
          <Button
            className="cursor-pointer"
            variant="ghost"
            onClick={handleDelete}
          >
            <Trash className="w-4 h-4 text-red-500 hover:text-red-500/60" />
          </Button>
        </div>
      </div>

      <div className="flex justify-between gap-2">
        {task.status !== "todo" ? (
          <Button
            variant="ghost"
            className="cursor-pointer"
            onClick={() => handleMove("left")}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
        ) : (
          <div></div>
        )}
        {task.status !== "done" && (
          <Button
            variant="ghost"
            className="cursor-pointer "
            onClick={() => handleMove("right")}
          >
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
};
