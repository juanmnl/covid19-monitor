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
    confirmed: 789,
    deaths: 14,
    surveillance: 1347,
    suspicious: 699,
    negatives: 872,
    recoveries: 3,
    tests: 2360
  };

  var result = (dataTotals.confirmed / dataTotals.tests) * 100;

  return (
    <>
      <p>
        <small>
          Última actualización: 22.03 | 11:00am | Fuente:{' '}
          <a href="https://twitter.com/Riesgos_Ec">RIESGOS EC</a>
        </small>
      </p>
      <StatGrid>
        <StatBlock className="warning">
          <p>{dataTotals.confirmed}</p>
          <h3>Confirmados</h3>
        </StatBlock>
        <StatBlock className="danger">
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
        <StatBlock>
          <p>{dataTotals.tests}</p>
          <h3>Pruebas</h3>
        </StatBlock>
        <StatBlock>
          <p>{result.toFixed(2)}% </p>
          <h3>Positivos : Pruebas</h3>
        </StatBlock>
      </StatGrid>
      <br />
      <h4>Provincias / Confirmados</h4>
      <br />
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
