import { useState, useEffect } from 'react';
import axios from 'axios';
import constants from '../constants';

const useAPI = ({ base = constants.SERVER, route, defaultData = null }) => {
  const [data, setData] = useState(defaultData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      setError(false);
      setLoading(true);

      try {
        const res = await axios.get(base + route);
        setData(res.data);
      } catch (e) {
        setError(e.message);
        setData(null);
      }

      setLoading(false);
    })();
  }, [base, route]);

  return { data, loading, error };
};

export default useAPI;
