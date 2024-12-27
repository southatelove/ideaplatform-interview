import React from "react";

import styles from "./MainPage.module.scss";
import { TicketList, TicketsFilter } from "@/widgets/index";

export const MainPage: React.FC = () => {
  return (
    <div className={styles.mainpage}>
      <div>
        <TicketsFilter />
      </div>
      <TicketList />
    </div>
  );
};
