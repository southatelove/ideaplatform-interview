import { SelectCurrency } from "../SelectCurrency/ui/SelectCurrency";
import { StopFilter } from "../StopFilter";
import styles from "./SearchFilter.module.scss";

export const SearchFilter = () => {
  return (
    <div className={styles.searchFilter}>
      <SelectCurrency />
      <StopFilter />
    </div>
  );
};
