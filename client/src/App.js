import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
//import styled from 'styled-components';
import { WidthDeviceProvider } from './context/Context';

import Layout from './layouts/Layout';
import Navigation from './containers/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Test from './containers/Test'
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
        //<Redirect to={{ pathname: '/login', state:{from: props.location} }} />
        <Redirect to='/login' />
      )
    }
  />
);

function App() {
  return (
    <WidthDeviceProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/aid" component={Aid} />
          <PrivateRoute exact path="/admin" component={Test} />
          <Route exact path="/login" component={Login} />
          <Fotter />
        </Layout>
      </Router>
    </WidthDeviceProvider>
  );
}

export default App;
