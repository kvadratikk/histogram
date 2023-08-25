export const findHeight = (sum: number): number => {
  if (sum <= 500) return sum / 7.7;
  if (sum <= 1000) return findHeight(500) + (sum - 500) / 10;
  if (sum <= 2000) return findHeight(1000) + (sum - 1000) / 20;
  if (sum <= 5000) return findHeight(2000) + (sum - 2000) / 60;
  if (sum <= 10000) return findHeight(5000) + (sum - 5000) / 100;
  return 0;
};
