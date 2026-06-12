import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Flex, Table } from "@radix-ui/themes";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SearchInput } from "../../components/search-input/SearchInput";
import { japaneseCalendar } from "./japanese-calendar";
import styles from "./page.module.css";

export default function JapaneseCalendarConverter() {
  const { t } = useTranslation();
  const [japaneseYearFilter, setJapaneseYearFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const filteredJapaneseCalendar = japaneseCalendar
    .filter(
      (item) =>
        japaneseCalendar.length <= 0 ||
        item.toJapaneseString().includes(japaneseYearFilter),
    )
    .filter(
      (item) =>
        yearFilter.length <= 0 || item.year.toString().includes(yearFilter),
    );

  return (
    <>
      <title>{t("japaneseCalendarConverter")}</title>
      <p className={styles.header}>
        {t("japaneseCalendarConverterDescription")}
      </p>
      <Flex direction="column" gap="3" p="3">
        <Table.Root layout="fixed">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>
                {t("japaneseYearNumber")}
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                {t("japaneseYear")}
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                {t("japaneseCalendar")}
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                {t("westernCalender")}
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>
                <SearchInput
                  value={japaneseYearFilter}
                  onChange={setJapaneseYearFilter}
                  onClear={() => setJapaneseYearFilter("")}
                  icon={<MagnifyingGlassIcon />}
                  placeholder={t("japaneseCalendar")}
                />
              </Table.Cell>
              <Table.Cell>
                <SearchInput
                  value={yearFilter}
                  onChange={setYearFilter}
                  onClear={() => setYearFilter("")}
                  icon={<MagnifyingGlassIcon />}
                  placeholder={t("japaneseYear")}
                />
              </Table.Cell>
            </Table.Row>
            {filteredJapaneseCalendar.map((item) => (
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
