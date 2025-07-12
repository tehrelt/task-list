import { BrowserRouter } from "react-router-dom";
import { RoutesConfig } from "./app/routes-config";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

function App() {
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: {
          todo: "Todo",
          "in-progress": "In Progress",
          done: "Done",
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
