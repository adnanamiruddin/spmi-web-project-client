import { format } from "date-fns";
import { id } from "date-fns/locale";

const startYear = 1990;
const endYear = new Date().getFullYear() + 5;
// Year options
export const yearOptions = Array.from(
  { length: endYear - startYear + 1 },
  (_, index) => {
    const year = (startYear + index).toString();
    return { value: year, label: year };
  }
);

export const DAYS_OPTIONS = Array.from({ length: 31 }, (_, index) => ({
  label: `${index + 1}`,
  value: `${index + 1}`,
}));

export const MONTHS_OPTIONS = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
].map((month, index) => ({
  label: month,
  value: `${(index + 1).toString().padStart(2, "0")}`,
}));

export const MONTHS_OPTIONS_WITH_NUMBER_VALUE = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
].map((month, index) => ({
  label: month,
  value: index + 1,
}));

export const WEEKS_OPTIONS = [
  "Pekan 1",
  "Pekan 2",
  "Pekan 3",
  "Pekan 4",
  "Pekan 5",
].map((week, index) => ({
  label: week,
  value: index + 1,
}));

export const DAYS_LIST = [
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
  "Ahad",
];

const getDayListWithTodayDetail = () => {
  const todayName = format(new Date(), "EEEE", { locale: id });
  return DAYS_LIST.map((day) =>
    day === todayName ? `${day} (hari ini)` : day
  );
};
export const DAYS_LIST_WITH_TODAY_DETAIL = getDayListWithTodayDetail();

export const DAYS_NAME_OPTIONS = [
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
  "Ahad",
].map((day) => ({
  label: day,
  value: day,
}));
