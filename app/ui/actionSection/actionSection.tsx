import { ReactElement } from "react";
import styles from "./actionSection.module.sass";
import BookingButton from "../bookingButton/bookingButton";

export default function ActionSection(): ReactElement {
  return (
    <section id="action" className={styles.actionSection}>
      <div className={styles.actionSection__section}>
        <h3 className={styles.actionSection__section_title}>Акция!</h3>
        <p className={styles.actionSection__section_description}>
          При бронировании апартаментов от <strong>5 суток</strong> скидка <strong>15%</strong>.
        </p>
        <BookingButton />
      </div>
    </section>
  );
}
