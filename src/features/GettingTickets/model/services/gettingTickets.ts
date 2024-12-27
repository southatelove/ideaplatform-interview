import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchTicketsResponse } from "../types/types";
import ticketsData from "../../../../mock/tickets.json";

export const gettingTickets = createAsyncThunk<FetchTicketsResponse>(
  "tickets/fetchTickets",
  async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (e) {
      console.log(e, "error");
    }
    return ticketsData as FetchTicketsResponse;
  }
);
