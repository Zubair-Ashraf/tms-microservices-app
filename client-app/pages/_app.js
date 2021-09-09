import 'bootstrap/dist/css/bootstrap.css';
import { Fragment } from 'react';
import buildClient from '../api/build-client';
import Header from '../components/header';

const App = ({ Component, pageProps, currentUser }) => {
  return (
    <Fragment>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />;
    </Fragment>
  );
};

App.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);

  const { data } = await client.get('/api/auth/current-user');

  let pageProps = {};

  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return { pageProps, ...data };
};

export default App;
