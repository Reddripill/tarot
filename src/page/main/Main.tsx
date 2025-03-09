import React from "react";
import Image from "next/image";
import styles from "./Main.module.scss";
import { MoveRight } from "lucide-react";
import CardsImage from "./cards-image/CardsImage";
import Link from "next/link";
import { links } from "@/constants/links";

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
                  <Link href={links.tgChannel}>
                     <button type="button" className={styles.button}>
                        <div className={styles["button-text"]}>Записаться</div>
                        <div className={styles["button-icon"]}>
                           <MoveRight />
                        </div>
                     </button>
                  </Link>
               </div>
               <CardsImage />
            </div>
         </div>
         <Image
            src="/mainBg.webp"
            alt="Cosmos Pic"
            fill
            priority
            className={styles["main-bg"]}
         />
         <div className={styles.overlay} />
      </div>
   );
};

export default Main;
