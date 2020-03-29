import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

export default ({ children }) => {
  return <Row>{children}</Row>;
};
