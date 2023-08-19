import formatDate from "date-fns/format";
import parseISO from "date-fns/parseISO";

function format(date: string) {
  return formatDate(parseISO(date), "LLLL d, yyyy");
}

export { format };
