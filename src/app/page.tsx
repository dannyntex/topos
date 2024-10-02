'use client';
import React from 'react';
import FormComponent from '@/components/FormComponent';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registrado con éxito:', registration);
          })
          .catch((error) => {
            console.log('Error al registrar el Service Worker:', error);
          });
      });
    }
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <i className="las la-mouse text-6xl"></i>
        <FormComponent href='/game' placeholder='Name' buttonText='Join' inputKey='userName' ariaLabel='Nombre de usuario'/>

      </main>
      <footer className=" text-gray-300 row-start-3 flex gap-6 flex-wrap items-center justify-center">
       Jose Pedro Valiente
      </footer>

    </div>
  );
}
