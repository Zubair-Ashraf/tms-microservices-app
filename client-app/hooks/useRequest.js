import { useState } from 'react';
import axios from 'axios';

const useRequest = ({ url, method, data }) => {
  const [errors, setErrors] = useState([]);

  const onRequest = async () => {
    try {
      const response = await axios[method](url, data);

      return response.data;
    } catch (err) {
      setErrors(err.response.data.errors);
    }
  };
  return { onRequest, errors };
};

export default useRequest;
