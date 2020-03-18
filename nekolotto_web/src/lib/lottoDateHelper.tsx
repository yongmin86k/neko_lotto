import moment from "moment";
import "moment-timezone";

const today = moment().tz("America/Vancouver");

export const lastDrawDay = () => {
  const curDay = parseInt(today.format("d"));
  const curTime = parseInt(today.format("k"));

  if (
    (curDay === 2 && curTime > 20) ||
    (curDay > 2 && curDay < 5) ||
    (curDay === 5 && curTime < 20)
  ) {
    const toLastTue = Math.abs(2 - curDay);
    return today.subtract(toLastTue, "days").valueOf();
  } else {
    const toLastFri =
      curDay === 2
        ? 4
        : curDay === 1
        ? 3
        : curDay === 0
        ? 2
        : curDay === 5
        ? 0
        : curDay === 6
        ? 1
        : 0;

    return today.subtract(toLastFri, "days").valueOf();
  }
};
