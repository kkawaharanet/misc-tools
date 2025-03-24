import { useState } from "react";
import { removeHtmlAttributes } from "../functions";

export function RemoveHtmlAttributes() {
  const [htmlInput, setHtmlInput] = useState(
    `<div class="content"><p class="example">Hello, World!</p></div>`
  );

  const output = removeHtmlAttributes(htmlInput);

  return (
    <div className="flex-column gap-8">
      <div>
        <h1>Remove HTML Attributes</h1>
        <p>このツールはHTMLの属性を削除する。</p>
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
