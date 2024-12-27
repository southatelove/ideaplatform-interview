import React from "react";
import cn from "classnames";
import styles from "./Button.module.scss";
import { ButtonHTMLAttributes } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export enum ButtonSize {
  SMALL = "small",
  BIG = "big",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, size, disabled, ...otherProps } = props;

  return (
    <button
      className={cn(styles.Button, className, {
        [styles["small"]]: size === "small",
        [styles["big"]]: size === "big",
      })}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
