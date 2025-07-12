import { BrowserRouter } from "react-router-dom";
import { RoutesConfig } from "./app/routes-config";
import { TaskProvider } from "./store/tasks";

function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <RoutesConfig />
      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;
