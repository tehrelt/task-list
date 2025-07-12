import type { TaskStatus } from "@/entities/task";
import { useTaskStore } from "@/store/tasks";
import { TaskItem } from "./task-item";
import { Badge } from "@/shared/ui/badge";
import { PlusIcon } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { ScrollArea } from "@/shared/ui/scroll-area";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { TaskCreateModal } from "@/widgets/task-create-modal";

interface Props {
  status: TaskStatus;
  className?: string;
}

export const TaskStatusColumn = ({ status, className }: Props) => {
  const { tasks } = useTaskStore();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const categoryTasks = tasks.filter((t) => t.status === status);

  const handleCreate = () => {
    setOpen(true);
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
          <TaskCreateModal
            open={open}
            onOpenChange={setOpen}
            initialData={{ status }}
          />
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
