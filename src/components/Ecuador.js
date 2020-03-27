import React from 'react';
import { withTranslation } from 'react-i18next';
import { useStats } from '../hooks/statsContext';
import {
  ErrorMessage,
  HeaderContainer,
  StatGrid,
  StatBlock,
  TwoCols,
  Row,
  Separator
} from '../components/StyledStats';
import Spinner from './Spinner';

const Ecuador = ({ t }) => {
  const { provinces, isLoading, error } = useStats();
  const sortedProvinces = provinces.sort((a, b) => {
    return b.confirmed - a.confirmed;
  });

  const dataTotals = {
    confirmed: 1627,
    deaths: 41,
    suspicious: 2347,
    negatives: 1941,
    recoveries: 3,
    tests: 5915
  };

  var result = (dataTotals.confirmed / dataTotals.tests) * 100;

  return (
    <>
      <p>
        <small>
          {t('updateDate.label')} 25.03 | 18:30 | {t('source.label')}{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/Riesgos_Ec"
          >
            RIESGOS EC
          </a>
        </small>
      </p>
      <StatGrid>
        <StatBlock>
          <p>{dataTotals.confirmed}</p>
          <h3>{t('confirmed.label')}</h3>
        </StatBlock>
        <StatBlock>
          <p>{dataTotals.deaths}</p>
          <h3>{t('deaths.label')}</h3>
        </StatBlock>
        <StatBlock>
          <p>{dataTotals.suspicious}</p>
          <h3>{t('suspicious.label')}</h3>
        </StatBlock>
        <StatBlock>
          <p>{dataTotals.negatives}</p>
          <h3>{t('negatives.label')}</h3>
        </StatBlock>
        <StatBlock>
          <p>{dataTotals.recoveries}</p>
          <h3>{t('recoveries.label')}</h3>
        </StatBlock>
        <StatBlock>
          <p>{dataTotals.tests}</p>
          <h3>{t('test.label')}</h3>
        </StatBlock>
        <StatBlock>
          <p>{result.toFixed(2)}% </p>
          <h3>{t('rate.label')}</h3>
        </StatBlock>
      </StatGrid>
      <HeaderContainer>
        <h4>{t('confirmedPerRegion.label')}</h4>
        {isLoading && <Spinner />}
        {error && <ErrorMessage>{t('error.label')}</ErrorMessage>}
      </HeaderContainer>
      <TwoCols>
        {sortedProvinces.map(province => (
          <Row key={province.id}>
            <span>{province.name}</span>
            <Separator />
            <span>{province.confirmed}</span>
          </Row>
        ))}
      </TwoCols>
    </>
  );
};

export default withTranslation()(Ecuador);
