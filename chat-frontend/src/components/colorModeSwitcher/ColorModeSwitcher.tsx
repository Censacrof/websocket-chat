import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export interface ColorModeSwitcherProps {
  _useColorMode?: typeof useColorMode;
  _SunIcon?: typeof SunIcon;
  _MoonIcon?: typeof MoonIcon;
}

export const ColorModeSwitcher: FC<ColorModeSwitcherProps> = ({
  _useColorMode = useColorMode,
  _SunIcon = SunIcon,
  _MoonIcon = MoonIcon,
}) => {
  const { t } = useTranslation();
  const { colorMode, toggleColorMode } = _useColorMode();

  const label =
    colorMode === "light"
      ? t("ColorModeSwitcher.setDark")
      : t("ColorModeSwitcher.setLight");

  const Icon = colorMode === "light" ? _MoonIcon : _SunIcon;

  return (
    <IconButton aria-label={label} icon={<Icon />} onClick={toggleColorMode} />
  );
};
