import { LevelContext } from '@/context';
import { useContext } from 'react';



export const useLevelContext = () => {
  const context = useContext(LevelContext);
  if (!context) {
    throw new Error('useLevelContext must be used within a LevelProvider');
  }
  return context;
};