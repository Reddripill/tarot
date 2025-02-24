import React from "react";
import styles from "./Stars.module.scss";
import Image from "next/image";

const Stars = () => {
   return (
      <div className={styles.stars}>
         {[...Array(5)].map((_, index) => (
            <div className={styles.star} key={index}>
               <Image src="/svg/star.svg" fill alt={`${index} star`} />
            </div>
         ))}
      </div>
   );
};

export default Stars;
