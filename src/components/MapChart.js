import React from 'react';
import Map from './MapGL';
import SubScreen from './SubScreen';
import { useWindowSize } from '../hooks/useWindowSize';

const SM_SCREEN_SIZE = 768;
const LG_SCREEN_SIZE = 1200;
const MONITOR_SM_SIZE = 'small';
const MONITOR_MD_SIZE = 'medium';
const MONITOR_LG_SIZE = 'large';

const zooms = {
  [MONITOR_SM_SIZE]: 5.75,
  [MONITOR_MD_SIZE]: 5.85,
  [MONITOR_LG_SIZE]: 6.3
};

const getSizeScreen = width => {
  if (width <= SM_SCREEN_SIZE) {
    return MONITOR_SM_SIZE;
  }

  if (width <= LG_SCREEN_SIZE && width > SM_SCREEN_SIZE) {
    return MONITOR_MD_SIZE;
  }

  return MONITOR_LG_SIZE;
};

export default function MapChart() {
  const [width] = useWindowSize();
  const size = getSizeScreen(width);
  const isSmallSize = size === MONITOR_SM_SIZE;

  return (
    <>
      {!isSmallSize && (
        <SubScreen zoom={zooms[size]} isSmallSize={isSmallSize} />
      )}
      <Map lat={-1.78} lng={-78.5} z={zooms[size]} isSmallSize={isSmallSize} />
    </>
  );
}
