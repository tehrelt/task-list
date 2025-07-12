import { TaskDetails } from "@/components/task-details";
import { useParams } from "react-router-dom";

export const TaskDetailsPage = () => {
  const { id } = useParams();

  return (
    <div className="flex justify-center">
      <TaskDetails id={Number(id)} />
    </div>
  );
};
