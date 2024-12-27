import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./StopFilter.module.scss";
import { RootState } from "@/app/providers/StoreProvider/config/store";
import { toggleStop } from "@/features/GettingTickets/model/ticketsSlice";

export const StopFilter: React.FC = () => {
  const dispatch = useDispatch();
  const selectedStops = useSelector(
    (state: RootState) => state.tickets.selectedStops
  );

  const handleCheckboxChange = (stop: number) => {
    dispatch(toggleStop(stop));
  };

  console.log(selectedStops, "selectedStops");
  return (
    <div className={styles.filter}>
      <h2>Фильтр по пересадкам</h2>
      <div>
        <label>
          <input
            type="checkbox"
            checked={selectedStops.includes(0)}
            onChange={() => handleCheckboxChange(0)}
          />
          Без пересадок
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedStops.includes(1)}
            onChange={() => handleCheckboxChange(1)}
          />
          1 пересадка
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedStops.includes(2)}
            onChange={() => handleCheckboxChange(2)}
          />
          2 пересадки
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedStops.includes(3)}
            onChange={() => handleCheckboxChange(3)}
          />
          3 пересадки
        </label>
      </div>
    </div>
  );
};
