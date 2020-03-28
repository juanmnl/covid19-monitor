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
      const data = await fetch(url, options)
        .then(res => res.json())
        .catch(err => {
          if (!didCancel) {
            setIsError(true);
          }
        });

      if (!didCancel) {
        if (data.hasOwnProperty('error')) {
          setIsLoading(false);
          setIsError(true);
        } else {
          setData(data);
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
