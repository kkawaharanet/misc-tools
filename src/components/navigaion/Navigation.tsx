import { Link, useLocation } from "react-router";
import { AppRoute } from "../../app-routes";
import styles from "./Navigation.module.css";

export function Navigation(props: { routes: AppRoute[] }) {
  const location = useLocation();
  return (
    <nav className={styles.container}>
      <ul className={styles.menu}>
        {props.routes
          .filter((r) => r.path !== "/")
          .map((route) => (
            <li key={route.name}>
              {route.path !== location.pathname ? (
                <Link to={route.path} className={styles.link}>
                  {route.name}
                </Link>
              ) : (
                <span className={styles.current}>{route.name}</span>
              )}
            </li>
          ))}
      </ul>
    </nav>
  );
}
