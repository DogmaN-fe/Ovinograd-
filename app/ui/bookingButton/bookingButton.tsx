import { ReactElement } from "react";
import styles from "./bookingButton.module.sass";
import Link from "next/link";

export default function BookingButton(): ReactElement {
  return (
    <Link href="/reservations">
      <button className={`${styles.booking_button}`}>забронировать</button>
    </Link>
  );
}
