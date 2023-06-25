import { ColorMode } from "@chakra-ui/react";
import { screen } from "@testing-library/react";
import { FC } from "react";
import { vi } from "vitest";
import { renderWithProviders } from "../../test-utils";
import { ColorModeSwitcher, ColorModeSwitcherProps } from "./ColorModeSwitcher";

const Sut: FC<Partial<ColorModeSwitcherProps>> = (props) => (
  <ColorModeSwitcher {...props} />
);

describe("ColorModeSwitcher", () => {
  it.each`
    colorMode  | label                           | whichIcon
    ${"light"} | ${"ColorModeSwitcher.setDark"}  | ${"moon icon"}
    ${"dark"}  | ${"ColorModeSwitcher.setLight"} | ${"sun icon"}
  `(
    "renders a button based on color mode",
    async ({
      colorMode,
      label,
      whichIcon,
    }: {
      colorMode: ColorMode;
      label: string;
      whichIcon: "moon icon" | "sun icon";
    }) => {
      const MoonIcon = () => <>{"moon icon"}</>;
      const SunIcon = () => <>{"sun icon"}</>;

      renderWithProviders(
        <Sut
          _useColorMode={() => ({
            colorMode,
            toggleColorMode: vi.fn(),
            setColorMode: vi.fn(),
          })}
          _MoonIcon={MoonIcon}
          _SunIcon={SunIcon}
        />
      );

      expect(screen.getByRole("button", { name: label })).toBeInTheDocument();
      expect(screen.getByText(whichIcon)).toBeInTheDocument();
    }
  );

  it.each`
    colorMode
    ${"light"}
    ${"dark"}
  `(
    "toggles color mode on click when it's currently $colorMode",
    async ({ colorMode }: { colorMode: ColorMode }) => {
      const toggleColorMode = vi.fn();

      const { user } = renderWithProviders(
        <Sut
          _useColorMode={() => ({
            colorMode,
            toggleColorMode,
            setColorMode: vi.fn(),
          })}
        />
      );

      expect(toggleColorMode).toHaveBeenCalledTimes(0);
      await user.click(screen.getByRole("button"));
      expect(toggleColorMode).toHaveBeenCalledTimes(1);
    }
  );
});
