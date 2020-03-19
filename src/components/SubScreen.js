import React from 'react';
import styled from 'styled-components';
import Map from './MapGL';

export default function SubScreen() {
  return (
    <Screen>
      <Map lat={-0.52} lng={-90.34} z={6.1} />
    </Screen>
  );
}

const Screen = styled.section`
  position: absolute;
  padding: 0.5rem;
  font-size: small;
  width: 40%;
  height: 30vh;
  z-index: 10000;
  bottom: 0;
  right: 0;
  border-top: 1px solid var(--color-primary);
  border-left: 1px solid var(--color-primary);
  background-color: var(--color-background);

  @media (max-width: 960px) {
    width: 35%;
    height: 15vh;
    padding: 0rem;
  }
`;
