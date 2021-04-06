import React from 'react';
//import styled from 'styled-components';
import { WidthDeviceProvider } from './context/Context';

import Layout from './layouts/Layout';
import Navigation from './containers/Navigation';
import Home from './pages/Home';
import Fotter from './containers/Fotter';

function App() {
  return (
    <WidthDeviceProvider>
      <Layout>
        <Navigation/>
        <Home/>
        <Fotter/>
      </Layout>
    </WidthDeviceProvider>
  );
}

export default App;
