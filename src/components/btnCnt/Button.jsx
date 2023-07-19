import React from 'react';

const Button = ({ item, onclick }) => {
  return (
    <div>
      <button
        onClick={() => {
          onclick();
        }}
        value={item}
      >
        {item}
      </button>
    </div>
  );
};

export default Button;
