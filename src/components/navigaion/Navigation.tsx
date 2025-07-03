import { Link } from "react-router";
import styles from "./Navigation.module.css";
import { NavigationItem } from "./navigation-item";

export function Navigation(props: { items: NavigationItem[] }) {
  return (
    <nav>
      <ul className={styles.menu}>
        {props.items.map((item) => (
          <li key={item.text}>
            <Link to={item.to} className={styles.link}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
