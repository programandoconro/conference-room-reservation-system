import format from "date-fns/format/index.js";
import ja from "date-fns/locale/ja";

export const getTimestamp = () => {
  return format(new Date(), "yyyy-MM-dd HH:mm:ss", { locale: ja });
};

const formatDate = (date: Date) => {
  return format(date, "yyyy-MM-dd", { locale: ja });
};

export default formatDate;
