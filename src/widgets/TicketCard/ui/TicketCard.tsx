import React from "react";

import styles from "./TicketCard.module.scss";
import { useSelector } from "react-redux";

import { Ticket } from "@/features/GettingTickets/model/types/types";
import { RootState } from "@/app/providers/StoreProvider/config/store";
import { Button, toLocaleDate } from "@/shared/index";
import { ButtonSize } from "@/shared/ui/Button/Button";
import { Text } from "@/shared/ui/Text/Text";
import { AirplaneIcon } from "src/assets/Icons";

interface TicketCardProps {
  ticket: Ticket;
}

export const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  const currency = useSelector((state: RootState) => state.tickets.currency);

  return (
    <div className={styles.card}>
      <div className={styles.leftside}>
        <h1>{ticket.carrier} Airlines</h1>
        <Button size={ButtonSize.BIG}>
          Купить <br />
          за <></>
          {ticket.convertedPrice.toFixed(2)}
          {currency}
        </Button>
      </div>
      <div className={styles.rightside}>
        <div className={styles.lefttimer}>
          <Text textTime={ticket.departure_time} className={styles.text} />
          <Text text={`${ticket.origin},${ticket.origin_name}`} />
          <Text textDate={toLocaleDate(ticket.departure_date)} />
        </div>
        <div className={styles.airplanecontainer}>
          <div className={styles.stops}>
            {ticket.stops == 0 ? <p>Без Пересадок</p> : ""}
            {ticket.stops == 1 ? <p>{ticket.stops} Пересадка</p> : ""}
            {ticket.stops >= 2 ? <p>{ticket.stops} Пересадки</p> : ""}
            {ticket.stops >= 5 ? <p>{ticket.stops} Пересадок</p> : ""}
          </div>
          <div className={styles.verticalline}></div>
          <div className={styles.airplaneroute}>
            <img src={AirplaneIcon} className={styles.airplaneIcon} />
          </div>
        </div>
        <div className={styles.righttimer}>
          <Text textTime={ticket.arrival_time} className={styles.text} />
          <Text text={`${ticket.destination_name},${ticket.destination}`} />
          <Text textDate={toLocaleDate(ticket.arrival_date)} />
        </div>
      </div>
    </div>
  );
};
