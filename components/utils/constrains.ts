import { EqualTime, SameDay, SameRoom } from "./types";

const equalTime = (props: EqualTime): boolean => {
  const { resStart, pickerEnd, resEnd, pickerStart } = props;
  if (resStart === pickerStart && resEnd === pickerEnd) {
    return true;
  }
  return false;
};

export const isInsideDate = (props: EqualTime): boolean => {
  const { resStart, pickerEnd, resEnd, pickerStart } = props;

  if (
    (pickerStart >= resStart && pickerStart < resEnd) ||
    (pickerEnd > resStart && pickerEnd <= resEnd) ||
    equalTime(props)
  ) {
    return true;
  }
  return false;
};

export const isSameDay = (props: SameDay): boolean => {
  const { date, res } = props;
  const gridDate = new Date(date).toDateString();
  const resDate = new Date(res.date).toDateString();

  const sameDay = gridDate === resDate;

  if (sameDay) {
    return true;
  }
  return false;
};

export const isSameRoom = (props: SameRoom) => {
  const { room, res } = props;

  if (res.room === room) {
    return true;
  }
  return false;
};
