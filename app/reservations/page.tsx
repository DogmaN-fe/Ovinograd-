import { ReactElement } from "react";
import styles from "./page.module.sass";

export default function Page(): ReactElement {
  let address = `https://reservationsteps.ru/rooms/index/79785b1e-e05b-4e3d-9c17-1b2b2be0eed5`;

  return (
    <main className={styles.main}>
      <iframe className={styles.main_reservations} src={address} ></iframe>
    </main>
  );
}