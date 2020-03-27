import { useState, useEffect } from 'react';

export default function useFetch({ url, apiKey = null }, initialData = null) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    let didCancel = false;
    async function fetchData() {
      setIsLoading(true);
      setError();

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
            setError(err);
          }
        });
      if (!didCancel) {
        setData(data);
        setIsLoading(false);
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
    error
  };
}
