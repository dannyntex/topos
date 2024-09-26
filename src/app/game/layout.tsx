import Navbar from '@/components/Navbar';
import React from 'react';



const GameLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar className='text-white text-3xl'>
        <p className=" basis-1/2"><i className="las la-user-circle"></i>
        User</p>
        <p className=" basis-1/2">Level</p>
      </Navbar>
      {children}
    </div>
  );
};

export default GameLayout;
