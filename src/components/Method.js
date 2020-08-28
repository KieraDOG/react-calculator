import React from 'react';
import Cell from './Cell';
import { METHOD_TO_STRING_MAP } from '../constants';

const Method = ({ fn, setInput }) => (
  <Cell onClick={() => setInput(fn)}>
    {METHOD_TO_STRING_MAP[fn]}
  </Cell>
);

export default Method;
