import React, { useState, useEffect } from 'react';
//import styled from 'styled-components';

import Layout from './layouts/Layout';
import Navigation from './containers/navigation/Navigation';
import Home from './pages/Home';

function App() {
  const [IsMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    function handleMenuChange(e) {
      // Check if the media query is true

      if (e.matches) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    }
    // Register event listener
    mediaQuery.addListener(handleMenuChange);
    // Initial check
    handleMenuChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMenuChange);
    };
  }, []);
  return (
    <Layout>
      <Navigation isMobile={IsMobile} />
      <Home isMobile={IsMobile} />
    </Layout>
  );
}

export default App;
