import React, { useState } from 'react';
import { createContext } from 'react';

export const globalContext = createContext();

const DataProvider = () => {
  const [cal, setCal] = useState({
    num: '',
    sign: '',
    res: '',
  });
  return <globalContext.Provider></globalContext.Provider>;
};
