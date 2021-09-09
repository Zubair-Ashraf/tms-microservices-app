import React, { useEffect } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/useRequest';

const Signout = () => {
  const { onRequest } = useRequest({
    url: '/api/auth/signout',
    method: 'post',
    body: {},
    onSuccess: () => Router.push('/'),
  });

  useEffect(() => onRequest(), []);

  return <div></div>;
};

export default Signout;
