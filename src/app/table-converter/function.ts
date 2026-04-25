export type TableType = "html" | "csv" | "tsv" | "markdown";

export interface TableConverterState {
  input: string;
  inputType: TableType | "auto";
  outputType: TableType;
}

function detectTableType(input: string): TableType {
  const parser = new DOMParser();
  const document = parser.parseFromString(input, "text/html");
  if (document.querySelector("td")) {
    return "html";
  }
  if (input.includes("|")) {
    return "markdown";
  }
  if (input.includes("\t")) {
    return "tsv";
  }
  return "csv";
}

class Table {
  constructor(public readonly data: string[][]) {}

  static createFrom(text: string, type: TableType | "auto") {
    text = text.trim();
    const detectedType: TableType = (() => {
      if (type === "auto") {
        return detectTableType(text);
      }
      return type;
    })();

    if (detectedType === "html") {
      const parser = new DOMParser();
      const document = parser.parseFromString(text, "text/html");
      const table = document.querySelector("table");
      if (!table) {
        throw new Error("Failed to parse table");
      }
      const data = Array.from(table.querySelectorAll("tr")).map((tr) => {
        return Array.from(tr.querySelectorAll("td")).map((td) => td.innerText);
      });
      return new Table(data);
    } else if (detectedType === "markdown") {
      // 1. 改行で分割する
      // 2. "|"で分割し、左右端は除く
      // 3. 1行目は除く
      const data = text
        .split("\n")
        .map((line) =>
          line
            .split("|")
            .slice(1, -1)
            .map((column) => column.trim()),
        )
        .filter((_, index) => index !== 1);
      return new Table(data);
    } else if (detectedType === "tsv") {
      const data = text.split("\n").map((line) => line.split("\t"));
      return new Table(data);
    }

    const data = text.split("\n").map((line) => line.split(","));
    return new Table(data);
  }

  toString(type: TableType) {
    if (type === "html") {
      return `<table>\n${this.data.map((row) => `  <tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("\n")}\n</table>`;
    } else if (type === "markdown") {
      const temp = [...this.data];
      temp.splice(
        1,
        0,
        Array.from({ length: this.columns }, () => "--"),
      );
      return temp.map((row) => `|${row.join("|")}|`).join("\n");
    } else if (type === "tsv") {
      return this.data.map((row) => row.join("\t")).join("\n");
    }
    return this.data.map((row) => row.join(",")).join("\n");
  }

  get rows(): number {
    return this.data.length;
  }

  get columns(): number {
    return this.data
      .map((d) => d.length)
      .reduce((accumulator, currentValue) =>
        accumulator < currentValue ? currentValue : accumulator,
      );
  }
}

export function convertTable(
  input: string,
  inputType: TableType | "auto",
  outputType: TableType,
) {
  const table = Table.createFrom(input, inputType);
  return table.toString(outputType);
}
