import React from 'react';
import Button from '../btnCnt/Button';

import './btnWrapperStyle.css';

const btnArr = [
  '7',
  '8',
  '9',
  'DEL',
  '4',
  '5',
  '6',
  '+',
  '1',
  '2',
  '3',
  '-',
  '.',
  '0',
  '/',
  'x',
  'RESET',
  '=',
];

const BtnWrapper = () => {
  return (
    <div className='buttonBox'>
      {btnArr?.map((item, i) => {
        return <Button key={i} item={item} />;
      })}
    </div>
  );
};

export default BtnWrapper;
