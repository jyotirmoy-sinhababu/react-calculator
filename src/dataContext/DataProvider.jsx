import React, { useState } from 'react';
import { createContext } from 'react';

export const globalContext = createContext();

const DataProvider = ({ children }) => {
  const [cal, setCal] = useState({
    numOne: '',
    numTwo: '',
    sign: '',
    res: '',
  });

  const controlNum = (value) => {
    !cal.sign
      ? setCal({ ...cal, numOne: cal.numOne + value })
      : setCal({ ...cal, numTwo: cal.numTwo + value });
  };

  console.log(cal.numOne);
  console.log(cal.numTwo);

  const detectSign = (value) => {
    if (value == '+' || value == '-' || value == 'x' || value == '/') {
      setCal({ ...cal, sign: value });
    }
  };

  const evaluteFunction = () => {
    if (cal.sign && cal.numOne && cal.numTwo) {
      if (cal.sign == '+') {
        setCal({ ...cal, res: +cal.numOne + +cal.numTwo });
      }
      if (cal.sign == '-') {
        setCal({ ...cal, res: +cal.numOne - +cal.numTwo });
      }
      if (cal.sign == 'x') {
        setCal({ ...cal, res: +cal.numOne * +cal.numTwo });
      }
      if (cal.sign == '/') {
        setCal({ ...cal, res: +cal.numOne / +cal.numTwo });
      }
    }
  };
  console.log(cal.res);

  const resetFunction = (reset) => {
    if (reset) {
      setCal({ ...cal, numOne: '', numTwo: '', sign: '', res: '' });
    }
  };

  const cancelBtn = (del) => {
    if (del && cal.numOne) {
      setCal({ ...cal, numOne: cal.numOne.slice(0, -1), sign: '' });
    }
    if (del && cal.numTwo) {
      setCal({ ...cal, numTwo: cal.numTwo.slice(0, -1) });
    }
  };

  return (
    <globalContext.Provider
      value={{
        controlNum,
        evaluteFunction,
        detectSign,
        resetFunction,
        cal,
        cancelBtn,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default DataProvider;
