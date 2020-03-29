import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    border: 8px solid rgb(0, 255, 81);
    border-top: rgb(0, 255, 34);
    border-bottom: rgb(0, 255, 21);
  }
  40% {
    border: 8px solid rgb(0, 0, 255);
    border-top: rgb(43, 43, 245);
    border-bottom: rgb(62, 62, 197);
  }
  50% {
    border: 8px solid rgb(140, 0, 255);
    border-top: rgb(162, 0, 255);
    border-bottom: rgb(140, 0, 255);
  }
  75% {
    border: 8px solid rgb(255, 0, 221);
    border-top: rgb(255, 0, 255);
    border-bottom: rgb(255, 0, 234);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  border: 8px solid rgb(0, 255, 234);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 50px auto;
  border-top: blue;
  border-bottom: blue;
  animation: ${spin} 2s linear infinite;

  .spinning-loader--hide {
    opacity: 0;
  }
`;

const Loader = () => <Container className="spinning-loader" />;

export default Loader;
