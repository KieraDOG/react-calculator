import React from 'react';
import styled from 'styled-components';
import { METHOD_TO_STRING_MAP } from '../constants';

const Display = styled.div`
  border: 0;
  width: 330px;
  margin: 5px;
  height: 50px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid #dadada;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10px;
`;

const Result = ({
  result,
  input,
}) => (
  <Display>
    {input.length ? input.map((i) => {
      if (typeof i === 'function') {
        return METHOD_TO_STRING_MAP[i];
      }

      return i;
    }) : result}
  </Display>
);

export default Result;
