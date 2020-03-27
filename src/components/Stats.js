import React from 'react';
import useStats from '../hooks/useStats';
import { StatGrid, StatBlock } from '../components/StyledStats';
import { useTranslation } from 'react-i18next';

export default function Stats({ url }) {
  const { t } = useTranslation();
  const nf = Intl.NumberFormat();
  const { stats, loading, error } = useStats(url);
  if (loading) return <p>{t('loading.label')}Loading...</p>;
  if (error) return <p>{t('error.label')}Something went wrong</p>;
  return (
    <>
      <p>
        <small>
          {t('updateDate.label')} <em>{stats.lastUpdate}</em>
        </small>
      </p>
      <StatGrid>
        <StatBlock>
          <p>{nf.format(stats.confirmed.value)}</p>
          <h3>{t('confirmed.label')}</h3>
        </StatBlock>
        <StatBlock>
          <p>{nf.format(stats.deaths.value)}</p>
          <h3>{t('deaths.label')}</h3>
        </StatBlock>
        <StatBlock>
          <p>{nf.format(stats.recovered.value)}</p>
          <h3>{t('recoveries.label')}</h3>
        </StatBlock>
      </StatGrid>
    </>
  );
}
