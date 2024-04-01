import { ReactElement } from "react";
import styles from "./mainInfoSection.module.sass";
import Image from "next/image";

import logo from "@/public/header/O-HOTEL_LOGO.svg";
import BookingButton from "../bookingButton/bookingButton";

export default function MainInfoSection(): ReactElement {
  return (
    <section className={styles.mainInfoSection}>
      <div className={styles.mainInfoSection__section}>
        <div className={styles.mainInfoSection__section_logo}>
          <Image
            className={styles.mainInfoSection__section_logo__image}
            src={logo}
            alt={"Логотип"}
            fill
          />
        </div>
        <div className={styles.mainInfoSection__section_description}>
          <p className={styles.mainInfoSection__section_description__text}>
            Апарт-отель с бассейном в центре Сочи
          </p>
          <p className={styles.mainInfoSection__section_description__text}>
            By «О! HotelGroupe»
          </p>
        </div>
        <BookingButton />
      </div>
    </section>
  );
}
