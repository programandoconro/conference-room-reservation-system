import format from "date-fns/format/index.js";
import ja from "date-fns/locale/ja";
import isToday from "date-fns/isToday";

export const getTimestamp = () => {
  return format(new Date(), "yyyy-MM-dd HH:mm:ss", { locale: ja });
};

export const getIsToday = (date: string) => {
  return isToday(new Date(date));
};

export const getDayName = (date: string) => {
  return format(new Date(date), "EEEE", { locale: ja }).slice(0, 1);
};

export const getDayFormat = (date: string) => {
  return format(new Date(date), "dd", { locale: ja });
};
export const getMonth = (date: string) => {
  return format(new Date(date), "MM", { locale: ja });
};
export const getTime = (date: number): string => {
  return format(date, "HH:mm", { locale: ja });
};

export const getToday = () => {
  return format(new Date(), "yyyy/MM/dd", { locale: ja });
};

const formatDate = (date: Date) => {
  return format(date, "yyyy/MM/dd", { locale: ja });
};

export default formatDate;
