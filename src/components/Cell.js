import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 0;
  width: 75px;
  margin: 5px;
  height: 35px;
  border-radius: 4px;
  align-items: center;
  cursor: pointer;
  
  &:hover {
    filter: brightness(0.9);
  }
`;

const Cell = ({
  className,
  children,
  onClick,
}) => (
  <Button className={className} onClick={onClick}>
    {children}
  </Button>
);

export default Cell;
