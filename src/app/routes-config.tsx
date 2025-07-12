import { Route, Routes } from "react-router-dom";
import { TaskListPage } from "@/pages/task-list";
import { TaskDetailsPage } from "@/pages/task-details";
import { GeneralLayout } from "@/layouts/general";

export const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<GeneralLayout />}>
        <Route path="/" element={<TaskListPage />} />
        <Route path="/task/:id" element={<TaskDetailsPage />} />
      </Route>
    </Routes>
  );
};
