import { useState } from 'react';
import axios from 'axios';

const useRequest = ({ url, method, data, onSuccess, onError }) => {
  const [errors, setErrors] = useState([]);

  const onRequest = async () => {
    try {
      setErrors(null);

      const response = await axios[method](url, data);

      if (onSuccess) onSuccess(response.data);

      return response.data;
    } catch (err) {
      setErrors(err.response.data.errors);

      if (onError) onError(err.response.data.errors);
    }
  };
  return { onRequest, errors };
};

export default useRequest;
