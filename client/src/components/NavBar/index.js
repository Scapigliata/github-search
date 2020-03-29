import React from 'react';
import styled from 'styled-components';
import { md } from '../../styles/sizes';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const NavBar = () => {
  return (
    <Container>
      <p>Navbar</p>
      <Link to="/">Public</Link>
      <Link to="/starred">Starred</Link>
    </Container>
  );
};

export default NavBar;
