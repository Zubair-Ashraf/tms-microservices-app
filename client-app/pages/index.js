import React from 'react';
import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  const isLoggedIn = currentUser;

  if (isLoggedIn) return <h1>You are signed in</h1>;
  else return <h1>You are not signed in</h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
  if (typeof window === 'undefined') {
    const response = await axios.get(
      'http://ingress-nginx.ingress-nginx.svc.cluster.local/api/auth/current-user',
      {
        headers: req.headers,
      }
    );

    return response.data;
  } else {
    const response = await axios.get('/api/auth/current-user');

    return response.data;
  }
};

export default LandingPage;
