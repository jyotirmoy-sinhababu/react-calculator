import React, { useContext } from 'react';
import { globalContext } from '../../dataContext/DataProvider';

const Button = ({ item }) => {
  const { controlNum, detectSign, evaluteFunction, resetFunction } =
    useContext(globalContext);

  return (
    <div>
      <button
        className={
          item == '=' ? 'equals' : item == 'RESET' ? 'reset' : 'num-btn'
        }
        onClick={() => {
          item == '+' || item == '-' || item == 'x' || item == '/'
            ? detectSign(item)
            : item == 'RESET'
            ? resetFunction(item)
            : item == '='
            ? evaluteFunction()
            : controlNum(item);
        }}
        value={item}
      >
        {item}
      </button>
    </div>
  );
};

export default Button;
