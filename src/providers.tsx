import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { theme } from "./theme";

export const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </ReduxProvider>
  );
};
