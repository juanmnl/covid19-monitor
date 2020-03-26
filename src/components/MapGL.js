import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import data from '../db/EcuadorData';

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const provinces = data;
const sortedProvinces = provinces.sort((a, b) => {
  return b.confirmed - a.confirmed;
});

let confirmedProvinces = [];

sortedProvinces.forEach(province => {
  if (province.confirmed > 0) {
    confirmedProvinces.push(province);
  }
});

export default function Map({ lat, lng, z, isSmallSize }) {
  useEffect(() => {
    setViewport({
      latitude: lat,
      longitude: lng,
      zoom: z
    });
  }, [lat, lng, z]);

  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lng,
    zoom: z
  });

  return (
    <ReactMapGL
      dragPan={true}
      scrollZoom={false}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/juanmnl/ck7spea0200we1inzkgusnusr"
      mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
      {...viewport}
      onViewportChange={setViewport}
    >
      {confirmedProvinces.map(point => {
        return (
          <Marker
            key={point.name}
            latitude={point.coord.lat}
            longitude={point.coord.lng}
          >
            {point.status === 'alert' && (
              <svg
                className="on"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="50"
                  fill="hsla(0, 100%, 67%, 1)"
                  fillOpacity="0.8"
                />
                <text
                  x="50"
                  y="57"
                  fontFamily="sans-serif"
                  fontSize="22px"
                  fill="black"
                  textAnchor="middle"
                >
                  {point.confirmed}
                </text>
              </svg>
            )}
            {point.status === 'warning' && (
              <svg
                className="on"
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="35"
                  cy="35"
                  r="35"
                  fill="hsla(25, 100%, 67%, 1)"
                  fillOpacity="0.8"
                />
                <text
                  x="35"
                  y="42"
                  fontFamily="sans-serif"
                  fontSize="20px"
                  fill="black"
                  textAnchor="middle"
                >
                  {point.confirmed}
                </text>
              </svg>
            )}
            {point.status === 'caution' && (
              <svg
                className="on"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="30"
                  cy="30"
                  r="30"
                  fill="hsla(59, 100%, 67%, 1)"
                  fillOpacity="0.8"
                />
                <text
                  x="30"
                  y="36"
                  fontFamily="sans-serif"
                  fontSize="16"
                  fill="black"
                  textAnchor="middle"
                >
                  {point.confirmed}
                </text>
              </svg>
            )}
            {point.status === null && (
              <svg
                className="on"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="20"
                  fill="hsla(163, 72%, 48%, 1)"
                  fillOpacity="0.8"
                />
                <text
                  x="20"
                  y="25"
                  fontFamily="sans-serif"
                  fontSize="16"
                  fill="black"
                  textAnchor="middle"
                >
                  {point.confirmed}
                </text>
              </svg>
            )}
          </Marker>
        );
      })}
    </ReactMapGL>
  );
}
