export const formatDate = (date: number | string | Date) => {
  const newDate = new Date(date);

  return new Intl.DateTimeFormat("en-US").format(newDate);
};
