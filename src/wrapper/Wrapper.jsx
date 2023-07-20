import React from 'react';
import BtnWrapper from '../components/btnWrapper/BtnWrapper';
import Screen from '../components/screen/Screen';

import './wrapperStyle.css';

const Wrapper = () => {
  return (
    <div className='wrapper'>
      <Screen />
      <BtnWrapper />
    </div>
  );
};

export default Wrapper;
