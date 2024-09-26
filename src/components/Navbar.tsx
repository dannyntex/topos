import React, { FC } from 'react';

export interface NavbarProps {
  containerClassName?: string;
  className?: string;
  children?: React.ReactNode;
}

const Navbar: FC<NavbarProps> = ({
  containerClassName = '',
  className = '',
  children
}) => {
  return (
    <nav
      className={`bg-indigo-600 w-full fixed top-0 z-10 ${containerClassName}`}
    >
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div
          className={`h-16 ml-6 flex items-center justify-betweenspace-x-4 ${className}`}
        >
          {children}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
