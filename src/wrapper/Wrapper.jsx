import React from 'react';
import BtnWrapper from '../components/btnWrapper/BtnWrapper';
import Screen from '../components/screen/Screen';
import ToggleBtn from '../components/toggleBtn/ToggleBtn';

import './wrapperStyle.css';

const Wrapper = () => {
  return (
    <div className='wrapper-box'>
      <ToggleBtn />
      <div className='wrapper'>
        <Screen />
        <BtnWrapper />
      </div>
    </div>
  );
};

export default Wrapper;
