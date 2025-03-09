import React from "react";
import styles from "./About.module.scss";
import Image from "next/image";
import cn from "classnames";

const About = () => {
   return (
      <section className={cn(styles.wrapper, "section")}>
         <div className="container">
            <h2 className={cn(styles.title, "title")}>Обо мне</h2>
            <div className={styles.content}>
               <div className={cn(styles.person, styles["mobile-person"])}>
                  <h2 className={styles.name}>Елена</h2>
                  <h3 className={styles.prof}>
                     Практикующий таролог и энергопрактик.
                  </h3>
               </div>
               <div className={styles.image}>
                  <div className={styles["image-wrapper"]}>
                     <Image
                        src="/person.webp"
                        alt="Elena's Phot"
                        fill
                        style={{ objectFit: "cover" }}
                     />
                     <div className={styles.gradient}></div>
                  </div>
               </div>
               <div className={styles.info}>
                  <div className={styles["info-content"]}>
                     <div
                        className={cn(styles.person, styles["desktop-person"])}
                     >
                        <h2 className={styles.name}>Елена</h2>
                        <h3 className={styles.prof}>
                           Практикующий таролог и энергопрактик.
                        </h3>
                     </div>
                     <h3 className={styles.text}>
                        Буду рада помочь вам разобраться в сложных жизненных
                        ситуациях, найти ответы на важные вопросы и раскрыть ваш
                        истинный потенциал.
                     </h3>
                  </div>
                  <div className={styles.decoration}>
                     <div className={styles["decoration-wrapper"]}>
                        <Image
                           src="/tarot-circle.webp"
                           width={280}
                           height={280}
                           alt="Картинка зодиального круга"
                        />
                        <div className={styles["small-gradient"]}></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
