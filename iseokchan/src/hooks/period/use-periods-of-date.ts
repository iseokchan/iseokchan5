import {
  formatDate,
  getHoursFromDate,
  getMinutesFromDate,
  setToDate,
} from "src/utils/date-fns-base";
import { PeriodsOfPeriodTemplate } from "src/validators";

import { useSWR } from "../base";

type Period = {
  id: number;
  name: string;
  startTime: Date;
  endTime: Date;
};
const getDateFromString = (date: Date, time: Date): Date => {
  return setToDate(date, {
    hours: getHoursFromDate(time),
    minutes: getMinutesFromDate(time),
    seconds: 0,
    milliseconds: 0,
  });
};

export const usePeriodsOfDate = (date: Date = new Date()) => {
  const dateString = formatDate(date, "yyyy-MM-dd");
  return useSWR<PeriodsOfPeriodTemplate[], Period[]>(
    `/api/period?date=${date ? dateString : ""}`,
    (data) =>
      data.map((p) => ({
        id: p.id,
        name: p.name,
        startTime: getDateFromString(date, p.startTime),
        endTime: getDateFromString(date, p.startTime),
      }))
  );
};
