import Link from 'next/link';
import styles from './headerNavigation.module.sass'

export default function HeaderNavigation() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__links}>
        <li className={styles.navigation__links_link}>
          <Link href="/#about-hotel" className={styles.navigation__links_link_href}>Об отеле</Link>
        </li>
        <li className={styles.navigation__links_link}>
          <Link href="" className={styles.navigation__links_link_href}>Номера</Link>
        </li>
        <li className={styles.navigation__links_link}>
          <Link href="/#advantages" className={styles.navigation__links_link_href}>Преимущества</Link>
        </li>
        <li className={styles.navigation__links_link}>
          <Link href="" className={styles.navigation__links_link_href}>Акции</Link>
        </li>
        <li className={styles.navigation__links_link}>
          <Link href="" className={styles.navigation__links_link_href}>Что вокруг</Link>
        </li>
        <li className={styles.navigation__links_link}>
          <Link href="" className={styles.navigation__links_link_href}>Контакты</Link>
        </li>
      </ul>
      <span style={{ display: "none" }}></span>
    </nav>
  );
}
