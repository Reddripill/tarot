"use client";
import React, { useEffect, useState } from "react";

export const useIntersectionObs = (
   ref: React.RefObject<HTMLElement | null>
) => {
   const [isIntersecting, setIsIntersecting] = useState(true);
   useEffect(() => {
      const target = ref.current;
      const configObserver: IntersectionObserverInit = {
         root: null,
         rootMargin: "0px",
         threshold: [0],
      };
      const observer = new IntersectionObserver((entries) => {
         setIsIntersecting(entries[0].isIntersecting);
         console.log(entries[0]);
      }, configObserver);
      if (target) observer.observe(target);
      return () => {
         if (target) observer.unobserve(target);
      };
   }, [ref]);
   return isIntersecting;
};
