import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import { Auth0Provider } from '@auth0/auth0-react';

var auth_config = require('./auth/auth_config.json');

//import * as auth_config  from './auth/auth_config.json';

const onRedirectCallback = (appState: any) => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl ? appState.targetUrl : window.location.pathname,
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={auth_config.domain}
    clientId={auth_config.clientId}
    audience={auth_config.audience}
    redirect_uri={auth_config.redirect_uri}
    onRedirectCallback={onRedirectCallback}
  >
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
