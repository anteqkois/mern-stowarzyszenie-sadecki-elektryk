import React from 'react';
import styled from 'styled-components';

const StyledPatron = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  transition: transform 0.25s ease-in-out;

  &:hover {
    transform: translate(0, -5px);
    transition: transform 0.35s ease-in-out;
  }

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

const Patron = ({ src, alt, href }) => {
  return (
    <StyledPatron href={href}>
      <img src={require(`../../assets/${src}`).default} alt={`${alt}`} />
    </StyledPatron>
  );
};

export default Patron;
