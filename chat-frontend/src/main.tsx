import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { App } from "./App.tsx";
import "./init-i18n.ts";
import i18n from "./init-i18n.ts";
import { AllTheProviders } from "./providers.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <AllTheProviders>
        <App />
      </AllTheProviders>
    </I18nextProvider>
  </React.StrictMode>
);
