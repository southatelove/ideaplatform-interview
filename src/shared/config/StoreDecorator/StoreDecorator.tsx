/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { StoreProvider } from "../../../app/providers/StoreProvider/ui/StoreProvider";

export const StoreDecorator = (Story: any) => (
  <StoreProvider>
    <Story />
  </StoreProvider>
);
