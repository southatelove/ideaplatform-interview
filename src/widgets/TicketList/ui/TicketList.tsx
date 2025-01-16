import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/app/providers/StoreProvider/config/store";
import { gettingTickets } from "@/features/GettingTickets/model/services/gettingTickets";
import { TicketCard } from "@/widgets/TicketCard";
import { Loader } from "@/shared/ui/Loader/Loader";
import styles from "./TicketList.module.scss";

export const TicketList: React.FC = () => {
  const dispatch = useDispatch();
  const { filteredTickets, loading, error, currency } = useSelector(
    (state: RootState) => state.tickets
  );

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch(gettingTickets() as any);
  }, [dispatch]);

  if (loading) {
    return <Loader className={styles.loader} />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {filteredTickets.map((ticket) => (
        <TicketCard
          key={ticket.price + ticket.arrival_time}
          ticket={ticket}
          currency={currency}
          convertedPrice={ticket.convertedPrice}
        />
      ))}
    </div>
  );
};
