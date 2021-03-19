import React from 'react'
//import styled from 'styled-components';

import About from '../containers/About'
import Projects from '../containers/Projects';

const Home = ({isMobile}) => {
  return (
    <>
      <About isMobile={isMobile}/>
      <Projects/>
    </>
  )
}

export default Home
