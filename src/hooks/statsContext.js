import React, { useContext } from 'react';
import useFetch from './useFetch';
const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;

const StatsContext = React.createContext([]);

const StatsProvider = ({ children }) => {
  const { data, isLoading, error } = useFetch(
    {
      url:
        'https://api.airtable.com/v0/appo8EvYg4prTdP9h/Table%201?view=Grid%20view',
      apiKey: AIRTABLE_API_KEY
    },
    { records: [] }
  );
  const provinces = data.records.map(item => ({ ...item.fields }));
  return (
    <StatsContext.Provider value={{ provinces, isLoading, error }}>
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
