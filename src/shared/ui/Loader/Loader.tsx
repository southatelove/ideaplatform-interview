import cn from "classnames";
import "./Loader.scss";
import React from "react";

interface LoaderProps {
  className?: string;
}

export const Loader: React.FC<LoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn("lds-ellipsis", {}, [className])}>
      <div className="loadingio-spinner-eclipse-nq4q5u6dq7r">
        <div className="ldio-x2uulkbinbj">
          <div style={{ marginRight: "50px" }}></div>
        </div>
      </div>
    </div>
  );
};
