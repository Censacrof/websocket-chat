import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./init-i18n.ts";
import { AllTheProviders } from "./providers.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AllTheProviders>
      <App />
    </AllTheProviders>
  </React.StrictMode>
);
