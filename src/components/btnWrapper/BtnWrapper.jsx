import React from 'react';
import Button from '../btnCnt/Button';

const btnArr = [
  7,
  8,
  9,
  'DEL',
  4,
  5,
  6,
  '+',
  1,
  2,
  3,
  '-',
  '.',
  0,
  '/',
  'x',
  'RESET',
  '=',
];

const BtnWrapper = () => {
  return (
    <div>
      {btnArr?.map((item, i) => {
        return (
          <div key={i}>
            <Button />
          </div>
        );
      })}
    </div>
  );
};

export default BtnWrapper;
