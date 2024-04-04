import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.sass";
import HeaderLogo from "./ui/headerlogo/headerLogo";
import HeaderNavigation from "./ui/headerNavigation/headerNavigation";
import { roboto } from "./lib/fonts";
import ContacsSection from "./ui/contacsSection/contacsSection";

export const metadata: Metadata = {
  title: "О, Вингорад | Апарт-отель",
  description:
    "Апарт-отель “О, Виноград” - идеальное место для незабываемого отдыха в самом сердце Сочи! ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${styles.body} ${roboto.className}`}>
        <header className={styles.header}>
          <HeaderLogo />
          <HeaderNavigation />
        </header>
        {children}
        <footer className={styles.footer}>
          <ContacsSection />
          <div className={styles.footer_copyright_and_yaer}>
            <p className={styles.footer_copyright}>©Апарт-отель “О, Виноград”</p>
            <p className={styles.footer_year}>2024, Официальный сайт</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
