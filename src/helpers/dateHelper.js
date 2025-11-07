import { MONTHS_OPTIONS, WEEKS_OPTIONS } from "@/const/DATE";
import {
  differenceInCalendarWeeks,
  differenceInDays,
  format,
  parse,
  startOfMonth,
} from "date-fns";
import { id } from "date-fns/locale";

export const isValidDate = (date) => {
  return date instanceof Date && !isNaN(date.getTime());
};

export const formatDateWithoutDayNameToIndo = (date) => {
  return format(new Date(date), "d MMMM yyyy", {
    locale: id,
  });
};

export const formatDateToIndo = (date) => {
  return format(new Date(date), "eeee, d MMMM yyyy", {
    locale: id,
  });
};

export const formatDateWithTimeToIndo = (date) => {
  return format(new Date(date), "eeee, d MMMM yyyy HH:mm", {
    locale: id,
  });
};

export const getDayFromDate = (date) => {
  return format(new Date(date), "d");
};

export const getMonthFromDate = (date) => {
  return format(new Date(date), "MM");
};

export const getYearFromDate = (date) => {
  return format(new Date(date), "yyyy");
};

export const getDateDuration = ({
  startDateDay,
  startDateMonth,
  startDateYear,
  endDateDay,
  endDateMonth,
  endDateYear,
}) => {
  if (
    !startDateDay ||
    !startDateMonth ||
    !startDateYear ||
    !endDateDay ||
    !endDateMonth ||
    !endDateYear ||
    isNaN(Number(startDateDay)) ||
    isNaN(Number(startDateMonth)) ||
    isNaN(Number(startDateYear)) ||
    isNaN(Number(endDateDay)) ||
    isNaN(Number(endDateMonth)) ||
    isNaN(Number(endDateYear))
  ) {
    return 0;
  }
  try {
    const startDate = parse(
      `${startDateYear}-${String(startDateMonth).padStart(2, "0")}-${String(
        startDateDay
      ).padStart(2, "0")}`,
      "yyyy-MM-dd",
      new Date()
    );
    const endDate = parse(
      `${endDateYear}-${String(endDateMonth).padStart(2, "0")}-${String(
        endDateDay
      ).padStart(2, "0")}`,
      "yyyy-MM-dd",
      new Date()
    );

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) return 0;
    const diff = differenceInDays(endDate, startDate) + 1;
    if (diff < 1) return 0;
    return diff;
  } catch {
    return 0;
  }
};

export const getCurrentMonthValue = () => {
  const today = new Date();
  const currentMonthValue = (today.getMonth() + 1).toString().padStart(2, "0");
  return (
    MONTHS_OPTIONS.find((m) => m.value === currentMonthValue)?.label ||
    MONTHS_OPTIONS[0].label
  );
};

export const getCurrentWeekValue = () => {
  const today = new Date();
  const weekNumber =
    differenceInCalendarWeeks(today, startOfMonth(today), { weekStartsOn: 1 }) +
    1;
  return (
    WEEKS_OPTIONS.find((w) => w.label.includes(weekNumber.toString()))?.label ||
    WEEKS_OPTIONS[0].label
  );
};

export const stripTodayDetailOnDaysList = (day) => {
  if (!day) return day;
  return day.replace(/\s*\(hari ini\)$/i, ""); // delete space + "(hari ini)" from the end of the string
};
