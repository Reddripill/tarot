import React from "react";
import { actionCards } from "@/constants/actions";
import Card from "./card/Card";
import styles from "./Actions.module.scss";

const Actions = () => {
   return (
      <section className="section">
         <div className="container">
            <h2 className="title">Сферы деятельности</h2>
            <div className={styles.cards}>
               {actionCards.map((card) => (
                  <div key={card.title} className={styles["cards-item"]}>
                     <Card card={card} />
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Actions;
