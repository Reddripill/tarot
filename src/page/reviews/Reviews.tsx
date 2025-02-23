"use client";
import React, { useRef } from "react";
import styles from "./Reviews.module.scss";
import SwiperSlider from "@/components/UI/swiper/SwiperSlider";
import { reviewsList } from "@/constants/reviews";
import { SwiperSlide } from "swiper/react";
import Stars from "@/components/UI/stars/Stars";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Reviews = () => {
   const prevArrow = useRef<HTMLDivElement>(null);
   const nextArrow = useRef<HTMLDivElement>(null);
   return (
      <section className="seciton">
         <div className={styles.info}>
            <h2 className={styles.title}>Что говорят обо мне мои клиенты</h2>
            <div className={styles.text}>
               Реальные истории людей, которым помогли расклады Таро
            </div>
         </div>
         <div className={styles.content}>
            <div className={styles.slider}>
               <SwiperSlider prevArrow={prevArrow} nextArrow={nextArrow}>
                  {reviewsList.map((review) => (
                     <SwiperSlide key={review.text}>
                        <div className={styles["slide-item"]}>
                           <div className={styles["slide-top"]}>
                              <div className={styles.avatar}></div>
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
            </div>
            <div className={styles.navigation}>
               <div className={styles.arrow} ref={prevArrow}>
                  <ChevronLeft size={32} />
               </div>
               <div className={styles.arrow} ref={nextArrow}>
                  <ChevronRight size={32} />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Reviews;
