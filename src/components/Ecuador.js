import React from 'react';
import { withTranslation } from 'react-i18next';
import { useStats } from '../hooks/statsContext';
import {
  HeaderContainer,
  StatGrid,
  StatBlock,
  TwoCols,
  Row,
  Separator
} from '../components/StyledStats';

const Ecuador = ({ t }) => {
  const { provinces, lastDayTotals } = useStats();
  const sortedProvinces = provinces.sort((a, b) => {
    return b.confirmed - a.confirmed;
  });

  const dateInArray = lastDayTotals.date.split('-');
  const date = `${dateInArray[2]}.${dateInArray[1]}`;
  var result = (lastDayTotals.confirmed / lastDayTotals.tests) * 100;

  return (
    <>
      <p>
        <small>
          {t('updateDate.label')} {date} | {lastDayTotals.time} |{' '}
          {t('source.label')}{' '}
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
          <p>{lastDayTotals.confirmed}</p>
          <h3>{t('confirmed.label')}</h3>
        </StatBlock>
        <StatBlock>
          <p>{lastDayTotals.deaths}</p>
          <h3>{t('deaths.label')}</h3>
        </StatBlock>
        <StatBlock>
          <p>{lastDayTotals.suspicious}</p>
          <h3>{t('suspicious.label')}</h3>
        </StatBlock>
        <StatBlock>
          <p>{lastDayTotals.negatives}</p>
          <h3>{t('negatives.label')}</h3>
        </StatBlock>
        <StatBlock>
          <p>{lastDayTotals.recoveries}</p>
          <h3>{t('recoveries.label')}</h3>
        </StatBlock>
        <StatBlock>
          <p>{lastDayTotals.tests}</p>
          <h3>{t('test.label')}</h3>
        </StatBlock>
        <StatBlock>
          <p>{result.toFixed(2)}% </p>
          <h3>{t('rate.label')}</h3>
        </StatBlock>
      </StatGrid>
      <HeaderContainer>
        <h4>{t('confirmedPerRegion.label')}</h4>
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
