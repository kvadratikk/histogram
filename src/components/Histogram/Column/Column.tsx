import { useEffect, useState } from 'react';
import { MothesNames } from '../data';
import { findColumnHeight } from '../helpers/findColumnHeight/findColumnHeight';

interface ColumnProps {
  month: string;
  monthSum: number;
}

const Column = ({ month, monthSum }: ColumnProps) => {
  const numberMonth = Number(month);
  const isNumberMonth = !Number.isNaN(numberMonth);
  const isHiddenMonth = isNumberMonth && numberMonth % 5 && numberMonth !== 1;

  const [height, setHeight] = useState(0);

  useEffect(() => {
    let timerId = setTimeout(() => setHeight(findColumnHeight(monthSum)));

    return () => {
      clearInterval(timerId);
    };
  }, [height, monthSum]);

  return (
    <div className="flex flex-col items-center gap-[17px]">
      <div className="flex flex-col-reverse relative">
        <div
          style={{ height }}
          className={`peer mx-auto w-[16px] h-[100px] bg-accent rounded-[4px] hover:shadow-[0_0_8px_6px_rgba(0,10,255,0.15)] [transition:all_0.2s,height_0.5s_ease-in_0.3s]`}
        />

        <div className="absolute bottom-[100%] right-[50%] translate-x-[50%] text-[16px] leading-[24px] bg-highlight rounded-[6px] px-[8px] mb-[4px] opacity-0 invisible peer-hover:visible peer-hover:h-auto peer-hover:opacity-100 transition-all duration-200">
          {monthSum}
        </div>
      </div>

      <span key={month} className={`${isHiddenMonth ? 'invisible' : ''}`}>
        {isNumberMonth ? String(numberMonth).padStart(2, '0') : MothesNames[month]}
      </span>
    </div>
  );
};

export default Column;
