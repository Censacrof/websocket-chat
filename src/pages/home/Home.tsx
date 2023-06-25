import { Box, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Heading>{t("Home.helloWorld")}</Heading>
    </Box>
  );
};
