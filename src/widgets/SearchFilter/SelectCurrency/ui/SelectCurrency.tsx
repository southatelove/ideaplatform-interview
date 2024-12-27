import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "@/features/GettingTickets/model/ticketsSlice";

import styles from "./SelectCurrency.module.scss";
import { RootState } from "@/app/providers/StoreProvider/config/store";
import { Button } from "@/shared/index";
import { ButtonSize } from "@/shared/ui/Button/Button";
import { Currency } from "@/features/GettingTickets/model/types/types";

export const SelectCurrency: React.FC = () => {
  const dispatch = useDispatch();
  const currency = useSelector((state: RootState) => state.tickets.currency);
  const handleCurrencyChange = (value: Currency) => {
    dispatch(setCurrency(value));
  };

  return (
    <div className={styles.selectCurrency}>
      <h2>Валюта</h2>
      <Button
        className={currency === "RUB" ? styles.active : ""}
        onClick={() => handleCurrencyChange("RUB")}
        size={ButtonSize.SMALL}
      >
        RUB
      </Button>
      <Button
        className={currency === "USD" ? styles.active : ""}
        onClick={() => handleCurrencyChange("USD")}
      >
        USD
      </Button>
      <Button
        className={currency === "EUR" ? styles.active : ""}
        onClick={() => handleCurrencyChange("EUR")}
      >
        EUR
      </Button>
    </div>
  );
};
