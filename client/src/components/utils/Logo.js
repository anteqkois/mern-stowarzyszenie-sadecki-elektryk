import React from 'react';
import logo from '../../assets/logo.svg';
import styled from 'styled-components';

const StyledLogo = styled.img``;

const Logo = ({ className }) => {
  return <StyledLogo className={className} src={logo} alt="Logo" />;
};

export default Logo;
