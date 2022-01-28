import format from "date-fns/format/index.js";
import ja from "date-fns/locale/ja";

export const formatDate = (date: Date) => {
  return format(date, "yyyy-MM-dd", { locale: ja });
};
