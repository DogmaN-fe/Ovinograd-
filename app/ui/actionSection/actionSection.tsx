import { ReactElement } from "react";
import styles from "./actionSection.module.sass";
import BookingButton from "../bookingButton/bookingButton";
import Image from "next/image";

import photo_1 from "@/public/action/DSCF8435.jpg";
import photo_2 from "@/public/action/DSCF8438.jpg";
import photo_3 from "@/public/action/DSCF8447.jpg";
import photo_4 from "@/public/action/DSCF8450.jpg";

export default function ActionSection(): ReactElement {
  const photos = [photo_1.src, photo_2.src, photo_3.src, photo_4.src];

  return (
    <section id="action" className={styles.actionSection}>
      <div className={styles.actionSection__section}>
        <div className={styles.actionSection__section_info}>
          <h3 className={styles.actionSection__section_info__title}>Акция!</h3>
          <p className={styles.actionSection__section_info__description}>
            При бронировании апартаментов от <strong>5 суток</strong> скидка{" "}
            <strong>15%</strong>.
          </p>
          <BookingButton />
        </div>
        <div className={styles.actionSection__section_photos}>
          {photos.map((element, index) => {
            return (
              <div
                key={index}
                className={styles.actionSection__section_photos__photo}
              >
                <Image
                  className={styles.actionSection__section_photos__iamge}
                  src={element}
                  alt={`${index}`}
                  fill
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
