import React from 'react';
import Map from './MapGL';
import SubScreen from './SubScreen';

export default function MapChart() {
  return (
    <>
      <SubScreen />
      <Map lat={-1.78} lng={-78.5} z={6.3} />
    </>
  );
}
