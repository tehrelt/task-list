import type { TaskStatus } from "@/entities/task";
import { useTaskStore } from "@/store/tasks";
import { TaskItem } from "./task-item";
import { Badge } from "./ui/badge";
import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { useTranslation } from "react-i18next";

interface Props {
  status: TaskStatus;
  className?: string;
}

export const TaskStatusColumn = ({ status, className }: Props) => {
  const { tasks, create: createTask } = useTaskStore();
  const { t } = useTranslation();

  const categoryTasks = tasks.filter((t) => t.status === status);

  const handleCreate = () => {
    createTask({
      id: tasks.length + 1,
      title: `New Task ${tasks.length + 1}`,
      description: "",
      status: status,
      priority: "low",
      category: "bug",
    });
  };

  return (
    <div className={className}>
      <div className="flex flex-col gap-4 border rounded-md p-4">
        <div className="flex justify-between">
          <Badge className="text-lg font-bold">{t(status)}</Badge>
          <Button
            variant="ghost"
            className="cursor-pointer"
            onClick={handleCreate}
          >
            <PlusIcon className="w-4 h-4" />
          </Button>
        </div>
        <ScrollArea className="flex flex-col  max-h-96">
          <div className="flex flex-col gap-y-2">
            {categoryTasks.map((t) => (
              <TaskItem key={t.id} task={t} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};
