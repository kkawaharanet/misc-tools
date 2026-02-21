import { useState } from "react";
import { Page } from "../../components/page/Page";
import { Pane } from "../../components/pane/Pane";
import { textSorted } from "./function";

export default function Sorter() {
  const [input, setTextInput] = useState("bbb\nccc\naaa\n");
  const [desc, setDesc] = useState(false);

  const output = textSorted(input, desc);

  return (
    <Page title="Sorter">
      <Pane
        header={<p>このツールは文字列をソートする。</p>}
        input={input}
        output={output}
        onChange={(input) => setTextInput(input)}
        params={
          <div>
            <input
              type="checkbox"
              id="checkboxDesc"
              defaultChecked={desc}
              onChange={(event) => setDesc(event.currentTarget.checked)}
            />
            <label htmlFor="checkboxDesc">降順にする</label>
          </div>
        }
      />
    </Page>
  );
}
