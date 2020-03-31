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
  const {
    provinces,
    lastDayTotals,
    prevDayTotals,
    beforeYesterdayTotals
  } = useStats();

  const sortedProvinces = provinces.sort((a, b) => {
    return b.confirmed - a.confirmed;
  });

  const dateInArray = lastDayTotals.date.split('-');
  const date = `${dateInArray[2]}.${dateInArray[1]}`;
  var confirmedDiff = lastDayTotals.confirmed - prevDayTotals.confirmed;
  var deathsDiff = lastDayTotals.deaths - prevDayTotals.deaths;
  var suspiciousDiff = lastDayTotals.suspicious - prevDayTotals.suspicious;
  var negativesDiff = lastDayTotals.negatives - prevDayTotals.negatives;
  var recoveriesDiff = lastDayTotals.recoveries - prevDayTotals.recoveries;
  var testsDiff = lastDayTotals.tests - prevDayTotals.tests;

  var analysisDiff =
    lastDayTotals.tests -
    (lastDayTotals.negatives + lastDayTotals.confirmed) -
    (prevDayTotals.tests - (prevDayTotals.negatives + prevDayTotals.confirmed));

  var prevAnalysisDiff =
    prevDayTotals.tests -
    (prevDayTotals.negatives + prevDayTotals.confirmed) -
    (beforeYesterdayTotals.tests -
      (beforeYesterdayTotals.negatives + beforeYesterdayTotals.confirmed));

  var analizedToday = lastDayTotals.tests - prevDayTotals.tests - analysisDiff;

  var analyzedYesterday =
    prevDayTotals.tests - beforeYesterdayTotals.tests - prevAnalysisDiff;

  var analyzedTodayDiff = analizedToday - analyzedYesterday;

  var inAnalysis =
    lastDayTotals.tests - (lastDayTotals.negatives + lastDayTotals.confirmed);

  var positiveRatio =
    (lastDayTotals.confirmed /
      (lastDayTotals.negatives + lastDayTotals.confirmed)) *
    100;

  var prevPositiveRatio =
    (beforeYesterdayTotals.confirmed /
      (beforeYesterdayTotals.negatives + beforeYesterdayTotals.confirmed)) *
    100;

  var ratioDiff = positiveRatio - prevPositiveRatio;

  var isPositive = val => {
    if (val === 0) {
      return null;
    } else if (val < 0) {
      return false;
    } else {
      return true;
    }
  };

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
          <span>
            {isPositive(confirmedDiff) ? '+' : '-'}
            {confirmedDiff}
          </span>
          <p>{lastDayTotals.confirmed}</p>
          <h3>{t('confirmed.label')}</h3>
        </StatBlock>
        <StatBlock>
          <span>
            {isPositive(deathsDiff) ? '+' : '-'}
            {deathsDiff}
          </span>

          <p>{lastDayTotals.deaths}</p>
          <h3>{t('deaths.label')}</h3>
        </StatBlock>
        <StatBlock>
          <span>
            {isPositive(deathsDiff) ? '+' : '-'}
            {suspiciousDiff}
          </span>

          <p>{lastDayTotals.suspicious}</p>
          <h3>{t('suspicious.label')}</h3>
        </StatBlock>
        <StatBlock>
          <span>
            {isPositive(negativesDiff) ? '+' : '-'}
            {negativesDiff}
          </span>
          <p>{lastDayTotals.negatives}</p>
          <h3>{t('negatives.label')}</h3>
        </StatBlock>
        <StatBlock>
          <span>
            {isPositive(recoveriesDiff) ? '+' : '-'}
            {recoveriesDiff}
          </span>
          <p>{lastDayTotals.recoveries}</p>
          <h3>{t('recoveries.label')}</h3>
        </StatBlock>
      </StatGrid>

      <StatGrid>
        <StatBlock>
          <span>
            {isPositive(testsDiff) ? '+' : ''}
            {testsDiff}
          </span>
          <p>{lastDayTotals.tests}</p>
          <h3>{t('test.label')}</h3>
        </StatBlock>
        <StatBlock>
          <span>
            {isPositive(analyzedTodayDiff) ? '+' : ''}
            {analyzedTodayDiff}
          </span>
          <p>{analizedToday}</p>
          <h3>{t('today.label')}</h3>
        </StatBlock>
        <StatBlock>
          <span>
            {isPositive(analysisDiff) ? '+' : ''}
            {analysisDiff}
          </span>
          <p>{inAnalysis}</p>
          <h3>{t('testInProgress.label')}</h3>
        </StatBlock>
        <StatBlock>
          <span>
            {isPositive(ratioDiff) ? '+' : ''}
            {ratioDiff.toFixed(2)}%
          </span>
          <p>{positiveRatio.toFixed(2)}% </p>
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
