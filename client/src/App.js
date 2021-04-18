import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import styled from 'styled-components';
import { WidthDeviceProvider } from './context/Context';

import Layout from './layouts/Layout';
import Navigation from './containers/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Fotter from './containers/Fotter';

function App() {
  return (
    <WidthDeviceProvider>
      <Router>
        <Layout>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Fotter />
        </Layout>
      </Router>
    </WidthDeviceProvider>
  );
}

export default App;
