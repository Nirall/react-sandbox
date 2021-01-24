import React from 'react';
import * as types from '../../types';

const Greetings = ({ name }: types.GreetingProps) => (
  <h1 className="greetings">
    Hello,
    {' '}
    { name }
  </h1>
);

export default Greetings;
