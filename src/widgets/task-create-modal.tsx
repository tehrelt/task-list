import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  taskCategories,
  taskPriorities,
  taskStatuses,
  type Task,
  type TaskCategory,
  type TaskPriority,
  type TaskStatus,
} from "@/entities/task";
import { useTaskStore } from "@/store/tasks";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData?: Partial<Task>;
}

export const TaskCreateModal = ({ open, onOpenChange, initialData }: Props) => {
  const { t } = useTranslation();
  const { create: createTask, tasks } = useTaskStore();

  const [task, setTask] = useState<Partial<Task> | undefined>(initialData);

  const handleSubmit = () => {
    if (task) {
      createTask({
        ...task,
        id: tasks.length + 1,
      });

      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{t("Create Task")}</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-y-1">
          <Label htmlFor="title">{t("Title")}</Label>
          <Input
            id="title"
            value={task?.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <Label htmlFor="description">{t("Description")}</Label>
          <Textarea
            id="description"
            value={task?.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          />
        </div>

        <div className="flex items-center gap-x-2">
          <Label htmlFor="status">{t("Status")}</Label>
          <Select
            name="status"
            value={task?.status}
            onValueChange={(value: TaskStatus) =>
              setTask({ ...task, status: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder={t("Select Status")} />
            </SelectTrigger>
            <SelectContent>
              {taskStatuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {t(status)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-x-2">
          <Label htmlFor="priority">{t("Priority")}</Label>
          <Select
            name="priority"
            value={task?.priority}
            onValueChange={(value: TaskPriority) =>
              setTask({ ...task, priority: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder={t("Select Priority")} />
            </SelectTrigger>
            <SelectContent>
              {taskPriorities.map((priority) => (
                <SelectItem key={priority} value={priority}>
                  {t(priority)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-x-2">
          <Label htmlFor="category">{t("Category")}</Label>
          <Select
            name="category"
            value={task?.category}
            onValueChange={(value: TaskCategory) =>
              setTask({ ...task, category: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder={t("Select Category")} />
            </SelectTrigger>
            <SelectContent>
              {taskCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {t(category)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <DialogFooter>
          <Button onClick={handleSubmit}>{t("Save")}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
