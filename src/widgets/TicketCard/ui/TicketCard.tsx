import React from "react";

import styles from "./TicketCard.module.scss";
import { useSelector } from "react-redux";

import { Ticket } from "@/features/GettingTickets/model/types/types";
import { RootState } from "@/app/providers/StoreProvider/config/store";

interface TicketCardProps {
  ticket: Ticket;
  currency: string;
}

export const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  // const currency = useSelector((state: RootState) => state.tickets.currency);

  // console.log(currency, "currency");
  return (
    <div className={styles.card}>
      <h3>{ticket.carrier}</h3>
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
  );
};
