import { ReactElement } from "react";
import styles from "./advantagesSection.module.sass";
import Image from "next/image";

import beach from "@/public/advantagesIcons/beach_1jtf8svrdgz7.svg";
import skyscraper from "@/public/advantagesIcons/skyscrapper_ren3cgdssnhe.svg";
import balcony from "@/public/advantagesIcons/balcony_tyxikh9rep1w.svg";
import kitchen from "@/public/advantagesIcons/kitchen_w1byc7r8vt54.svg";
import swimming_pool from "@/public/advantagesIcons/swimming_pool_rpqe2m6cwx0t.svg";
import safari from "@/public/advantagesIcons/safari_iurmk0l1gfz6.svg";

export default function AdvantagesSection(): ReactElement {

  return (
    <section id="advantages" className={styles.advantagesSection}>
      <article className={styles.advantagesSection__section}>
        <p className={styles.advantagesSection__section_title}>Преимущества</p>
        <ul className={styles.advantagesSection__section_list}>
          <li className={styles.advantagesSection__section_list__element}>
            <Image className={styles.advantagesSection__section_list__element_image} src={beach} alt={"иконка: пляж"} width={50} height={50}/>7 мин на машине до пляжа
          </li>
          <li className={styles.advantagesSection__section_list__element}>
            <Image className={styles.advantagesSection__section_list__element_image} src={skyscraper} alt={"иконка: центр города"} width={50} height={50}/>
            Центральный район Сочи
          </li>
          <li className={styles.advantagesSection__section_list__element}>
            <Image className={styles.advantagesSection__section_list__element_image} src={balcony} alt={"иконка: аппартаменты с балконом"} width={50} height={50}/>
            Апартаменты с балконом
          </li>
          <li className={styles.advantagesSection__section_list__element}>
            <Image className={styles.advantagesSection__section_list__element_image} src={kitchen} alt={"иконка: кухня"} width={50} height={50}/>
            Собственная полностью оборудованная кухня
          </li>
          <li className={styles.advantagesSection__section_list__element}>
            <Image className={styles.advantagesSection__section_list__element_image} src={swimming_pool} alt={"иконка: бассейн"} width={50} height={50}/>
            Подогреваемый бассейн под открытым небом
          </li>
          <li className={styles.advantagesSection__section_list__element}>
            <Image className={styles.advantagesSection__section_list__element_image} src={safari} alt={"иконка: туры"} width={50} height={50}/>
            Эксклюзивные экскурсии и туры
          </li>
        </ul>
      </article>
    </section>
  );
}
