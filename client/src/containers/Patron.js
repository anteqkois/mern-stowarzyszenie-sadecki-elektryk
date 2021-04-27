import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Lines } from '../assets/Lines.svg';
import Patron from '../components/patron/Patron';

const StyledPatron = styled.div`
  h1 {
    text-align: center;
    text-transform: uppercase;

    background-image: ${({ theme }) => theme.colors.gradient};
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;

    font-size: ${({ theme }) => theme.typography.sizeH3};
    font-weight: ${({ theme }) => theme.typography.weightBlack};
    line-height: 0.9em;
    z-index: ${({ theme }) => theme.zIndex.level1};
  }

  ${({ theme }) => theme.media.tablet} {
    h1 {
      font-size: ${({ theme }) => theme.typography.sizeH2};
    }
  }
  ${({ theme }) => theme.media.bigTablet} {
    h1 {
      font-size: ${({ theme }) => theme.typography.sizeH1};
    }
  }
`;

const StyledLines = styled(Lines)`
  height: 100%;
  width: 100%;
  margin: 2em 0;
`;

const StyledPatronContainer = styled.div`
  padding: 8% 10% 0 10%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  align-items: center;
  justify-content: center;


  ${({ theme }) => theme.media.bigDesktop} {
  gap: 40px;
  }
`;

const NameOfPatron = [
  {
    company: 'bogdański',
    extension: 'png',
  },
  {
    company: 'novitus',
    extension: 'svg',
  },
  {
    company: 'wiśniowski',
    extension: 'png',
  },
  {
    company: 'erbet',
    extension: 'jpg',
  },
  {
    company: 'fakro',
    extension: 'png',
  },
  {
    company: 'ibcs',
    extension: 'png',
  },
  {
    company: 'gotoma',
    extension: 'png',
  },
  {
    company: 'nova',
    extension: 'png',
  },
  {
    company: 'mpec',
    extension: 'png',
  },
  {
    company: 'sądeckie-wodociągi',
    extension: 'png',
  },
  {
    company: 'q-graf',
    extension: 'png',
  },
  {
    company: 'brdej',
    extension: 'png',
  },
];

const Patrons = () => {
  return (
    <StyledPatron>
      <StyledLines />
      <h1>Pomagają nam</h1>
      <StyledPatronContainer>
        {NameOfPatron.map(({ company, extension }) => (
          <Patron key={company} src={`${company}.${extension}`} alt={company} />
        ))}
      </StyledPatronContainer>
    </StyledPatron>
  );
};

export default Patrons;
