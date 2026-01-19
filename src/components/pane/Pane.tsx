import React from "react";
import { TextArea } from "../textarea/TextArea";
import styles from "./Pane.module.css";

export function Pane(props: {
  header: React.ReactNode;
  input: string;
  output: string;
  onChange: (input: string) => void;
  params?: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>{props.header}</div>
      <div className={styles.content}>
        <TextArea
          onFocus={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            event.target.select()
          }
          onInput={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            props.onChange(event.target.value)
          }
          defaultValue={props.input}
        />
        <TextArea
          value={props.output}
          onFocus={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            event.target.select()
          }
          readOnly
        />
      </div>
      {props.params && props.params}
    </div>
  );
}
