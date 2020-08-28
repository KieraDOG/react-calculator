import React from 'react';
import Cell from './Cell';

const Input = ({
  value,
  setInput,
}) => (
  <Cell onClick={() => setInput(value)}>
    {value}
  </Cell>
);

export default Input;
