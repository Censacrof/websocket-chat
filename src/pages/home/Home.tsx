import { Container, Flex, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { ColorModeSwitcher } from "../../components/colorModeSwitcher/ColorModeSwitcher";

export interface HomeProps {
  _ColorModeSwitcher?: typeof ColorModeSwitcher;
}

export const Home: FC<HomeProps> = ({
  _ColorModeSwitcher = ColorModeSwitcher,
}) => {
  const { t } = useTranslation();

  return (
    <Container paddingY={4}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading>{t("Home.helloWorld")}</Heading>
        <_ColorModeSwitcher />
      </Flex>
    </Container>
  );
};
