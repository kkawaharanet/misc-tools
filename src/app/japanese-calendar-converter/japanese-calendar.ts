export const japaneseYearTypes = [
  "明治",
  "大正",
  "昭和",
  "平成",
  "令和",
] as const;
export type JapaneseYearType = (typeof japaneseYearTypes)[number];

export class JapaneseCalendarItem {
  public constructor(
    public readonly year: number,
    public readonly japaneseYearType: JapaneseYearType,
    public readonly japaneseYear: number,
  ) {}

  toJapaneseString(): string {
    if (this.japaneseYear == 1) {
      return `${this.japaneseYearType}元年`;
    }
    return `${this.japaneseYearType}${this.japaneseYear}年`;
  }
}

export const japaneseCalendar: JapaneseCalendarItem[] = (() => {
  const rows: JapaneseCalendarItem[] = [];
  for (let i = 1868; i <= 1912; i++) {
    rows.push(new JapaneseCalendarItem(i, "明治", i - 1867));
  }
  for (let i = 1912; i <= 1926; i++) {
    rows.push(new JapaneseCalendarItem(i, "大正", i - 1911));
  }
  for (let i = 1926; i <= 1989; i++) {
    rows.push(new JapaneseCalendarItem(i, "昭和", i - 1925));
  }
  for (let i = 1989; i <= 2019; i++) {
    rows.push(new JapaneseCalendarItem(i, "平成", i - 1988));
  }
  for (let i = 2019; i <= 2050; i++) {
    rows.push(new JapaneseCalendarItem(i, "令和", i - 2018));
  }
  return rows;
})();
