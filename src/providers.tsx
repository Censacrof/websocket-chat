import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

export const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
