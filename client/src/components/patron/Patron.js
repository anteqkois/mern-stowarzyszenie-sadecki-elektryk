import React from 'react';
import styled from 'styled-components';

const StyledPatron = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  img {
    width: 100%;
  }

  ${({ theme }) => theme.media.tablet} {
    height: 180px;
    width: 180px;
  }
  ${({ theme }) => theme.media.bigDesktop} {
    height: 280px;
    width: 280px;
  }
`;

const Patron = ({ src, alt }) => {
  return (
    <StyledPatron>
      <img src={require(`../../assets/${src}`).default} alt={`${alt}`} />
    </StyledPatron>
  );
};

export default Patron;
