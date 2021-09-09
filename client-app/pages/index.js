import React from 'react';
import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  const isLoggedIn = currentUser;

  if (isLoggedIn) return <h1>You are signed in</h1>;
  else return <h1>You are not signed in</h1>;
};

LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);

  const { data } = await client.get('/api/auth/current-user');

  return data;
};

export default LandingPage;
