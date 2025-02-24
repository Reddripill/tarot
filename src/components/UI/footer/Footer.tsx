import React from "react";
import styles from "./Footer.module.scss";
import Button from "../button/Button";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className="container">
            <div className={styles.info}>
               <div className={styles.subtitle}>
                  Откройте двери в новое будущее с картами Таро
               </div>
               <h2 className={styles.title}>
                  Получите глубокий разбор вашей ситуации
               </h2>
               <h5 className={styles.text}>
                  Lift Media, LLC is a clinical stage healthcare company which
                  is developing a unique.
               </h5>
               <div className={styles.button}>
                  <Button isLarge={true}>Записаться на расклад</Button>
               </div>
               <h5 className={styles.brand}>Designed by TechGen Inc.</h5>
            </div>
            <div className={styles.refs}>
               <Link href="/" className={styles.logo}>
                  Tarot
               </Link>
               <nav className={styles.nav}>
                  <ul className={styles.menu}>
                     <li className={styles["menu-item"]}>Главная</li>
                     <li className={styles["menu-item"]}>Услуги</li>
                     <li className={styles["menu-item"]}>Отзывы</li>
                     <li className={styles["menu-item"]}>Контакты</li>
                  </ul>
               </nav>
               <div className={styles.links}>
                  <div className={styles.link}>
                     <Link href="/">
                        <Image
                           src="/svg/tg.svg"
                           width={24}
                           height={24}
                           alt="Tg icon"
                        />
                     </Link>
                  </div>
                  <div className={styles.link}>
                     <Link href="/">
                        <Image
                           src="/svg/whatsapp.svg"
                           width={24}
                           height={24}
                           alt="Whatsapp icon"
                        />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
