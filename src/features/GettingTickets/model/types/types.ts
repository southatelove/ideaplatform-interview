export interface Ticket {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
  convertedPrice: number;
}

export type Currency = "RUB" | "EUR" | "USD";

export interface TicketsState {
  loading: boolean;
  tickets: Ticket[];
  filteredTickets: Ticket[];
  error: string | null;
  selectedStops: number[];
  currency: Currency;
  convertedPrice: number;
}

export interface FetchTicketsResponse {
  tickets: Ticket[];
}

// export interface Ticket {
//   origin: string;
//   origin_name: string;
//   destination: string;
//   destination_name: string;
//   departure_date: string;
//   departure_time: string;
//   arrival_date: string;
//   arrival_time: string;
//   carrier: string;
//   stops: number;
//   price: number;
// }

// export interface TicketsState {
//   loading: boolean;
//   tickets: Ticket[];
//   filteredTickets: Ticket[];
//   error: string | null;
//   selectedStops: number[];
//   currency: string;
// }

// export interface FetchTicketsResponse {
//   tickets: Ticket[];
// }
