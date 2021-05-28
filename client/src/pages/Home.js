import React from 'react'

import About from '../containers/About'
import Projects from '../containers/Projects';
import Aid from '../containers/Aid';
import Patron from '../containers/Patron';

const Home = () => {
  return (
    <>
      <About/>
      <Projects/>
      <Patron/>
      <Aid/>
    </>
  )
}

export default Home
