"use client";

import { ReactElement, useState } from "react";
import BookingButton from "../bookingButton/bookingButton";
import styles from "./roomsSection.module.sass";

import studioWithBalcony_1 from "@/public/photosRooms/studioWithBalcony/DSCF8170.jpg";
import studioWithBalcony_2 from "@/public/photosRooms/studioWithBalcony/DSCF8242.jpg";
import studioWithBalcony_3 from "@/public/photosRooms/studioWithBalcony/DSCF8263.jpg";
import studioWithBalcony_4 from "@/public/photosRooms/studioWithBalcony/DSCF8338.jpg";
import studioWithBalcony_5 from "@/public/photosRooms/studioWithBalcony/DSCF8347.jpg";
import studioWithBalcony_6 from "@/public/photosRooms/studioWithBalcony/DSCF8359.jpg";

import studio_1 from "@/public/photosRooms/studio/DSCF8114.jpg";
import studio_2 from "@/public/photosRooms/studio/DSCF8115.jpg";
import studio_3 from "@/public/photosRooms/studio/DSCF8118.jpg";
import studio_4 from "@/public/photosRooms/studio/DSCF8120.jpg";
import studio_5 from "@/public/photosRooms/studio/DSCF8124.jpg";
import studio_6 from "@/public/photosRooms/studio/DSCF8131.jpg";

import viewComfort_1 from "@/public/photosRooms/viewComfort/DSCF8392.jpg";
import viewComfort_2 from "@/public/photosRooms/viewComfort/DSCF8396.jpg";
import viewComfort_3 from "@/public/photosRooms/viewComfort/DSCF8398.jpg";
import viewComfort_4 from "@/public/photosRooms/viewComfort/DSCF8401.jpg";
import viewComfort_5 from "@/public/photosRooms/viewComfort/IMG_0371.jpg";
import viewComfort_6 from "@/public/photosRooms/viewComfort/IMG_0378.jpg";

import comfortWithBalcony_1 from "@/public/photosRooms/comfortWithBalcony/DSCF8196.jpg";
import comfortWithBalcony_2 from "@/public/photosRooms/comfortWithBalcony/DSCF8198.jpg";
import comfortWithBalcony_3 from "@/public/photosRooms/comfortWithBalcony/DSCF8203.jpg";
import comfortWithBalcony_4 from "@/public/photosRooms/comfortWithBalcony/DSCF8207.jpg";
import comfortWithBalcony_5 from "@/public/photosRooms/comfortWithBalcony/DSCF8213.jpg";
import comfortWithBalcony_6 from "@/public/photosRooms/comfortWithBalcony/DSCF8222.jpg";

import RoomCard from "./roomCard/roomCard";
import { IRoomCard } from "@/app/lib/types";

export default function RoomsSection(): ReactElement {
  const rooms: IRoomCard[] = [
    {
      roomName: "Студия с балконом",
      roomPhotos: [
        studioWithBalcony_1.src,
        studioWithBalcony_2.src,
        studioWithBalcony_3.src,
        studioWithBalcony_4.src,
        studioWithBalcony_5.src,
        studioWithBalcony_6.src,
      ],
    },
    {
      roomName: "Студия",
      roomPhotos: [
        studio_1.src,
        studio_2.src,
        studio_3.src,
        studio_4.src,
        studio_5.src,
        studio_6.src,
      ],
    },
    {
      roomName: "Видовой Комфорт",
      roomPhotos: [
        viewComfort_1.src,
        viewComfort_2.src,
        viewComfort_3.src,
        viewComfort_4.src,
        viewComfort_5.src,
        viewComfort_6.src,
      ],
    },
    {
      roomName: "Комфорт с Балконом",
      roomPhotos: [
        comfortWithBalcony_1.src,
        comfortWithBalcony_2.src,
        comfortWithBalcony_3.src,
        comfortWithBalcony_4.src,
        comfortWithBalcony_5.src,
        comfortWithBalcony_6.src,
      ],
    },
  ];

  const [currRoom, setCurrRoom] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  let startX: number | null = null;

  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (startX && e.changedTouches.length) {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      if (diff > 50) {
        nextRoom();
      } else if (diff < -50) {
        previousRoom();
      }
    }
    startX = null;
  };

  const nextRoom = () => {
    setAnimationClass(styles.slideOut);
    setTimeout(() => {
      if (currRoom === rooms.length - 1) {
        setCurrRoom(0);
      } else {
        setCurrRoom(currRoom + 1);
      }
      setAnimationClass(styles.slideIn);
    }, 300);
  };

  const previousRoom = () => {
    setAnimationClass(styles.slideOut);
    setTimeout(() => {
      if (currRoom === 0) {
        setCurrRoom(3);
      } else {
        setCurrRoom(currRoom - 1);
      }
      setAnimationClass(styles.slideIn);
    }, 300);
  };

  return (
    <section id="rooms" className={styles.roomsSection}>
      <div className={styles.roomsSection__section}>
        <div className={styles.roomsSection__section_title}>
          <h2 className={styles.roomsSection__section_title__text}>
            Номера отеля
          </h2>
        </div>
        <div
          className={`${styles.roomsSection__section_rooms} ${animationClass}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <RoomCard key={rooms[currRoom].roomName} room={rooms[currRoom]} />
        </div>
        <div className={styles.roomsSection__section_buttons}>
          <button
            className={styles.roomsSection__section_buttons__next}
            onClick={previousRoom}
          >
            {"←"}
          </button>
          <button
            className={styles.roomsSection__section_buttons__previous}
            onClick={nextRoom}
          >
            {"→"}
          </button>
          <BookingButton />
        </div>
      </div>
    </section>
  );
}
