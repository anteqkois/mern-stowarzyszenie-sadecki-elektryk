import React from 'react'
//import styled from 'styled-components';

import About from '../containers/About'
import Projects from '../containers/Projects';
import Aid from '../containers/Aid';

const Home = ({isMobile}) => {
  return (
    <>
      <About isMobile={isMobile}/>
      <Projects/>
      <Aid/>
    </>
  )
}

export default Home
