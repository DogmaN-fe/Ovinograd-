"use client";

import Link from "next/link";
import styles from "./headerNavigation.module.sass";
import { useState } from "react";

export default function HeaderNavigation() {
  const [isHidden, setIsHidden] = useState(true);

  const openMenu = () => {
    setIsHidden(!isHidden);
  };

  const handleClick = (e: any) => {
    const targetId = e.target.getAttribute("href").substring(2);

    if (window.location.href.includes("/reservations")) {
      window.location.href = `/#${targetId}`;
    }

    setIsHidden(true);
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__links}>
        <li className={styles.navigation__links_link}>
          <Link
            href="/#about-hotel"
            className={styles.navigation__links_link_href}
            onClick={handleClick}
          >
            Об отеле
          </Link>
        </li>
        <li className={styles.navigation__links_link}>
          <Link
            href="/#rooms"
            className={styles.navigation__links_link_href}
            onClick={handleClick}
          >
            Номера
          </Link>
        </li>
        <li className={styles.navigation__links_link}>
          <Link
            href="/#advantages"
            className={styles.navigation__links_link_href}
            onClick={handleClick}
          >
            Преимущества
          </Link>
        </li>
        <li className={styles.navigation__links_link}>
          <Link
            href="/#action"
            className={styles.navigation__links_link_href}
            onClick={handleClick}
          >
            Акции
          </Link>
        </li>
        <li className={styles.navigation__links_link}>
          <Link
            href="/#next-us"
            className={styles.navigation__links_link_href}
            onClick={handleClick}
          >
            Что вокруг
          </Link>
        </li>
        <li className={styles.navigation__links_link}>
          <Link
            href="/#contacs"
            className={styles.navigation__links_link_href}
            onClick={handleClick}
          >
            Контакты
          </Link>
        </li>
      </ul>
      <span className={styles.navigation_mobile} style={{ display: "none" }}>
        <button className={styles.navigation_mobile__button} onClick={openMenu}>
          ☰
        </button>
        <ul
          className={styles.navigation_mobile__links}
          style={{ display: isHidden ? "none" : "block" }}
        >
          <li className={styles.navigation__links_link}>
            <Link
              href="/#about-hotel"
              className={styles.navigation__links_link_href}
              onClick={handleClick}
            >
              Об отеле
            </Link>
          </li>
          <li className={styles.navigation__links_link}>
            <Link
              href="/#rooms"
              className={styles.navigation__links_link_href}
              onClick={handleClick}
            >
              Номера
            </Link>
          </li>
          <li className={styles.navigation__links_link}>
            <Link
              href="/#advantages"
              className={styles.navigation__links_link_href}
              onClick={handleClick}
            >
              Преимущества
            </Link>
          </li>
          <li className={styles.navigation__links_link}>
            <Link
              href="/#action"
              className={styles.navigation__links_link_href}
              onClick={handleClick}
            >
              Акции
            </Link>
          </li>
          <li className={styles.navigation__links_link}>
            <Link
              href="/#next-us"
              className={styles.navigation__links_link_href}
              onClick={handleClick}
            >
              Что вокруг
            </Link>
          </li>
          <li className={styles.navigation__links_link}>
            <Link
              href="/#contacs"
              className={styles.navigation__links_link_href}
              onClick={handleClick}
            >
              Контакты
            </Link>
          </li>
        </ul>
      </span>
    </nav>
  );
}
