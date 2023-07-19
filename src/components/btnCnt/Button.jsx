import React, { useContext } from 'react';
import { globalContext } from '../../dataContext/DataProvider';

const Button = ({ item }) => {
  const { controlNum, detectSign, evaluteFunction } = useContext(globalContext);

  return (
    <div>
      <button
        onClick={() => {
          item == '='
            ? evaluteFunction()
            : item == '+' || item == '-' || item == 'x' || item == '/'
            ? detectSign(item)
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
