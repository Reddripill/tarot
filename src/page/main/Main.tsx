import React from "react";
import Image from "next/image";
import styles from "./Main.module.scss";
import { MoveRight } from "lucide-react";
import CardsImage from "./cards-image/CardsImage";

const Main = () => {
   return (
      <div className={styles.wrapper}>
         <div className="container">
            <div className={styles.content}>
               <div className={styles.info}>
                  <h2 className={styles.title}>
                     Раскройте тайны будущего и найдите ответы на важные вопросы
                  </h2>
                  <h4 className={styles.text}>
                     Таро – инструмент диагностики и путеводитель на вашем
                     жизненном пути.
                  </h4>
                  <button type="button" className={styles.button}>
                     <div className={styles["button-text"]}>Записаться</div>
                     <div className={styles["button-icon"]}>
                        <MoveRight />
                     </div>
                  </button>
               </div>
               <CardsImage />
            </div>
         </div>
         <Image
            src="/mainBg.jpg"
            alt="Cosmos Pic"
            fill
            priority
            style={{ objectFit: "cover" }}
         />
         <div className={styles.overlay} />
      </div>
   );
};

export default Main;
