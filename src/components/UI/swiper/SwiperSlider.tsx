"use client";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/scss";

interface IProps {
   children: React.ReactNode;
   prevArrow: React.RefObject<HTMLElement | null>;
   nextArrow: React.RefObject<HTMLElement | null>;
}

const SwiperSlider = ({ children, prevArrow, nextArrow }: IProps) => {
   console.log(nextArrow);
   return (
      <Swiper
         spaceBetween={40}
         slidesPerView={2.5}
         initialSlide={1}
         centeredSlides={true}
         loop={false}
         modules={[Navigation]}
         navigation={{ prevEl: prevArrow.current, nextEl: nextArrow.current }}
         onSlideChange={() => console.log("slide change")}
         onSwiper={(swiper) => console.log(swiper)}
      >
         {children}
      </Swiper>
   );
};

export default SwiperSlider;
