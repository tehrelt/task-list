import { useTask } from "@/shared/hooks/use-task";
import { useTaskStore } from "@/store/tasks";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { Label } from "@/shared/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import {
  taskStatuses,
  taskPriorities,
  taskCategories,
  type TaskStatus,
  type TaskPriority,
  type TaskCategory,
} from "@/entities/task";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Trash } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { Link } from "react-router-dom";
import { datef } from "@/shared/lib/utils";

interface Props {
  id: number;
}

export const TaskDetails = ({ id }: Props) => {
  const task = useTask(id);
  const { t } = useTranslation();
  const { update: updateTask, delete: deleteTask } = useTaskStore();

  return (
    <div className="border rounded-md p-4 w-full md:w-1/2 space-y-4">
      <div className="flex justify-between">
        <Link to="/" className="flex items-center gap-2 hover:underline">
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Link>
        <Button variant="ghost" onClick={() => deleteTask(task)}>
          <Trash className="w-4 h-4 text-red-500 hover:text-red-500/60" />
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <div className="space-y-1">
          <Label htmlFor="title">Title</Label>
          <Input
            name="title"
            value={task.title}
            onChange={(e) => updateTask({ ...task, title: e.target.value })}
            className="rounded-l-none"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="description">Description</Label>
          <Textarea
            name="description"
            value={task.description}
            onChange={(e) =>
              updateTask({ ...task, description: e.target.value })
            }
          />
        </div>

        <div className="flex gap-2">
          <Label htmlFor="status">Status</Label>
          <Select
            name="status"
            value={task.status}
            onValueChange={(value: TaskStatus) =>
              updateTask({ ...task, status: value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a status" />
            </SelectTrigger>

            <SelectContent>
              {Object.values(taskStatuses.enum).map((status) => (
                <SelectItem key={status} value={status}>
                  {t(status)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2">
          <Label htmlFor="priority">Priority</Label>
          <Select
            name="priority"
            value={task.priority}
            onValueChange={(value: TaskPriority) =>
              updateTask({ ...task, priority: value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a priority" />
            </SelectTrigger>

            <SelectContent>
              {Object.values(taskPriorities.enum).map((priority) => (
                <SelectItem key={priority} value={priority}>
                  {t(priority)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2">
          <Label htmlFor="category">Category</Label>
          <Select
            name="category"
            value={task.category}
            onValueChange={(value: TaskCategory) =>
              updateTask({ ...task, category: value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>

            <SelectContent>
              {Object.values(taskCategories.enum).map((category) => (
                <SelectItem key={category} value={category}>
                  {t(category)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between text-muted-foreground">
        <div className="flex items-center gap-2">
          <Label htmlFor="createdAt">Created:</Label>
          <div>{datef(task.createdAt!)}</div>
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="updatedAt">Updated:</Label>
          <div>{datef(task.updatedAt)}</div>
        </div>
      </div>
    </div>
  );
};
