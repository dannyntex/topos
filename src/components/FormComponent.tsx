'use client';
import React, { useState, useCallback } from 'react';
import Button from './Button';

export interface FormProps {
  href: string;
  placeholder?: string;
  buttonText?: string;
  inputKey: string;
  ariaLabel?: string;
}

const FormComponent: React.FC<FormProps> = ({
  href,
  placeholder = 'Ingresa un valor',
  buttonText = 'Enviar',
  inputKey,
  ariaLabel='Ingresa un valor'
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInputValue(value);
      setIsDisabled(value.length === 0);
      setError(null);
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!inputValue) {
        setError('Por favor, ingrese un valor');
        return;
      }
      localStorage.setItem(`formInput-${inputKey}`, inputValue);
      window.location.href = href;
      setInputValue('');
      setIsDisabled(true);
    },
    [inputValue, href, inputKey]
  );

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='w-full max-w-md p-4 flex flex-col items-center'
      >
        <label className='block w-full'>
          <input
            type='text'
            value={inputValue}
            aria-label={ariaLabel}
            placeholder={placeholder}
            onChange={handleInputChange}
            className='placeholder:italic placeholder:text-slate-400 block bg-white w-full dark:text-black border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
          />
        </label>
        {error && <p className='text-red-500 mt-2'>{error}</p>}
        <div className='mt-4'>
          <Button
            text={buttonText}
            isDisabled={isDisabled}
            className={`px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-300 ${
              isDisabled
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          />
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
