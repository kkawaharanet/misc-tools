import React from "react";
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
      {props.header}
      <div className={styles.content}>
        <textarea
          onFocus={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            event.target.select()
          }
          onInput={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            props.onChange(event.target.value)
          }
          defaultValue={props.input}
          className={styles.textarea}
        />
        <textarea
          value={props.output}
          onFocus={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            event.target.select()
          }
          className={styles.textarea}
          readOnly
        />
      </div>
      {props.params && props.params}
    </div>
  );
}
