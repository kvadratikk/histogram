export const periodsSums = [10000, 5000, 2000, 1000, 500, 0];

export const periods = [
  {
    earnings: {
      year_sum: 0,
      six_month_sum: 0,
      last_month_sum: 0,
    },
    graph: {
      year: {
        January: 5000,
        February: 500,
        March: 5000,
        April: 500,
        May: 500,
        June: 5000,
        July: 5000,
        August: 500,
        September: 500,
        October: 500,
        November: 4200,
        December: 3000,
      },
      half_year: {
        January: 5000,
        February: 500,
        March: 1000,
        April: 2000,
        May: 3000,
        June: 200,
      },
      month: {
        '1': 1000,
        '2': 1000,
        '3': 1000,
        '4': 1000,
        '5': 1000,
        '6': 1000,
        '7': 4000,
        '8': 4000,
        '9': 4000,
        '10': 4000,
        '11': 4000,
        '12': 4000,
        '13': 4000,
        '14': 4000,
        '15': 4000,
        '16': 1000,
        '17': 1000,
        '18': 1000,
        '19': 1000,
        '20': 1000,
        '21': 1000,
        '22': 1000,
        '23': 1000,
        '24': 1000,
        '25': 1000,
        '26': 1000,
        '27': 1000,
        '28': 1000,
        '29': 1000,
        '30': 1000,
        '31': 1000,
      },
    },
  },
];

export const graph = periods[0].graph;
export const periodsNames = Object.keys(graph);
export const monthesNames = Object.keys(graph.year);

export const PeriodsNames = {
  [periodsNames[0]]: 'За последний год',
  [periodsNames[1]]: 'За последние полгода',
  [periodsNames[2]]: 'За последний месяц',
};

export const MothesNames = {
  [monthesNames[0]]: 'Янв',
  [monthesNames[1]]: 'Февр',
  [monthesNames[2]]: 'Март',
  [monthesNames[3]]: 'Апр',
  [monthesNames[4]]: 'Май',
  [monthesNames[5]]: 'Июнь',
  [monthesNames[6]]: 'Июль',
  [monthesNames[7]]: 'Авг',
  [monthesNames[8]]: 'Сент',
  [monthesNames[9]]: 'Окт',
  [monthesNames[10]]: 'Нояб',
  [monthesNames[11]]: 'Дек',
};
