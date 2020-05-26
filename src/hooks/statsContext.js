import React, { useContext } from 'react';
import LoadingPage from '../components/LoadingPage';
import ErrorPage from '../components/ErrorPage';
import useFetch from './useFetch';
import useCSVParser from './useCSVParser';
import { parseProvincesFromCSVJSON } from '../utils/parser';

const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const PROVINCE_STATS_ENDPOINT = process.env.REACT_APP_PROVINCE_STATS_ENDPOINT;
const TOTAL_STATS_ENDPOINT = process.env.REACT_APP_TOTAL_STATS_ENDPOINT;

const StatsContext = React.createContext([]);

const StatsProvider = ({ children }) => {
  const { data, isLoading, isError } = useCSVParser(
    {
      url: PROVINCE_STATS_ENDPOINT,
    },
    { records: [] }
  );
  const provinces = parseProvincesFromCSVJSON(data)

  const {
    data: dailyRecords,
    isLoading: dailyIsLoading,
    isError: dailyIsError
  } = useFetch(
    {
      url: TOTAL_STATS_ENDPOINT,
    },
    []
  );

  const dailyTotals = dailyRecords.map(item => ({
    deaths: item.total_muertes,
    confirmed: item.positivas,
    possibleDeaths: item.muertes_probables,
    negatives: item.negativas,
    date: item.created_at
  }));

  let lastDayTotals;
  let prevDayTotals;
  let beforeYesterdayTotals;
  const dailyTotalsLength = dailyTotals.length
  if (dailyTotalsLength > 0) {
    lastDayTotals = { ...dailyTotals[dailyTotalsLength - 1] };
    prevDayTotals = { ...dailyTotals[dailyTotalsLength - 2] };
    beforeYesterdayTotals = { ...dailyTotals[dailyTotals.length - 3] };
  } else {
    lastDayTotals = {
      date: '0000/00/00',
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
    prevDayTotals = lastDayTotals
    beforeYesterdayTotals = lastDayTotals
  }

  const generalIsLoading = isLoading;
  const generalIsError = isError;

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
        prevDayTotals,
        beforeYesterdayTotals,
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
