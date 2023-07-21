import React, { useContext } from 'react';
import { globalContext } from '../../dataContext/DataProvider';

import './btnStyle.css';

const Button = ({ item }) => {
  const {
    controlNum,
    detectSign,
    evaluteFunction,
    resetFunction,
    cancelBtn,
    isActive,
  } = useContext(globalContext);

  return (
    <button
      id={
        isActive && item != '=' && item != 'RESET'
          ? 'btnOff'
          : item != '=' && item != 'RESET'
      }
      className={item == '=' ? 'equals' : item == 'RESET' ? 'reset' : 'num-btn'}
      onClick={() => {
        item == '+' || item == '-' || item == 'x' || item == '/'
          ? detectSign(item)
          : item == 'RESET'
          ? resetFunction(item)
          : item == '='
          ? evaluteFunction()
          : item == 'DEL'
          ? cancelBtn(item)
          : controlNum(item);
      }}
      value={item}
    >
      {item}
    </button>
  );
};

export default Button;
