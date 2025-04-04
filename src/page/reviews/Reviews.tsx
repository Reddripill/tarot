"use client";
import React from "react";
import styles from "./Reviews.module.scss";
import SwiperSlider from "@/components/UI/swiper/SwiperSlider";
import { reviewsList } from "@/constants/reviews";
import { SwiperSlide } from "swiper/react";
import Stars from "@/components/UI/stars/Stars";
import { sectionHashes } from "@/constants/sectionHashes";
import cn from "classnames";
import Image from "next/image";

const Reviews = () => {
   return (
      <section className="section" id={`${sectionHashes.reviews}`}>
         <div className={styles.wrapper}>
            <div className={styles.info}>
               <h2 className={styles.title}>Что говорят обо мне мои клиенты</h2>
               <div className={styles.text}>
                  Реальные истории людей, которым помогли расклады Таро
               </div>
            </div>
            <div className={styles.content}>
               <SwiperSlider>
                  {reviewsList.map((review) => (
                     <SwiperSlide key={review.text}>
                        <div className={styles["slide-item"]}>
                           <div className={styles["slide-top"]}>
                              <div className={styles.avatar}>
                                 <Image
                                    src={review.avatar}
                                    alt={review.name}
                                    height={55}
                                    width={55}
                                 />
                              </div>
                              <div className={styles.person}>
                                 <div className={styles.name}>
                                    {review.name}
                                 </div>
                                 <Stars />
                              </div>
                           </div>
                           <div className={styles["slide-content"]}>
                              <div className={styles.reviews}>
                                 {review.text}
                              </div>
                           </div>
                        </div>
                     </SwiperSlide>
                  ))}
               </SwiperSlider>
               <div
                  className={cn(styles.overlay, styles["overlay-left"])}
               ></div>
               <div
                  className={cn(styles.overlay, styles["overlay-right"])}
               ></div>
            </div>
         </div>
      </section>
   );
};

export default Reviews;
