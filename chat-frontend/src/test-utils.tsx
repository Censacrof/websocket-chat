import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReactElement } from "react";
import { AllTheProviders } from "./providers";

export const renderWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => ({
  container: render(ui, { wrapper: AllTheProviders, ...options }),
  user: userEvent.setup(),
});

export * from "@testing-library/react";
