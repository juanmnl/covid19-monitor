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

  const dataTotals = {
    confirmed: 260,
    deaths: 4,
    surveillance: 746,
    suspicious: 481,
    negatives: 336,
    recoveries: 3
  };

  return (
    <>
      <p>
        <small>
          Última actualización: 19.03 | 16:10 |{' '}
          <a href="https://twitter.com/Riesgos_Ec">RIESGOS EC</a>
        </small>
      </p>
      <StatGrid>
        <StatBlock>
          <p>{dataTotals.confirmed}</p>
          <h3>Confirmados</h3>
        </StatBlock>
        <StatBlock>
          <p>{dataTotals.deaths}</p>
          <h3>Decesos</h3>
        </StatBlock>
        <StatBlock>
          <p>{dataTotals.surveillance}</p>
          <h3>Cerco</h3>
        </StatBlock>
        <StatBlock>
          <p>{dataTotals.suspicious}</p>
          <h3>Sospecha</h3>
        </StatBlock>
        <StatBlock>
          <p>{dataTotals.negatives}</p>
          <h3>Descartados</h3>
        </StatBlock>
        <StatBlock>
          <p>{dataTotals.recoveries}</p>
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
