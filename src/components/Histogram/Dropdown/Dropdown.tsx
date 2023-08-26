import { PeriodsNames, periodsNames } from '../data';
import { Dispatch, SetStateAction, useState } from 'react';
import DropdownButton from './DropdownButton/DropdownButton';

interface DropdownProps {
  setCurrentPeriodName: Dispatch<SetStateAction<string>>;
  currentPeriodName: string;
}

const Dropdown = ({ setCurrentPeriodName, currentPeriodName }: DropdownProps) => {
  const [isPeriodsNamesOpen, setIsPeriodsNamesOpen] = useState(false);

  const handleClose = () => {
    setIsPeriodsNamesOpen(false);
  };

  const handleSelectClick = () => {
    setIsPeriodsNamesOpen(!isPeriodsNamesOpen);
  };

  const handleOptionClick = (period: string) => {
    setCurrentPeriodName(period);
    handleClose();
  };

  return (
    <>
      <div className="absolute w-full h-full" onClick={handleClose} />
      <div className="max-w-[380px] w-full ml-auto mb-[28px] bg-white text-[24px] relative">
        <DropdownButton
          handleClick={handleSelectClick}
          periodName={PeriodsNames[currentPeriodName]}
          isMainButton
          isPeriodsNamesOpen={isPeriodsNamesOpen}
        />

        <div
          className={`w-full outline -outline-offset-1 outline-2 outline-accent rounded-[28px] bg-white transition-opacity duration-300 ${
            isPeriodsNamesOpen ? 'absolute visible opacity-100' : 'invisible opacity-0 h-0'
          }`}
        >
          {periodsNames
            .filter((name) => name !== currentPeriodName)
            .map((name) => (
              <DropdownButton
                key={name}
                handleClick={() => handleOptionClick(name)}
                periodName={PeriodsNames[name]}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
