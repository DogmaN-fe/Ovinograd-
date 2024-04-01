import styles from "./page.module.css";
import MainInfoSection from "./ui/mainInfoSection/mainInfoSection";
import AboutHotelSection from "./ui/aboutHotelSection/aboutHotelSection";
import AdvantagesSection from "./ui/advantagesSection/advantagesSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainInfoSection />
      <AboutHotelSection />
      <AdvantagesSection />
    </main>
  );
}
