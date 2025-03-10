import React from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

interface IProps {
   children: React.ReactNode;
   isLarge?: boolean;
}

const Button = ({ children, isLarge }: IProps) => {
   return (
      <div className={cn(styles.button, { [styles["button-large"]]: isLarge })}>
         {children}
      </div>
   );
};

export default Button;
