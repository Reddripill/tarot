"use client";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Swiper.module.scss";
import cn from "classnames";
import "swiper/scss";
import "./SwiperCore.scss";

interface IProps {
   children: React.ReactNode;
}

const SwiperSlider = ({ children }: IProps) => {
   return (
      <div className={styles.slider}>
         <Swiper
            /* spaceBetween={40}
            slidesPerView={2.5} */
            initialSlide={1}
            centeredSlides={true}
            loop={false}
            modules={[Navigation]}
            navigation={{
               prevEl: ".prev-arrow-cust",
               nextEl: ".next-arrow-cust",
            }}
            breakpoints={{
               320: {
                  spaceBetween: 20,
                  slidesPerView: 1.3,
               },
               500: {
                  spaceBetween: 30,
                  slidesPerView: 1.5,
               },
               768: {
                  spaceBetween: 30,
                  slidesPerView: 1.8,
               },
               1024: {
                  spaceBetween: 30,
                  slidesPerView: 2.5,
               },
               1280: {
                  spaceBetween: 40,
                  slidesPerView: 2.5,
               },
            }}
         >
            {children}
            <div className={styles.navigation}>
               <div className={cn("arrow-cust", "prev-arrow-cust")}>
                  <ChevronLeft />
               </div>
               <div className={cn("arrow-cust", "next-arrow-cust")}>
                  <ChevronRight />
               </div>
            </div>
         </Swiper>
      </div>
   );
};

export default SwiperSlider;
