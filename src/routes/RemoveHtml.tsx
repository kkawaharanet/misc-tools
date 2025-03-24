import { useState } from "react";
import { removeHtml } from "../functions";

export function RemoveHtml() {
  const [htmlInput, setHtmlInput] = useState(`<p>Hello, World!</p>`);

  const output = removeHtml(htmlInput);

  return (
    <div className="flex-column gap-8">
      <div>
        <h1>Remove HTML</h1>
        <p>このツールはHTMLを削除する。</p>
      </div>
      <div className="grid-2 gap-8">
        <textarea
          onFocus={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            event.target.select()
          }
          onInput={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setHtmlInput(event.target.value)
          }
          defaultValue={htmlInput}
          rows={20}
        />
        <textarea
          value={output}
          onFocus={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            event.target.select()
          }
          rows={20}
          readOnly
        />
      </div>
    </div>
  );
}
