import cn from "classnames";
import cls from "./Text.module.scss";
import React from "react";

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  textDate?: string;
  textTime?: string;
  style?: React.CSSProperties;
}

export const Text: React.FC<TextProps> = (props) => {
  const { className, title, text, textDate, textTime } = props;

  return (
    <div className={cn(cls.Text, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
      {textDate && <p className={cls.textDate}>{textDate}</p>}
      {textTime && <p className={cls.textTime}>{textTime}</p>}
    </div>
  );
};
