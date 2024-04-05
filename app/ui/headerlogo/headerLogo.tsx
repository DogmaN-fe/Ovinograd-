import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./headerLogo.module.sass";

import headerLogo from "@/public/header/O-HOTEL_LOGO.svg";

export default function HeaderLogo(): ReactElement {
  return (
    <div className={styles.logo}>
      <Link className={styles.logo__link} href={"/"}>
        <Image
          className={styles.logo__link_image}
          src={headerLogo}
          alt={"Логотип"}
          fill={true}
          sizes="(max-width: 100%)"
          priority
        />
      </Link>
    </div>
  );
}
