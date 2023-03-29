import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

function formatDate(date: string) {
  return format(parseISO(date), "LLLL d, yyyy");
}

export { formatDate };
