"use client";
import { sectionHashes } from "@/constants/sectionHashes";
import React from "react";

interface IProps {
   hash: keyof typeof sectionHashes;
   children: React.ReactNode;
   closeMenu?: () => void;
}

const SmoothScrollLink = ({ hash, children, closeMenu }: IProps) => {
   const clickHanlder = () => {
      const section = document.getElementById(hash);
      if (closeMenu) closeMenu();
      if (section) {
         section.scrollIntoView({ behavior: "smooth" });
      }
      if (hash === "home") {
         document.body.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
         });
      } else if (hash === "contacts") {
         const top = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
         );
         document.body.scrollTo({
            top,
            behavior: "smooth",
         });
      }
   };
   return <div onClick={clickHanlder}>{children}</div>;
};

export default SmoothScrollLink;
