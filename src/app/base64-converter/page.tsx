import { useState } from "react";
import { Page } from "../../components/page/Page";
import { Pane } from "../../components/pane/Pane";

export default function Base64Converter() {
  const [input, setInput] = useState("こんにちは");
  const [inversion, setInversion] = useState(false);

  const output = (() => {
    try {
      if (inversion) {
        return decodeURIComponent(atob(input));
      }
      return btoa(encodeURIComponent(input));
    } catch (error: any) {
      return error.toString();
    }
  })();

  return (
    <Page title="JSON Sorter">
      <Pane
        header={
          <>
            <p>このツールはBase64をエンコード/デコードする。</p>
          </>
        }
        input={input}
        output={output}
        onChange={(input) => setInput(input)}
        params={
          <>
            <div>
              <input
                type="checkbox"
                id="checkboxInversion"
                defaultChecked={inversion}
                onChange={(event) => setInversion(event.currentTarget.checked)}
              />
              <label htmlFor="checkboxInversion">逆変換する</label>
            </div>
          </>
        }
      />
    </Page>
  );
}
