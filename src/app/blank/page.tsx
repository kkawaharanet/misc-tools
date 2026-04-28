import { Flex, Link, Text } from "@radix-ui/themes";
import { useTranslation } from "react-i18next";

export default function Blank() {
  const { t } = useTranslation();
  const version = import.meta.env.VERSION;
  return (
    <>
      <title>{t("blank")}</title>
      <Flex
        direction="column"
        align="center"
        justify="center"
        height="100%"
        gap="3"
        p="3"
      >
        <Text size="8">{t("miscToolsVersion", { version })}</Text>
        <Link href="https://kkawahara.net">{t("kkawaharanet")}</Link>
      </Flex>
    </>
  );
}
