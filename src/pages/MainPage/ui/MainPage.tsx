import React from "react";

import styles from "./MainPage.module.scss";
import { SearchFilter, TicketList } from "@/widgets/index";

export const MainPage: React.FC = () => {
  return (
    <div className={styles.mainpage}>
      <div>
        <SearchFilter />
      </div>
      <TicketList />
    </div>
  );
};
