import React from "react";
import styles from "./CardsImage.module.scss";
import Image from "next/image";

const CardsImage = () => {
   return (
      <div className={styles.img}>
         <div className={styles["img-wrapper"]}>
            <Image
               src="/tarot-cards.webp"
               width={480}
               height={350}
               alt="Карты Таро по которым определяют судьбу"
            />
         </div>
         <div className={styles.gradient} />
      </div>
   );
};

export default CardsImage;
