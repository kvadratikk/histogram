'use client';

import Image from 'next/image';

import { useState } from 'react';
import { periods, PeriodsNames } from './data';

const Histogram = () => {
  const periodsNames = Object.keys(periods[0].graph);

  const [currentPeriodName, setCurrentPeriodName] = useState(periodsNames[0]);
  const [isPeriodsOpen, setIsPeriodsOpen] = useState(false);

  const handleSelectClick = () => {
    setIsPeriodsOpen(!isPeriodsOpen);
  };

  const handleOptionClick = (period: PeriodsNames) => {
    setCurrentPeriodName(period);
    setIsPeriodsOpen(false);
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
            {PeriodsNames[currentPeriodName as keyof typeof PeriodsNames]}

            <Image
              className={`transition-all duration-300 ${isPeriodsOpen ? '' : 'rotate-180'}`}
              src="/icons/arrow.svg"
              alt=""
              width={24}
              height={24}
            />
          </span>
        </button>

        <div
          className={`w-full outline -outline-offset-1 outline-2 outline-accent rounded-[28px] bg-white transition-[opacity] duration-300 ${
            isPeriodsOpen ? 'absolute visible opacity-1' : 'invisible opacity-0 h-0'
          }`}
        >
          {periodsNames
            .filter((name) => name !== currentPeriodName)
            .map((name) => (
              <button
                className="flex rounded-[28px] w-full text-left"
                type="button"
                key={name}
                onClick={() => handleOptionClick(name as PeriodsNames)}
              >
                <span className="pl-[20px] py-[9px] flex-1 leading-[30px] hover:text-accent trnsition-all duration-300">
                  {PeriodsNames[name as keyof typeof PeriodsNames]}
                </span>
              </button>
            ))}
        </div>
      </div>

      <div className="bg-[#FF00F50D] h-[400px] rounded-[27px]">df</div>
    </>
  );
};

export default Histogram;
