import dayjs from "dayjs";
import "dayjs/locale/ru";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

dayjs.locale("ru", {
  ...dayjs.Ls.ru,
  weekdaysShort: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
});

export function toLocaleDate(dateString: string) {
  const date = dayjs(dateString, "DD.MM.YY");
  return date.locale("ru").format("D MMMM YYYY, ddd");
}
