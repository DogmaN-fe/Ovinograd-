import { ReactElement } from "react";
import Link from "next/link";

import styles from './not-found.module.sass'

export default function NotFound(): ReactElement {

    return (
        <div className={styles.not_found}>
          Страница не найдена. <Link href={'/'} className={styles.not_found__link_back}>Вернуться на главную</Link>
        </div>
      );
}