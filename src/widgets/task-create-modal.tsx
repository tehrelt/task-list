import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";
import { Input } from "@/shared/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Textarea } from "@/shared/ui/textarea";
import {
  taskCategories,
  taskPriorities,
  taskStatuses,
  type Task,
  type TaskCreate,
  taskCreateSchema,
} from "@/entities/task";
import { useTaskStore } from "@/store/tasks";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData?: Partial<Task>;
}

export const TaskCreateModal = ({ open, onOpenChange, initialData }: Props) => {
  const { t } = useTranslation();
  const { create: createTask } = useTaskStore();

  const form = useForm<TaskCreate>({
    defaultValues: {
      ...initialData,
    },
    resolver: zodResolver(taskCreateSchema),
  });

  const handleSubmit = (data: TaskCreate) => {
    createTask(data);
    onOpenChange(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{t("Create Task")}</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            id="task-create-form"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("Title")}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("Description")}</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("Status")}</FormLabel>
                    <FormControl>
                      <Select {...field} onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder={t("Select Status")} />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.values(taskStatuses.enum).map((status) => (
                            <SelectItem key={status} value={status}>
                              {t(status)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("Priority")}</FormLabel>
                    <FormControl>
                      <Select {...field} onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder={t("Select Priority")} />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.values(taskPriorities.enum).map(
                            (priority) => (
                              <SelectItem key={priority} value={priority}>
                                {t(priority)}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("Category")}</FormLabel>
                    <FormControl>
                      <Select {...field} onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder={t("Select Category")} />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.values(taskCategories.enum).map(
                            (category) => (
                              <SelectItem key={category} value={category}>
                                {t(category)}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>

        <DialogFooter>
          <Button type="submit" form="task-create-form">
            {t("Save")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
