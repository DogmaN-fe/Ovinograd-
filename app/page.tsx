import styles from "./page.module.css";
import MainInfoSection from "./ui/mainInfoSection/mainInfoSection";
import AboutHotelSection from "./ui/aboutHotelSection/aboutHotelSection";
import AdvantagesSection from "./ui/advantagesSection/advantagesSection";
import ActionSection from "./ui/actionSection/actionSection";
import RoomsSection from "./ui/roomsSection/roomsSection";
import NextUsSection from "./ui/nextUsSection/nextUsSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainInfoSection />
      <AboutHotelSection />
      <RoomsSection />
      <AdvantagesSection />
      <ActionSection />
      <NextUsSection />
    </main>
  );
}
