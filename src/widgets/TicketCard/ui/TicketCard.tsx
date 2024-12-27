import React from "react";

import styles from "./TicketCard.module.scss";
import { useSelector } from "react-redux";

import { Ticket } from "@/features/GettingTickets/model/types/types";
import { RootState } from "@/app/providers/StoreProvider/config/store";
import { Button } from "@/shared/index";

interface TicketCardProps {
  ticket: Ticket;
  currency: string;
}

export const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  // const currency = useSelector((state: RootState) => state.tickets.currency);

  // console.log(currency, "currency");
  return (
    <div className={styles.card}>
      <div className={styles.leftside}>
        <h3>{ticket.carrier} Airlines</h3>
        <Button>Купить за {ticket.price}</Button>
      </div>
      <div>Линия</div>
      <div>
        <p>
          {ticket.origin_name} - {ticket.destination_name}
        </p>
        <p>
          {ticket.departure_time} - {ticket.arrival_time}
        </p>
        <p>Stops: {ticket.stops}</p>
        <p>
          Price:
          {/* {currency == "RUB"
          ? `${ticket.price} RUB`
          : currency == "USD"
          ? `${ticket.price.toFixed(2)} USD`
          : `${ticket.price.toFixed(2)} EUR`} */}
          {ticket.price.toFixed(2)}
          {}
        </p>
      </div>
    </div>
  );
};
