import React from 'react';
import useFetch from '../hooks/useFetch';
import { StatGrid, StatBlock } from '../components/StyledStats';
import { useTranslation } from 'react-i18next';

export default function Stats({ url }) {
  const { t } = useTranslation();
  const nf = Intl.NumberFormat();
  const { data, isLoading, isError } = useFetch({ url });
  if (isLoading) return <p>{t('loading.label')}</p>;
  if (isError) return <p>{t('error.label')}</p>;
  return (
    <>
      <p>
        <small>
          {t('updateDate.label')} <em>{data.lastUpdate}</em>
        </small>
      </p>
      <StatGrid>
        <StatBlock>
          <p>{nf.format(data.confirmed.value)}</p>
          <h3>{t('confirmed.label')}</h3>
        </StatBlock>
        <StatBlock>
          <p>{nf.format(data.deaths.value)}</p>
          <h3>{t('deaths.label')}</h3>
        </StatBlock>
        <StatBlock>
          <p>{nf.format(data.recovered.value)}</p>
          <h3>{t('recoveries.label')}</h3>
        </StatBlock>
      </StatGrid>
    </>
  );
}
