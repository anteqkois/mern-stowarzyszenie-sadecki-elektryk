import React from 'react'
import logo from '../../assets/logo.svg'
import styled from 'styled-components';

const StyledLogo = styled.img`
  height: ${({height}) => `${height}px`};

`;

const Logo = ({ height }) => {
  return (
      <StyledLogo src={logo} alt="Logo" height={height}/> 
  )
}

export default Logo
