import type { Meta, StoryObj } from "@storybook/react";

import { Ticket } from "@/features/GettingTickets/model/types/types";
import { TicketCard } from "./TicketCard";

const meta: Meta<typeof TicketCard> = {
  title: "shared/TicketCard",
  component: TicketCard,
} satisfies Meta<typeof TicketCard>;

export default meta;
type Story = StoryObj<typeof TicketCard>;

export const Primary: Story = {
  args: {
    ticket: {
      origin: "VVO",
      origin_name: "Владивосток",
      destination: "TLV",
      destination_name: "Тель-Авив",
      departure_date: "12.05.18",
      departure_time: "16:20",
      arrival_date: "12.05.18",
      arrival_time: "22:10",
      carrier: "TK",
      stops: 3,
      price: 12400,
    } as Ticket,
  },
};
