import React, { useState } from 'react';
import { createContext } from 'react';

export const globalContext = createContext();

const DataProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const [cal, setCal] = useState({
    numOne: '',
    numTwo: '',
    sign: '',
    res: '',
    err: '',
  });

  const controlNum = (value) => {
    !cal.sign
      ? setCal({ ...cal, numOne: cal.numOne + value, err: '' })
      : setCal({ ...cal, numTwo: cal.numTwo + value, err: '' });
  };

  console.log(cal.numOne);
  console.log(cal.numTwo);

  const detectSign = (value) => {
    if (
      ((value == '+' || value == '-' || value == 'x' || value == '/') &&
        cal.numOne != '') ||
      cal.numTwo != ''
    ) {
      setCal({ ...cal, sign: value, err: '' });
    } else {
      setCal({ ...cal, err: 'put integer' });
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

  const toggleOn = () => {
    !isActive ? setIsActive(true) : setIsActive(false);
  };

  return (
    <globalContext.Provider
      value={{
        controlNum,
        evaluteFunction,
        detectSign,
        resetFunction,
        cancelBtn,
        toggleOn,
        cal,
        isActive,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default DataProvider;
