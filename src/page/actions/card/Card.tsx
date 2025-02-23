import React from "react";
import Image from "next/image";
import { ICard } from "@/constants/actions";
import styles from "./Card.module.scss";

const Card = ({ card }: { card: ICard }) => {
   return (
      <div className={styles.card}>
         <div className={styles.image}>
            <Image src={card.icon} width={100} height={100} alt={card.title} />
         </div>
         <div className={styles.content}>
            <div className={styles.title}>{card.title}</div>
            <div className={styles.text}>{card.text}</div>
         </div>
      </div>
   );
};

export default Card;
