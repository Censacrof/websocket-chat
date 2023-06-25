import { FC } from "react";
import { renderWithProviders, screen } from "../../test-utils";
import { Home } from "./Home";

const Sut: FC = (props) => <Home {...props} />;

describe("Home", () => {
  it("renders a title", async () => {
    renderWithProviders(<Sut />);

    expect(screen.getByText("Home.helloWorld")).toBeInTheDocument();
  });
});
