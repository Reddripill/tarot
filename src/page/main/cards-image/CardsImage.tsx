import React from "react";
import styles from "./CardsImage.module.scss";
import Image from "next/image";

const CardsImage = () => {
   return (
      <div className={styles.img}>
         <div className={styles["img-wrapper"]}>
            <Image
               src="/tarot-cards.png"
               width={480}
               height={350}
               alt="Tarot Cards"
            />
         </div>
         <div className={styles.gradient} />
      </div>
   );
};

export default CardsImage;
