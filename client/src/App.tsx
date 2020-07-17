import React, { useState} from 'react';
import logo from './assets/logo.png';
import './assets/styles/App.css';

//My imports
import TopNav from './components/topnav/TopNav';
import { NavLink } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router';

import Home from './pages/Home';
import About from './pages/About';

//apollo client
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { setContext } from 'apollo-link-context';

//for auth
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated, user } = useAuth0();

  // used state to get accessToken through getTokenSilently(), the component re-renders when state changes, thus we have
  // our accessToken in apollo client instance.

  const [accessToken, setAccessToken] = useState('');

  const { getAccessTokenSilently, isLoading } = useAuth0();
  

  // get access token
  const getAccessToken = async () => {
    // getTokenSilently() returns a promise
    try {
      const token = await getAccessTokenSilently();
      setAccessToken(token);
      console.log(token);
    } catch (e) {
      console.log(e);
    }
  };
  getAccessToken();

  const authLink = setContext((_, { headers }) => {
    const token = accessToken;
    if (token) {
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`
        }
      };
    } else {
      return {
        headers: {
          ...headers
        }
      };
    }
  });

  // for apollo client
  const httpLink = new HttpLink({
    uri: 'https://iskyzgram.herokuapp.com/v1/graphql',
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <TopNav />

        <Switch>
          <Route path="/gallery" component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/sky"
            component={() => {
              window.location.href = 'https://www.skyjohnson.me/';
              return null;
            }}
          />
          <Redirect from="/" to="/gallery/" />
        </Switch>
        {isLoading? "loading...": "done!" + {accessToken} }
        {console.log(accessToken)}
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </div>
      </ApolloProvider>
    </div>
  );
}

export default App;
