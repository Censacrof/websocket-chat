import { FC } from "react";
import { App, AppProps } from "./App";
import { renderWithProviders, screen } from "./test-utils";

const Sut: FC<AppProps> = (props) => <App {...props} />;

describe("App", () => {
  it("Renders the home", async () => {
    renderWithProviders(<Sut _Home={() => <>a home</>} />);

    expect(screen.getByText("a home")).toBeInTheDocument();
  });
});
