import { useState } from "react";
import {
  CHARACTOR_TO_REFERENCE,
  transformHtmlNamedCharacterReferences,
} from "../functions";
import { Pane } from "../pane/Pane";

export function HtmlSpecialCharacterConverter() {
  const [htmlInput, setHtmlInput] = useState(`<p>Hello, World!</p>`);
  const [nbspEnabled, setNbspEnabled] = useState(false);
  const [inverted, setInverted] = useState(false);

  const htmlOutput = transformHtmlNamedCharacterReferences(
    htmlInput,
    nbspEnabled,
    inverted
  );

  return (
    <Pane
      header={
        <>
          <h1>HTML Special Character Converter</h1>
          <p>このツールは以下の通り文字列をHTMLの文字実体参照に変換する。</p>
          <ul>
            {Object.entries(CHARACTOR_TO_REFERENCE).map(([key, value]) => (
              <li key={key}>
                "{key}" → "{value}"
              </li>
            ))}
          </ul>
          <p>これ以外の文字列はHTMLの文字実体参照に変換されない。</p>
        </>
      }
      input={htmlInput}
      output={htmlOutput}
      onChange={(input) => setHtmlInput(input)}
      params={
        <div>
          <div>
            <input
              type="checkbox"
              id="checkboxNbspEnabled"
              defaultChecked={nbspEnabled}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setNbspEnabled(event.target.checked)
              }
            />
            <label htmlFor="checkboxNbspEnabled">
              スペースを<code>&amp;nbsp;</code>に変換する
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="checkboxInverted"
              defaultChecked={inverted}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setInverted(event.target.checked)
              }
            />
            <label htmlFor="checkboxInverted">逆変換する</label>
          </div>
        </div>
      }
    />
  );
}
