import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./init-i18n";
import { theme } from "./theme";

export const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </I18nextProvider>
  );
};
