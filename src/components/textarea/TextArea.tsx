import styles from "./TextArea.module.css";

export type TextAreaProps = React.ComponentProps<"textarea">;

export function TextArea(props: TextAreaProps) {
  return <textarea className={styles.container} {...props} />;
}
