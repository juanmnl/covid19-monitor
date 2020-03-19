import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import data from '../db/EcuadorData';

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const provinces = data;
const sortedProvinces = provinces.sort((a, b) => {
  return b.confirmed - a.confirmed;
});

var confirmedProvinces = [];

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
                fill="hsla(50, 100%, 54%, 1.0)"
                fillOpacity="0.6"
              />
              <text
                x="20"
                y="24"
                fontFamily="sans-serif"
                fontSize="16px"
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
