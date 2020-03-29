import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Header = () => {
  return (
    <Container>
      <p>Github Search</p>
    </Container>
  );
};

export default Header;
