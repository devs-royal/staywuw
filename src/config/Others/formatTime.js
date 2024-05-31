import moment from "moment";

export const formatTime = (time) => {
  const momentTime = moment(time, "HH:mm:ss");
  return momentTime.format("HH:mm:ss");
};
