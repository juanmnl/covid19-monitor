import React, { useLayoutEffect, useState } from 'react';

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export function ShowWindowDimensions() {
  const [width, height] = useWindowSize();
  return (
    <small>
      Window size: {width} x {height}
    </small>
  );
}
