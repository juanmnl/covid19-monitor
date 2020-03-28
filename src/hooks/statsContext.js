import React, { useContext } from 'react';
import LoadingPage from '../components/LoadingPage';
import ErrorPage from '../components/ErrorPage';
import useFetch from './useFetch';

const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const PROVINCE_STATS_ENDPOINT = process.env.REACT_APP_PROVINCE_STATS_ENDPOINT;
const TOTAL_STATS_ENDPOINT = process.env.REACT_APP_TOTAL_STATS_ENDPOINT;

const StatsContext = React.createContext([]);

const StatsProvider = ({ children }) => {
  const { data, isLoading, isError } = useFetch(
    {
      url: PROVINCE_STATS_ENDPOINT,
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
      url: TOTAL_STATS_ENDPOINT,
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

  const generalIsLoading = isLoading || dailyIsLoading;
  const generalIsError = isError || dailyIsError;

  if (generalIsError) {
    return <ErrorPage />;
  }

  if (generalIsLoading) {
    return <LoadingPage />;
  }

  return (
    <StatsContext.Provider
      value={{
        provinces,
        lastDayTotals,
        dailyTotals
      }}
    >
      {children}
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
