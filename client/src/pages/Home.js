import React from 'react'

import About from '../containers/Home/About'
import Projects from '../containers/Projects/Projects';
import Aid from '../containers/Home/Aid';
import Patron from '../containers/Home/Patron';

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
