import { ReactElement } from "react";
import Image from "next/image";
import styles from "./roomCard.module.sass";
import { IRoomCard } from "@/app/lib/types";

export default function RoomCard({ room }: { room: IRoomCard }): ReactElement {
  return (
    <article className={styles.RoomCard__card}>
      <div className={styles.RoomCard__card__title}>
        <p className={styles.RoomCard__card__title_text}>{room.roomName}</p>
      </div>
      <div className={styles.RoomCard__card__photos}>
        {room.roomPhotos.map((photo) => {
          return (
            <div key={photo} className={styles.RoomCard__card__photos_photo}>
              <Image
                src={photo}
                alt={"Фото номера"}
                fill
                sizes="(max-width: 100%)"
                priority
              />
            </div>
          );
        })}
      </div>
    </article>
  );
}
