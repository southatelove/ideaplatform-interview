import { SelectCurrency } from "../SelectCurrency/ui/SelectCurrency";
import { StopFilter } from "../StopFilter";

export const TicketsFilter = () => {
  return (
    <div>
      <SelectCurrency />
      <StopFilter />
    </div>
  );
};
