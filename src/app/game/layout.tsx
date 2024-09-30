'use client';
import Navbar from '@/components/Navbar';
import React, { useEffect, useState } from 'react';
import { points } from '@/constants';
import { capitalizeFirstLetter } from '@/utils/capitalizeString';
import Select from '@/components/Select';

const GameLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [userName, setUserName] = useState<string | null>(null);
  useEffect(() => {
    const storedName = localStorage.getItem('formInput-userName');
    setUserName(storedName);
  }, []);
  const [level, setLevel] = useState<string>('low');
  const keyLevel = Object.keys(points);
  return (
    <>
      <Navbar className='text-white text-2xl'>
        <p className=' basis-3/5	'>
          <i className='las la-user-circle mr-2 text-3xl'></i>
          {userName}
        </p>
   
        <Select
          className='ml-4 md:ml-8 basis-1/2 text-lg py-2 px-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none text-slate-700'
          aria-label='Level'
          name='Level'
          defaultValue={level}
          onChange={(e) => setLevel(e.target.value)}
          showArrow={true}
        >
          {keyLevel.map((key) => {
            const keyCapitalized = capitalizeFirstLetter(key);
            return (
              <option key={key} value={key}>
                {keyCapitalized}
              </option>
            );
          })}
        </Select>

   
      </Navbar>
      <div className='grid grid-rows-[20px_1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
        <div></div>
        {children}
      </div>
    </>
  );
};

export default GameLayout;
