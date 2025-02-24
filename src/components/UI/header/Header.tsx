"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Button from "../button/Button";
import styles from "./Header.module.scss";
import cn from "classnames";
import { useIntersectionObs } from "@/hooks/useIntersectionObs";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);
   const headerRef = useRef<HTMLDivElement>(null);
   const wrapperRef = useRef<HTMLDivElement>(null);
   const isIntersecting = useIntersectionObs(headerRef);
   useEffect(() => {
      if (isOpen) {
         document.body.classList.add("_lock-scroll");
      } else {
         document.body.classList.remove("_lock-scroll");
      }
      return () => {
         document.body.classList.remove("_lock-scroll");
      };
   }, [isOpen]);
   return (
      <header className={styles.header} ref={headerRef}>
         <div
            ref={wrapperRef}
            className={cn(styles.wrapper, {
               [styles["_label"]]: !isIntersecting,
               [styles["_open"]]: isOpen,
            })}
         >
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
                     <div className={styles.button}>
                        <Button>Записаться</Button>
                     </div>
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
