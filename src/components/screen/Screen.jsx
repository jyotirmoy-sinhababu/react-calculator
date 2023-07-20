import React, { useContext } from 'react';
import { globalContext } from '../../dataContext/DataProvider';

import './screenStyle.css';

const Screen = () => {
  const { cal } = useContext(globalContext);

  return (
    <div className='screen'>
      {' '}
      <div className='screen-top'>
        <p>{cal.numOne}</p>
        <p>{cal.sign}</p>
        <p>{cal.numTwo}</p>
        {cal.err ? <p>{cal.err}</p> : null}
      </div>
      <div className='screen-bottom'>
        <p>{cal.res}</p>
      </div>
    </div>
  );
};

export default Screen;
