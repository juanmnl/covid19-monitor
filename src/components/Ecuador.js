import React from 'react';
import data from '../db/EcuadorData';
import {
  StatGrid,
  StatBlock,
  TwoCols,
  Row,
  Separator
} from '../components/StyledStats';

export default function Ecuador() {
  const provinces = data;
  const sortedProvinces = provinces.sort((a, b) => {
    return b.confirmed - a.confirmed;
  });

  return (
    <>
      <StatGrid>
        <StatBlock>
          <p>155</p>
          <h3>Confirmados</h3>
        </StatBlock>
        <StatBlock>
          <p>2</p>
          <h3>Decesos</h3>
        </StatBlock>
        <StatBlock>
          <p>235</p>
          <h3>Sospechas</h3>
        </StatBlock>
        <StatBlock>
          <p>278</p>
          <h3>Descartados</h3>
        </StatBlock>
        <StatBlock>
          <p>n/a</p>
          <h3>Recuperados</h3>
        </StatBlock>
      </StatGrid>
      <hr />

      <h4>Provincias / Confirmados</h4>
      <TwoCols>
        {sortedProvinces.map(province => (
          <Row key={province.id}>
            <span>{province.name}</span>
            <Separator />
            <span>{province.confirmed}</span>
          </Row>
        ))}
      </TwoCols>

      <hr />
    </>
  );
}
