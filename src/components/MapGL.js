import React, { useState } from 'react';
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

export default function Map({ lat, lng, z }) {
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
            className="on"
            latitude={point.coord.lat}
            longitude={point.coord.lng}
          >
            <svg
              width={point.status === 'alert' ? '80' : '40'}
              height={point.status === 'alert' ? '80' : '40'}
              viewBox={point.status === 'alert' ? '0 0 80 80' : '0 0 40 40'}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx={point.status === 'alert' ? '40' : '20'}
                cy={point.status === 'alert' ? '40' : '20'}
                r={point.status === 'alert' ? '40' : '20'}
                fill={
                  point.status === 'alert'
                    ? 'hsla(0, 100%, 67%, 8.0)'
                    : 'hsla(50, 100%, 54%, 8.0)'
                }
                fillOpacity="0.6"
              />
              <text
                x={point.status === 'alert' ? '40' : '20'}
                y={point.status === 'alert' ? '45' : '25'}
                fontFamily="sans-serif"
                fontSize={point.status === 'alert' ? '18px' : '16px'}
                fill="black"
                textAnchor="middle"
              >
                {point.confirmed}
              </text>
            </svg>
          </Marker>
        );
      })}
    </ReactMapGL>
  );
}
