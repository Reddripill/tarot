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
                     жизненном пути. Откройте тайны судьбы с помощью карт Таро!
                     Точные расклады и глубокий анализ помогут вам найти ответы
                     на важные вопросы, разобраться в чувствах и принять верные
                     решения.
                  </h4>
                  <Link href={links.tgChannel}>
                     <div className={styles.button}>
                        <div className={styles["button-text"]}>Записаться</div>
                        <div className={styles["button-icon"]}>
                           <MoveRight />
                        </div>
                     </div>
                  </Link>
               </div>
               <CardsImage />
            </div>
         </div>
         <Image
            src="/mainBg.webp"
            alt="Упорядочное расположение звезд на небосводе"
            fill
            priority
            className={styles["main-bg"]}
         />
         <div className={styles.overlay} />
      </div>
   );
};

export default Main;
