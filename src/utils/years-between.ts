/*
 * I know this is not the ideal calc but is enough for my purpose
 */
const yearsBetween = (start: number, end: number): number => {
  const startDate = new Date(start, 1, 1);
  const endDate = new Date(end, 1, 1);

  return endDate.getFullYear() - startDate.getFullYear();
};

export default yearsBetween;
