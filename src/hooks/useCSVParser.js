import { useState, useEffect } from 'react';
import { getCSVFile } from '../utils/parser';

export default function useCSVParser({ url }, initialData = null) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let didCancel = false;
    async function fetchData() {
      setIsLoading(true);
      setIsError(false);

      try {
        const data = await getCSVFile(url)
        setData(data);
        setIsLoading(false);
      } catch (err) {
        if (!didCancel) {
          setIsError(true);
          setIsLoading(false);
        }
      }
    }
    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);
  return {
    data,
    isLoading,
    isError
  };
}
