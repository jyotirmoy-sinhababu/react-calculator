import React, { useContext } from 'react';
import { globalContext } from '../../dataContext/DataProvider';

const Screen = () => {
  const { cal } = useContext(globalContext);

  return (
    <div>
      {' '}
      <div>
        <p>{cal.numOne}</p>
        <p>{cal.numTwo}</p>
      </div>
      <div>
        <p>{cal.res}</p>
      </div>
    </div>
  );
};

export default Screen;
