import { eachDayOfInterval, format, parseISO } from "date-fns";
import { MarkedDateProps, DayProps } from ".";
import theme from "../../styles/theme";
import { getPlatformDate } from "../../Utils/getPlatformDate";

export function generateInterval(start: DayProps, end: DayProps) {
  let interval: MarkedDateProps = {};
  const test = eachDayOfInterval({
    start: parseISO(start.dateString),
    end: parseISO(end.dateString),
  }).forEach((item) => {
    const date = format(getPlatformDate(item), "yyyy-MM-dd");
    interval = {
      ...interval,
      [date]: {
        color:
          start.dateString === date || end.dateString === date
            ? theme.colors.main
            : theme.colors.main_light,

        textColor:
          start.dateString === date || end.dateString === date
            ? theme.colors.main_light
            : theme.colors.main,
      },
    };
  });
  return interval;
}
