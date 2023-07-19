import React from 'react';

const Button = ({ item }) => {
  return (
    <div>
      <button onClick={() => console.log(item)} value={item}>
        {item}
      </button>
    </div>
  );
};

export default Button;
