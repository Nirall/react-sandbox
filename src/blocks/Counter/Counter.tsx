import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <p className="counter__text">
        Вы нажали
        {' '}
        { count }
        {' '}
        раз
      </p>
      <button type="button" className="counter__button" onClick={() => setCount(count + 1)}>Press</button>
    </div>
  );
};

export default Counter;
