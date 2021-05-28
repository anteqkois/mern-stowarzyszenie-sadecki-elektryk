import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { WidthDeviceProvider } from './context/Context';

import Layout from './layouts/Layout';
import Navigation from './containers/Navigation';
import Home from './pages/Home';
import AdminPanel from './pages/AdminPanel'
import Projects from './pages/Projects';
import Aid from './containers/Aid';
import Login from './containers/Login';
import Fotter from './containers/Fotter';
import ScrollToTop from './components/utils/ScrollToTop';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      sessionStorage.getItem('isLogged') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
        //<Redirect to="/login" {...props} from={props.location}/>
      )
    }
  />
);

function App() {
  return (
    <WidthDeviceProvider>
      <Router>
        <Layout>
          <ScrollToTop />
          <Switch>
            <PrivateRoute exact path="/admin" component={AdminPanel} />
            <>
              <Navigation />
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/aid" component={Aid} />
              <Route exact path="/login" component={Login} />
              <Fotter />
            </>
          </Switch>
        </Layout>
      </Router>
    </WidthDeviceProvider>
  );
}

export default App;
