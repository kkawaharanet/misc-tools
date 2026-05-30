import { Flex, Table } from "@radix-ui/themes";
import { useTranslation } from "react-i18next";
import { japaneseCalendar } from "./japanese-calendar";
import styles from "./page.module.css";

export default function JapaneseCalendarConverter() {
  const { t } = useTranslation();

  return (
    <>
      <title>{t("japaneseCalendarConverter")}</title>
      <p className={styles.header}>
        {t("japaneseCalendarConverterDescription")}
      </p>
      <Flex direction="column" gap="3" p="3">
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>年号</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>年(和暦)</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>和暦</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>年(西暦)</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {japaneseCalendar.map((item) => (
              <Table.Row key={item.toJapaneseString()}>
                <Table.Cell>{item.japaneseYearType}</Table.Cell>
                <Table.Cell>{item.japaneseYear}</Table.Cell>
                <Table.Cell>{item.toJapaneseString()}</Table.Cell>
                <Table.Cell>{item.year}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Flex>
    </>
  );
}
