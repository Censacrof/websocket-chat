import { ChakraProvider } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

export const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AllTheProviders>
      <App />
    </AllTheProviders>
  </React.StrictMode>
);
