import { periodsSums } from '../../data';

const sumInfo = {
  500: [0, 7.7],
  1000: [500, 10],
  2000: [1000, 20],
  5000: [2000, 60],
  10000: [5000, 100],
};

export const findColumnHeight = (sum: number): number => {
  const formula = (maxValue: number) => {
    const [prevValue, ratio] = sumInfo[maxValue as keyof typeof sumInfo];
    const restHeight = (sum - prevValue) / ratio;

    return !prevValue ? restHeight : findColumnHeight(prevValue) + restHeight;
  };

  for (let i = periodsSums.length - 1; i >= 0; i--) {
    const periodsSum = periodsSums[i];

    if (sum <= periodsSum) return formula(periodsSum);
  }

  return 0;
};
