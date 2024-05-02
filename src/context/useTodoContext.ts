import { useContext } from 'react';
import { Context } from './context';

export const useTodoContext = () => useContext(Context);