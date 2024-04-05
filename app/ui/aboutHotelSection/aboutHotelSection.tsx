import { ReactElement } from "react";
import styles from "./aboutHotelSection.module.sass";
import Image from "next/image";

import image from "@/public/about-hotel.jpg";
import BookingButton from "../bookingButton/bookingButton";

export default function AboutHotelSection(): ReactElement {
  return (
    <section id="about-hotel" className={styles.aboutHotelSection}>
      <article className={styles.aboutHotelSection__section}>
        <div className={styles.aboutHotelSection__section_info}>
          <h1 className={styles.aboutHotelSection__section_info__title}>
            Апарт-отель “О, Виноград”
          </h1>
          <p className={styles.aboutHotelSection__section_info__description}>
            Апарт-отель “О, Виноград” - идеальное место для незабываемого отдыха
            в самом сердце Сочи! Расположенный в живописном уголке курорта, наш
            апарт-отель предлагает своим гостям окунуться в атмосферу уюта и
            комфорта.
            <br />
            Насладитесь отдыхом в одном из наших просторных семейных
            апартаментов, выполненных в уникальном дизайнерском стиле,
            посвященном различным странам мира - России, Китаю, Венеции и
            Франции
          </p>
          <BookingButton />
        </div>
        <div className={styles.aboutHotelSection__section_image}>
          <Image
            src={image}
            alt={"Фото отеля"}
            fill
            sizes="(max-width: 100%)"
            priority
          />
        </div>
      </article>
    </section>
  );
}
