import { Flex, Link, Text } from "@radix-ui/themes";
import { useTranslation } from "react-i18next";

export default function Blank() {
  const { t } = useTranslation();
  const version = import.meta.env.VERSION;
  const isTauri = "__TAURI_INTERNALS__" in window;

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
        <img src="icon.svg" alt={t("miscTools")} height="128" />
        <Text>
          {t("miscToolsVersionBy", { version })}
          <Link
            href="https://kkawahara.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("kkawaharanet")}
          </Link>
        </Text>
        {!isTauri && (
          <Link
            href="https://github.com/kkawaharanet/misc-tools/releases"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("getTheDesktopEdition")}
          </Link>
        )}
      </Flex>
    </>
  );
}
