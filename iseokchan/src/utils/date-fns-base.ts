import { format } from "date-fns";
import { ko } from "date-fns/locale";

export const formatDate = (
  date: Date | number = new Date(),
  givenFormat: string = "yyyy년 MM월 dd일 HH시 mm분 ss초 SSS",
  options?: {
    locale?: Locale | undefined;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
    firstWeekContainsDate?: number | undefined;
    useAdditionalWeekYearTokens?: boolean | undefined;
    useAdditionalDayOfYearTokens?: boolean | undefined;
  }
) => {
  return format(date, givenFormat, {
    locale: ko,
    ...options,
  });
};

export {
  add as addToDate,
  differenceInDays as dateDifferenceInDays,
  differenceInHours as dateDifferenceInHours,
  differenceInMilliseconds as dateDifferenceInMilliseconds,
  differenceInMinutes as dateDifferenceInMinutes,
  differenceInMonths as dateDifferenceInMonths,
  differenceInSeconds as dateDifferenceInSeconds,
  differenceInWeeks as dateDifferenceInWeeks,
  differenceInYears as dateDifferenceInYears,
  getDate as getDateFromDate,
  getDay as getDayFromDate,
  getHours as getHoursFromDate,
  getMilliseconds as getMillisecondsFromDate,
  getMinutes as getMinutesFromDate,
  getMonth as getMonthFromDate,
  getSeconds as getSecondsFromDate,
  getYear as getYearFromDate,
  set as setToDate,
  sub as subFromDate,
} from "date-fns";
