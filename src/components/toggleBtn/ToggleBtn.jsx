import React, { useContext } from 'react';
import { globalContext } from '../../dataContext/DataProvider';

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const ToggleBtn = () => {
  const { isActive, setIsActive } = useContext(globalContext);
  return (
    <div>
      <button>
        {!isActive ? <BsArrowLeftCircleFill /> : <BsArrowRightCircleFill />}
      </button>
    </div>
  );
};

export default ToggleBtn;
