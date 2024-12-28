import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "@/features/GettingTickets/model/ticketsSlice";

import styles from "./SelectCurrency.module.scss";
import { RootState } from "@/app/providers/StoreProvider/config/store";
import { Button } from "@/shared/index";
import { Currency } from "@/features/GettingTickets/model/types/types";
import { Text } from "@/shared/ui/Text/Text";

export const SelectCurrency: React.FC = () => {
  const dispatch = useDispatch();
  const currency = useSelector((state: RootState) => state.tickets.currency);
  const handleCurrencyChange = (value: Currency) => {
    dispatch(setCurrency(value));
  };

  return (
    <div className={styles.selectCurrency}>
      <Text text={"ВАЛЮТА"} className={styles.text} />
      <div className={styles.buttonGroup}>
        <Button
          className={`${styles.currencyButton} ${
            currency === "₽" ? styles.active : ""
          }`}
          onClick={() => handleCurrencyChange("₽")}
        >
          RUB
        </Button>
        <Button
          className={`${styles.currencyButton} ${
            currency === "$" ? styles.active : ""
          }`}
          onClick={() => handleCurrencyChange("$")}
        >
          USD
        </Button>
        <Button
          className={`${styles.currencyButton} ${
            currency === "€" ? styles.active : ""
          }`}
          onClick={() => handleCurrencyChange("€")}
        >
          EUR
        </Button>
      </div>
    </div>
  );
};
