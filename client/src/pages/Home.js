import React from 'react'
import styled from 'styled-components';
import { Theme } from '../layouts/utils';

import About from '../containers/About'

const Home = ({isMobile}) => {
  return (
    <>
      <About isMobile={isMobile}/>
    </>
  )
}

export default Home
