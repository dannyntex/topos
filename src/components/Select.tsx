import React, { FC, SelectHTMLAttributes } from 'react';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
    name: string;
    showArrow?: boolean;
}

const Select: FC<SelectProps> = ({
  className = '',
  children,
  name,
  showArrow = false,
  ...args
}) => {
  return (
    <label className=' basis-2/5 text-lg justify-self-end'>
      {name}
      <select
        className={ className}
        {...args}
      >
        {children}
      </select>
      {showArrow && (
        <div className='pointer-events-none absolute inset-y-0 right-6 flex items-center px-2 text-gray-700'>
          <svg
            className='h-4 w-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M19 9l-7 7-7-7'
            ></path>
          </svg>
        </div>
      )}
    </label>
  );
};

export default Select;
