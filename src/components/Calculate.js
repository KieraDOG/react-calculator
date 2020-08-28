import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';
import calculate from '../utils/calculate';

const Button = styled(Cell)`
  color: white;
  background: #4285f4;
`;

const Calculate = ({ 
  input,
  setResult,
}) => (
  <Button onClick={() => setResult(calculate(input))}>
    =
  </Button>
);

export default Calculate;
