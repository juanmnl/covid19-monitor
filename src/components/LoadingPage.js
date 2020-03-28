import React from 'react';
import styled from 'styled-components';
import Spinner from './Spinner';

const LoadingPanel = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoadingPage = () => (
  <LoadingPanel>
    <Spinner />
  </LoadingPanel>
);

export default LoadingPage;
