import React, { useState } from 'react';
import { createContext } from 'react';

export const globalContext = createContext();

const DataProvider = ({ children }) => {
  const [cal, setCal] = useState({
    num: '',

    res: '',
  });

  const controlNum = (value) => {
    setCal({
      ...cal,
      num: cal.num === 0 && value === 0 ? 0 : cal.num + value,
    });
  };
  console.log(cal.num);

  return (
    <globalContext.Provider value={{ controlNum }}>
      {children}
    </globalContext.Provider>
  );
};

export default DataProvider;
