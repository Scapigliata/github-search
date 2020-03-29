import React from 'react';
import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  justify-content: center;
`;

export default ({ children }) => {
  return <Column>{children}</Column>;
};
