import React, { useContext } from 'react';
import { globalContext } from '../../dataContext/DataProvider';

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './toggleBtnStyle.css';

const ToggleBtn = () => {
  const { isActive, toggleOn } = useContext(globalContext);
  return (
    <div className='toggleBtn-cnt'>
      <div>
        <p>change theme</p>
      </div>
      <button
        onClick={toggleOn}
        className={`toggleBtn ${!isActive ? 'toggleBtn' : 'on'}`}
      >
        {!isActive ? <BsArrowRightCircleFill /> : <BsArrowLeftCircleFill />}
      </button>
    </div>
  );
};

export default ToggleBtn;
