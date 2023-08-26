'use client';

import Column from './Column/Column';
import Dropdown from './Dropdown/Dropdown';

import { useState } from 'react';
import { graph, periodsNames, periodsSums } from './data';

const Histogram = () => {
  const [currentPeriodName, setCurrentPeriodName] = useState(periodsNames[0]);

  const periodMonthes = Object.entries(graph[currentPeriodName as keyof typeof graph]);

  return (
    <>
      <Dropdown setCurrentPeriodName={setCurrentPeriodName} currentPeriodName={currentPeriodName} />

      <div className="flex bg-[#FF00F50D] h-[400px] rounded-[27px] p-[40px] text-[20px] leading-[30px] gap-[33px]">
        <div className="flex flex-col h-full gap-5">
          {periodsSums.map((periodSum) => (
            <span key={periodSum}>{periodSum.toLocaleString('ru-RU')}</span>
          ))}
        </div>

        <div className="flex-1 flex justify-between items-end">
          {periodMonthes.map(([month, monthSum]) => (
            <Column month={month} monthSum={monthSum} key={month + currentPeriodName} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Histogram;
