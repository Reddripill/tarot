import React from "react";
import styles from "./Footer.module.scss";
import Button from "../button/Button";
import Link from "next/link";
import Image from "next/image";
import SmoothScrollLink from "../smooth-scroll-link/SmoothScrollLink";
import { links } from "@/constants/links";
import { sectionHashes } from "@/constants/sectionHashes";

const Footer = () => {
   return (
      <footer className={styles.footer} id={sectionHashes.contacts}>
         <div className="container">
            <div className={styles.info}>
               <div className={styles.subtitle}>
                  Откройте двери в новое будущее с картами Таро
               </div>
               <h2 className={styles.title}>
                  Получите глубокий разбор вашей ситуации
               </h2>
               <h5 className={styles.text}>
                  Таро – это ключ к осознанию вашей судьбы. Помогу разобраться в
                  жизненных вопросах, найти ответы и выбрать верный путь.
               </h5>
               <div className={styles.button}>
                  <Link href={links.tgChannel}>
                     <Button isLarge={true}>Записаться на расклад</Button>
                  </Link>
               </div>
               <h5 className={styles.brand}>Designed by TechGen Inc.</h5>
            </div>
            <div className={styles.refs}>
               <div className={styles.logo}>
                  <Image
                     src="/logo.webp"
                     alt="Магический круг Таро"
                     height={65}
                     width={150}
                  />
               </div>
               <nav className={styles.nav}>
                  <ul className={styles.menu}>
                     <li className={styles["menu-item"]}>
                        <SmoothScrollLink hash="home">Главная</SmoothScrollLink>
                     </li>
                     <li className={styles["menu-item"]}>
                        <SmoothScrollLink hash="actions">
                           Услуги
                        </SmoothScrollLink>
                     </li>
                     <li className={styles["menu-item"]}>
                        <SmoothScrollLink hash="reviews">
                           Отзывы
                        </SmoothScrollLink>
                     </li>
                     <li className={styles["menu-item"]}>
                        <SmoothScrollLink hash="contacts">
                           Контакты
                        </SmoothScrollLink>
                     </li>
                  </ul>
               </nav>
               <div className={styles.links}>
                  <div className={styles.link}>
                     <Link href={links.tgChannel}>
                        <Image
                           src="/svg/tg.svg"
                           width={24}
                           height={24}
                           alt="Связь по Telegram(Телеграм)"
                        />
                     </Link>
                  </div>
                  <div className={styles.link}>
                     <Link href={links.tgChannel}>
                        <Image
                           src="/svg/whatsapp.svg"
                           width={24}
                           height={24}
                           alt="Связь по WhatsApp"
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
