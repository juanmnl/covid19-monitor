import { useState, useEffect } from 'react';

export default function useFetch({ url, apiKey = null }, initialData = null) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let didCancel = false;
    async function fetchData() {
      setIsLoading(true);
      setIsError(false);

      let options = {};
      const headers = new Headers();
      if (apiKey) {
        headers.set('Authorization', `Bearer ${apiKey}`);
        options = {
          method: 'GET',
          headers
        };
      }

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        if (!didCancel) {
          setData(data);
          setIsLoading(false);
        }
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
  }, [url, apiKey]);
  return {
    data,
    isLoading,
    isError
  };
}
