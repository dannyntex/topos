import { createContext } from 'react';
import { LevelContextType } from './types';

export const LevelContext = createContext<LevelContextType | undefined>(undefined);