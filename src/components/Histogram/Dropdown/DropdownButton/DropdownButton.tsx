import Image from 'next/image';

interface DropdownButtonProps {
  handleClick: () => void;
  periodName: string;
  isPeriodsNamesOpen?: boolean;
  isMainButton?: boolean;
}

const DropdownButton = ({
  handleClick,
  periodName,
  isPeriodsNamesOpen,
  isMainButton,
}: DropdownButtonProps) => {
  return (
    <button
      className={`flex items-center w-full text-left bg-white rounded-[28px] ${
        isMainButton ? 'max-w-[380px] outline -outline-offset-1 outline-2 outline-accent' : ''
      }`}
      type="button"
      onClick={handleClick}
    >
      <span className="flex justify-between py-[9px] pl-[20px] pr-[16px] flex-1 leading-[30px] hover:text-accent trnsition-all duration-300">
        {periodName}

        {isMainButton && (
          <Image
            className={`transition-all duration-300 ${
              isPeriodsNamesOpen ? '' : 'scale-x-100 -scale-y-100'
            }`}
            src="/icons/arrow.svg"
            alt=""
            width={24}
            height={24}
          />
        )}
      </span>
    </button>
  );
};

export default DropdownButton;
