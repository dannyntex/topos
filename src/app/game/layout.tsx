//crea un layout para el juego con un navbar y  9 cuadrrados vacios  para el juego en 3 filas y 3 columnas


import React from 'react';



const GameLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {children}
    </div>
  );
};

export default GameLayout;
