"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Button from "../button/Button";
import styles from "./Header.module.scss";
import cn from "classnames";
import { useIntersectionObs } from "@/hooks/useIntersectionObs";
import SmoothScrollLink from "../smooth-scroll-link/SmoothScrollLink";
import { links } from "@/constants/links";
import Image from "next/image";

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
   const closeMenu = () => {
      if (isOpen) setIsOpen(false);
   };
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
                     <Image
                        src="/logo.webp"
                        alt="Магический круг Таро"
                        height={65}
                        width={150}
                     />
                  </Link>
                  <nav
                     className={cn(styles.nav, {
                        [styles["_open"]]: isOpen,
                     })}
                  >
                     <ul className={styles.menu}>
                        <li className={styles["menu-item"]}>
                           <SmoothScrollLink hash="home" closeMenu={closeMenu}>
                              Главная
                           </SmoothScrollLink>
                        </li>
                        <li className={styles["menu-item"]}>
                           <SmoothScrollLink
                              hash="actions"
                              closeMenu={closeMenu}
                           >
                              Услуги
                           </SmoothScrollLink>
                        </li>
                        <li className={styles["menu-item"]}>
                           <SmoothScrollLink
                              hash="reviews"
                              closeMenu={closeMenu}
                           >
                              Отзывы
                           </SmoothScrollLink>
                        </li>
                        <li className={styles["menu-item"]}>
                           <SmoothScrollLink
                              hash="contacts"
                              closeMenu={closeMenu}
                           >
                              Контакты
                           </SmoothScrollLink>
                        </li>
                     </ul>
                  </nav>
                  <div className={styles.actions}>
                     <div className={styles.button}>
                        <Link href={links.tgChannel}>
                           <Button>Записаться</Button>
                        </Link>
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
