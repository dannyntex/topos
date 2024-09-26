'use client';
import React, { useState } from 'react';
import Button from './Button';

const Form: React.FC = () => {
  const [nameUser, setNameUser] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameUser(e.target.value);
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nameUser) {
      setError('Por favor, ingrese un nombre');
      return;
    } else {
      localStorage.setItem('nameUser', nameUser);
      setNameUser('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className='relative block'>
          <input
            className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
            value={nameUser}
            placeholder='Name'
            onChange={handleInputChange}
          />
        </label>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <Button />
        </div>
      </form>
    </div>
  );
};
export default Form;
