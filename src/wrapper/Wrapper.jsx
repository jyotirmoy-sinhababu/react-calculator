import React, { useContext } from 'react';
import { globalContext } from '../dataContext/DataProvider';
import BtnWrapper from '../components/btnWrapper/BtnWrapper';
import Screen from '../components/screen/Screen';
import ToggleBtn from '../components/toggleBtn/ToggleBtn';

import './wrapperStyle.css';

const Wrapper = () => {
  const { isActive } = useContext(globalContext);
  return (
    <div className='wrapper-box '>
      <ToggleBtn />
      <div className={`wrapper ${isActive ? 'wrapperOn' : 'wrapperOff'}`}>
        <Screen />
        <BtnWrapper />
      </div>
    </div>
  );
};

export default Wrapper;
