import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const NavBar = () => {
  return (
    <Container>
      <div className="d-flex flex-direction-row justify-content-around">
        <Link to="/">Public</Link>
        <Link to="/starred">Starred</Link>
      </div>
    </Container>
  );
};

export default NavBar;
