import { Link } from "react-router";
import { AppRoute } from "../../app-routes";
import styles from "./Navigation.module.css";

export function Navigation(props: { routes: AppRoute[] }) {
  return (
    <nav>
      <ul className={styles.menu}>
        {props.routes
          .filter((r) => r.path !== "/")
          .map((route) => (
            <li key={route.name}>
              <Link to={route.path} className={styles.link}>
                {route.name}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
