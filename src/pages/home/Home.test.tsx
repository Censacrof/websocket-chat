import { FC } from "react";
import { renderWithProviders, screen } from "../../test-utils";
import { Home, HomeProps } from "./Home";

const Sut: FC<Partial<HomeProps>> = (props) => <Home {...props} />;

describe("Home", () => {
  it("renders a title", async () => {
    renderWithProviders(<Sut />);

    expect(screen.getByText("Home.helloWorld")).toBeInTheDocument();
  });

  it("renders a color mode switcher", async () => {
    renderWithProviders(
      <Sut _ColorModeSwitcher={() => <>a color mode switcher</>} />
    );

    expect(screen.getByText("a color mode switcher")).toBeInTheDocument();
  });

  it("renders a chat", async () => {
    renderWithProviders(<Sut _Chat={() => <>a chat</>} />);

    expect(screen.getByText("a chat"));
  });
});
