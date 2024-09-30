'use client';
import React, { useEffect, useRef, useState } from 'react';
import { points } from '@/constants';
import Button from '@/components/Button';
import Image from 'next/image';


const Game = () => {
  const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  const [randomNumber, setRandomNumber] = useState<[number, number]>([-1, -1]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [score, setScore] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [twoTodos, setTwoTodos] = useState<boolean>(false);
  const imageTopo = <Image src="/topo.png" alt="Topo" width={96} height={96} />;


  const generateTwoUniqueRandomNumbers = () => {
    const firstNumber = Math.floor(Math.random() * 9);
    let secondNumber: number | null = null;
    if (twoTodos) {
      do {
        secondNumber = Math.floor(Math.random() * 9);
      } while (secondNumber === firstNumber);
    }

    return [firstNumber, secondNumber];
  };
  const startBoxPositionBySeconds = () => {
    intervalRef.current = setInterval(() => {
      const [firstNumber, secondNumber] = generateTwoUniqueRandomNumbers();
      const newBoard = Array(9).fill(null);
      if (firstNumber !== null) { newBoard[firstNumber] = imageTopo; }
      if (secondNumber !== null){newBoard[secondNumber] = imageTopo;}
        
      setGameBoard(newBoard);
      setRandomNumber([firstNumber ?? -1, secondNumber ?? -1]);
      setIsDisabled(true);
    }, 1000);
    setIsGameStarted(true);
  };

  const stopBoxPosition = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      const newBoard = Array(9).fill(null);
      setGameBoard(newBoard);
    }
    setIsGameStarted(false);
  };

  const togleButton = () => {
    if (isGameStarted) {
      stopBoxPosition();
    } else {
      startBoxPositionBySeconds();
    }
  };

  const handleScore = () => {
    setScore(score + 10);
    setIsDisabled(false);
  };

  useEffect(() => {
    return () => {
      stopBoxPosition();
    };
  }, []);

  const handleNumberTopos = () => {
    setTwoTodos(!twoTodos);
    stopBoxPosition();
  };



  return (
    <div>     
      <h1 className='text-center text-xl font-bold mb-8'>Point: {score}</h1>
      <div className='grid grid-cols-3 gap-3 justify-center'>
        {gameBoard.map((box, index) => (
          <div
            key={index}
            className={'border-black border-2 w-24 h-24 flex items-center justify-center rounded-md shadow-md'}
            onClick={
              randomNumber?.includes(index) && isDisabled ? handleScore : undefined
            }
          >
            {box}
          </div>
        ))}
      </div>
      <div className='text-center mt-4'>
        <Button
          className='bg-blue-600 text-white px-4 py-2 rounded-md mt-4 mr-4'
          onClick={togleButton}
          text={isGameStarted ? 'Stop' : 'Start'}
        />

        <Button
          className='bg-red-600 text-white px-4 py-2 rounded-md mt-4 mr-4'
          onClick={() => setScore(0)}
          text='reset'
        />
        <Button  className='bg-orange-600 text-white px-4 py-2 rounded-md mt-4 mr-4' text={twoTodos ? '1 Topo' : '2 Topos'} onClick={handleNumberTopos } />
      </div>
    </div>
  );
};

export default Game;
