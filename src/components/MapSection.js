import React from 'react';
import Map from '../components/MapGL';
import SubScreen from '../components/SubScreen';

function MapSection() {
  return (
    <>
      <SubScreen />
      <Map lat={-1.78} lng={-78.5} z={6.3} />
    </>
  );
}

export default MapSection;
