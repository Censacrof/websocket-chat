import { Container, Flex, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Chat } from "../../components/chat/Chat";
import { ColorModeSwitcher } from "../../components/colorModeSwitcher/ColorModeSwitcher";

export interface HomeProps {
  _ColorModeSwitcher?: typeof ColorModeSwitcher;
  _Chat?: typeof Chat;
}

export const Home: FC<HomeProps> = ({
  _ColorModeSwitcher = ColorModeSwitcher,
  _Chat = Chat,
}) => {
  const { t } = useTranslation();

  return (
    <Container paddingY={4}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading>{t("Home.helloWorld")}</Heading>
        <_ColorModeSwitcher />
      </Flex>
      <_Chat />
    </Container>
  );
};
