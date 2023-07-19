import React, { useContext } from 'react';
import { globalContext } from '../../dataContext/DataProvider';

const Button = ({ item }) => {
  const { controlNum } = useContext(globalContext);

  return (
    <div>
      <button
        onClick={() => {
          controlNum(item);
        }}
        value={item}
      >
        {item}
      </button>
    </div>
  );
};

export default Button;
