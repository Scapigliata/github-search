import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: 0;
  background: none;
  border: none;
  color: white;
  text-decoration: underline;
  margin-left: 5px;
  &:focus {
    outline: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: flex-column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: red;
  padding: 1rem;
`;

const ErrorTitle = styled.p`
  color: white;
  margin: 0;
`;

const ErrorMessage = ({ onButtonClick }) => {
  return (
    <Container>
      <ErrorTitle>There was a problem</ErrorTitle>
      <ButtonStyled onClick={onButtonClick}>Try Again!</ButtonStyled>
    </Container>
  );
};

ErrorMessage.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default ErrorMessage;
