import { ReactElement } from "react";
import styles from "./contacsSection.module.css";
import Link from "next/link";
import Image from "next/image";

import address from "@/public/map_locator_vjwun2hnpw3r.svg";
import phone from "@/public/telephone_4f8o74njmimn.svg";
import mail from "@/public/mail_qbewr5yvdo6s.svg";

export default function ContacsSection(): ReactElement {
  return (
    <section id="contacs" className={styles.contacs_section}>
      <div className={styles.contacs}>
        <h4 className={styles.contacs_title}>Наш адрес:</h4>
        <span className={styles.position}>
          <Image src={address} alt="иконка локатора" width={16} height={16} />
          <p className={styles.contacs_address}>
            г. Сочи, ул. Виноградная, д. 216А
          </p>
        </span>
        <span className={styles.position}>
          <Image src={mail} alt="иконка локатора" width={16} height={16} />
          <Link
            className={styles.contacs_mail}
            href="mailto:akvinograd@yandex.ru"
          >
            akvinograd@yandex.ru
          </Link>
        </span>
        <span className={styles.position}>
          <Image src={phone} alt="иконка локатора" width={16} height={16} />
          <Link className={styles.contacs_phone} href={"tel:89881533003"}>
            8 (988) 153-30-03
          </Link>
        </span>
      </div>
      <div className={styles.map}>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          <a
            href="https://yandex.ru/maps/org/o_vinograd/85372298123/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "0",
            }}
          >
            О, Виноград
          </a>
          <a
            href="https://yandex.ru/maps/239/sochi/category/hotel/184106414/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "14px",
            }}
          >
            Гостиница в Сочи
          </a>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=39.713940%2C43.632938&mode=poi&poi%5Bpoint%5D=39.714168%2C43.633070&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D85372298123&z=17.1"
            style={{ position: "relative", width: "100%", height: "100%" }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
