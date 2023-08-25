'use client';

import Image from 'next/image';

import { useState } from 'react';
import { graph, periodsNames, periodsSums, PeriodsNames, MothesNames } from './data';
import { findHeight } from './helpers/findHistogramHeight/findHistogramHeight';
import Column from './Column/Column';

const Histogram = () => {
  const [currentPeriodName, setCurrentPeriodName] = useState(periodsNames[0]);
  const [isPeriodsNamesOpen, setIsPeriodsNamesOpen] = useState(false);

  const periodMonthes = Object.entries(graph[currentPeriodName as keyof typeof graph]);

  const handleSelectClick = () => {
    setIsPeriodsNamesOpen(!isPeriodsNamesOpen);
  };

  const handleOptionClick = (period: string) => {
    setCurrentPeriodName(period);
    setIsPeriodsNamesOpen(false);
  };

  return (
    <>
      <div className="max-w-[380px] w-full ml-auto mb-[28px] bg-white text-[24px] relative">
        <button
          className="flex items-center max-w-[380px] w-full text-left bg-white border-2 outline -outline-offset-1 outline-2 outline-accent rounded-[28px]"
          type="button"
          onClick={handleSelectClick}
        >
          <span className="flex justify-between py-[9px] pl-[20px] pr-[16px] flex-1 leading-[30px] hover:text-accent trnsition-all duration-300">
            {PeriodsNames[currentPeriodName]}

            <Image
              className={`transition-all duration-300 ${isPeriodsNamesOpen ? '' : 'rotate-180'}`}
              src="/icons/arrow.svg"
              alt=""
              width={24}
              height={24}
            />
          </span>
        </button>

        <div
          className={`w-full outline -outline-offset-1 outline-2 outline-accent rounded-[28px] bg-white transition-opacity duration-300 ${
            isPeriodsNamesOpen ? 'absolute visible opacity-100' : 'invisible opacity-0 h-0'
          }`}
        >
          {periodsNames
            .filter((name) => name !== currentPeriodName)
            .map((name) => (
              <button
                className="flex rounded-[28px] w-full text-left"
                type="button"
                key={name}
                onClick={() => handleOptionClick(name)}
              >
                <span className="pl-[20px] py-[9px] flex-1 leading-[30px] hover:text-accent trnsition-all duration-300">
                  {PeriodsNames[name]}
                </span>
              </button>
            ))}
        </div>
      </div>

      <div className="flex bg-[#FF00F50D] h-[400px] rounded-[27px] p-[40px] text-[20px] leading-[30px] gap-[33px]">
        <div className="flex flex-col h-full gap-5">
          {periodsSums.map((periodSum) => (
            <span key={periodSum}>{periodSum.toLocaleString('ru-RU')}</span>
          ))}
        </div>

        <div className="flex-1 flex justify-between items-end">
          {periodMonthes.map(([month, monthSum], idx) => (
            <Column month={month} monthSum={monthSum} key={month + currentPeriodName} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Histogram;
