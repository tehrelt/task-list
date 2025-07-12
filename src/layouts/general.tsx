import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { Outlet } from "react-router-dom";

export const GeneralLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 gap-4">
      <Header className="" />
      <div className="w-full flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
