import { ReactElement } from "react";
import styles from "./page.module.sass";

export default function Page(): ReactElement {
  let address = `https://reservationsteps.ru/rooms/index/f7f1badd-4190-468a-b8b3-3ce623010934?colorSchemePreview=1`;

  return (
    <main className={styles.main}>
      <iframe className={styles.main_reservations} src={address} ></iframe>
    </main>
  );
}