import React, { useContext } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Spinner from '../components/Spinner';
import useFetch from './useFetch';

const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;

const StatsContext = React.createContext([]);
const StatusPanel = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatsProvider = ({ children }) => {
  const { data, isLoading, isError } = useFetch(
    {
      url:
        'https://api.airtable.com/v0/appo8EvYg4prTdP9h/Table%201?view=Grid%20view',
      apiKey: AIRTABLE_API_KEY
    },
    { records: [] }
  );

  const provinces = data.records.map(item => ({ ...item.fields }));

  const {
    data: dailyRecords,
    isLoading: dailyIsLoading,
    isError: dailyIsError
  } = useFetch(
    {
      url:
        'https://api.airtable.com/v0/appo8EvYg4prTdP9h/Totals?view=Grid%20view',
      apiKey: AIRTABLE_API_KEY
    },
    { records: [] }
  );
  const dailyTotals = dailyRecords.records.map(item => ({
    ...item.fields
  }));

  let lastDayTotals;
  if (dailyTotals.length) {
    lastDayTotals = { ...dailyTotals[dailyTotals.length - 1] };
  } else {
    lastDayTotals = {
      date: '0000-00-00',
      tiime: '00:00',
      confirmed: 0,
      deaths: 0,
      suspicious: 0,
      negatives: 0,
      recoveries: 0,
      tests: 0,
      homeStable: 0,
      hospitalStable: 0,
      reserveState: 0
    };
  }

  const { t } = useTranslation();

  const generalIsLoading = isLoading || dailyIsLoading;
  const generalIsError = isError || dailyIsError;

  const status = generalIsError ? <p>{t('error.label')}</p> : <Spinner />;

  return (
    <StatsContext.Provider
      value={{
        provinces,
        lastDayTotals,
        dailyTotals,
        isLoading: generalIsLoading,
        isError: generalIsError
      }}
    >
      {generalIsLoading || generalIsError ? (
        <StatusPanel>{status}</StatusPanel>
      ) : (
        children
      )}
    </StatsContext.Provider>
  );
};

const useStats = () => {
  const context = useContext(StatsContext);
  if (context === undefined) {
    throw new Error(`useStats must be used within a StatsProvider`);
  }
  return context;
};

export { StatsProvider, useStats };
