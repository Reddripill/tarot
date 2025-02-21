"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "../button/Button";
import styles from "./Header.module.scss";
import cn from "classnames";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <header className={styles.header}>
         <div className={styles.wrapper}>
            <div className="container">
               <div className={styles.content}>
                  <Link href="/" className={styles.logo}>
                     Tarot
                  </Link>
                  <nav
                     className={cn(styles.nav, {
                        [styles["_open"]]: isOpen,
                     })}
                  >
                     <ul className={styles.menu}>
                        <li className={styles["menu-item"]}>Главная</li>
                        <li className={styles["menu-item"]}>Услуги</li>
                        <li className={styles["menu-item"]}>Отзывы</li>
                        <li className={styles["menu-item"]}>Контакты</li>
                     </ul>
                  </nav>
                  <div className={styles.actions}>
                     <Button>Записаться</Button>
                     <div
                        className={cn(styles.burger, {
                           [styles["_open"]]: isOpen,
                        })}
                        onClick={() => setIsOpen(!isOpen)}
                     >
                        <span></span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
