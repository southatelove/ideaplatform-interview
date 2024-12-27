import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Currency, Ticket, TicketsState } from "./types/types";
import { gettingTickets } from "./services/gettingTickets";

const initialState: TicketsState = {
  loading: false,
  tickets: [],
  filteredTickets: [],
  error: null,
  selectedStops: [],
  currency: "RUB",
};

const convertPrice = (price: number, currency: string): number => {
  if (currency === "RUB") return price;
  if (currency === "USD") return price / 100;
  if (currency === "EUR") return price / 105;
  return price;
};

const filterTickets = (tickets: Ticket[], selectedStops: number[]) => {
  if (selectedStops.length === 0) {
    return tickets;
  }
  if (selectedStops.includes(6)) {
    return tickets;
  }
  return tickets.filter((ticket) => selectedStops.includes(ticket.stops));
};

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    toggleStop: (state, action: PayloadAction<number>) => {
      const stops = action.payload;

      if (state.selectedStops.includes(stops)) {
        state.selectedStops = state.selectedStops.filter((s) => s !== stops);
      } else {
        state.selectedStops = [...state.selectedStops, stops];
      }
      state.filteredTickets = filterTickets(state.tickets, state.selectedStops);
    },
    setCurrency: (state, action: PayloadAction<Currency>) => {
      if (state.currency === action.payload) {
        return;
      } else {
        state.currency = action.payload;
        state.filteredTickets = state.filteredTickets.map((ticket) => ({
          ...ticket,
          price: convertPrice(ticket.price, state.currency),
        }));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(gettingTickets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(gettingTickets.fulfilled, (state, action) => {
        state.loading = false;
        state.tickets = action.payload.tickets;
        state.filteredTickets = action.payload.tickets.map((ticket) => ({
          ...ticket,
          price: convertPrice(ticket.price, state.currency),
        }));
      })
      .addCase(gettingTickets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export const { toggleStop, setCurrency } = ticketsSlice.actions;
export default ticketsSlice.reducer;

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Ticket, TicketsState } from "./types/types";
// import { gettingTickets } from "./services/gettingTickets";

// const initialState: TicketsState = {
//   loading: false,
//   tickets: [],
//   filteredTickets: [],
//   error: null,
//   selectedStops: [],
//   currency: "RUB",
// };

// const convertPrice = (price: number, currency: string): number => {
//   if (currency === "RUB") return price;
//   if (currency === "USD") return price / 100;
//   if (currency === "EUR") return price / 105;
//   return price;
// };

// const ticketsSlice = createSlice({
//   name: "tickets",
//   initialState,
//   reducers: {
//     toggleStop: (state, action: PayloadAction<number>) => {
//       console.log(action.payload, "action Payload");
//       if (state.selectedStops.includes(action.payload)) {
//         state.selectedStops = state.selectedStops.filter(
//           (s) => s !== action.payload
//         );
//       } else {
//         state.selectedStops = [...state.selectedStops, action.payload];
//       }
//       state.filteredTickets = filterTickets(state.tickets, state.selectedStops);
//     },
//     setCurrency: (state, action: PayloadAction<string>) => {
//       state.currency = action.payload;
//       state.filteredTickets = state.tickets.map((ticket) => ({
//         ...ticket,
//         price: convertPrice(ticket.price, state.currency),
//       }));
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(gettingTickets.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(gettingTickets.fulfilled, (state, action) => {
//         state.loading = false;
//         state.tickets = action.payload.tickets;
//         state.filteredTickets = action.payload.tickets.map((ticket) => ({
//           ...ticket,
//           price: convertPrice(ticket.price, state.currency),
//         }));
//       })
//       .addCase(gettingTickets.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message ?? "An error occurred";
//       });
//   },
// });

// const filterTickets = (tickets: Ticket[], selectedStops: number[]) => {
//   if (selectedStops.length === 0) {
//     return tickets;
//   }
//   return tickets.filter((ticket) => selectedStops.includes(ticket.stops));
// };

// export const { toggleStop, setCurrency } = ticketsSlice.actions;
// export default ticketsSlice.reducer;
