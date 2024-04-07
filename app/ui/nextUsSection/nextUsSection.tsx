import { IPlace } from "@/app/lib/types";
import Link from "next/link";
import { ReactElement } from "react";
import Image from "next/image";
import styles from "./nextUsSection.module.sass";

import rusalka from "@/public/places/rusalka.jpg";
import stavropol from "@/public/places/stavropol.jpg";
import riviera from "@/public/places/riviera.jpg";
import vokzal from "@/public/places/vokzal.jpg";

export default function NextUsSection(): ReactElement {
  const locations: IPlace[] = [
    {
      namePlace: "Пляж Русалочка 2,5 км",
      linkPlace: "https://yandex.ru/maps/-/CDRsn0l~",
      imagePlace: rusalka.src,
    },
    {
      namePlace: "Пляж Ставрополье 2,4 км",
      linkPlace: "https://yandex.ru/maps/-/CDRsnD1Y",
      imagePlace: stavropol.src,
    },
    {
      namePlace: "Парк Ривьера 2,3 км",
      linkPlace: "https://yandex.ru/maps/-/CDuDFRZU",
      imagePlace: riviera.src,
    },
    {
      namePlace: "Железнодорожный вокзал Сочи 4,6 км",
      linkPlace: "https://yandex.ru/maps/-/CDFZU-pO",
      imagePlace: vokzal.src,
    },
  ];

  return (
    <section id="next-us" className={styles.nextUsSection}>
      <div className={styles.nextUsSection__section}>
        <div className={styles.nextUsSection__section_title}>
          <h4 className={styles.nextUsSection__section_title__text}>
            Рядом с нами
          </h4>
        </div>
        <div className={styles.nextUsSection__section_places}>
          {locations.map((element, index) => {
            return (
              <article
                key={`place-${index}`}
                className={styles.nextUsSection__section_places__place}
              >
                <Link
                  href={element.linkPlace}
                  target="_blank"
                  className={styles.nextUsSection__section_places__place_link}
                >
                  <p
                    className={
                      styles.nextUsSection__section_places__place_title
                    }
                  >
                    {element.namePlace}
                  </p>
                  <div
                    className={
                      styles.nextUsSection__section_places__place_position
                    }
                  >
                    <Image
                      className={
                        styles.nextUsSection__section_places__place_image
                      }
                      src={element.imagePlace}
                      alt={element.namePlace}
                      fill
                      priority
                    />
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
