import { BrowserRouter } from "react-router-dom";
import { RoutesConfig } from "./app/routes-config";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

function App() {
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: {
          todo: "To-Do",
          "in-progress": "In Progress",
          done: "Done",
          low: "Low",
          medium: "Medium",
          high: "High",
          bug: "Bug",
          feature: "Feature",
          documentation: "Documentation",
          refactor: "Refactor",
          test: "Test",
        },
      },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

  return (
    <BrowserRouter>
      <RoutesConfig />
    </BrowserRouter>
  );
}

export default App;
