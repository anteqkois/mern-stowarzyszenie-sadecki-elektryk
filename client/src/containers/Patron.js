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
    href: 'http://www.bogdanski.com.pl/',
  },
  {
    company: 'novitus',
    extension: 'svg',
    href: 'https://novitus.pl/',
  },
  {
    company: 'wiśniowski',
    extension: 'png',
    href: 'https://www.wisniowski.pl/',
  },
  {
    company: 'erbet',
    extension: 'jpg',
    href: 'https://www.erbet.pl/',
  },
  {
    company: 'fakro',
    extension: 'png',
    href: 'https://www.fakro.pl/',
  },
  {
    company: 'ibcs',
    extension: 'png',
    href: 'https://www.ibcs.pl/',
  },
  {
    company: 'gotoma',
    extension: 'png',
    href: 'https://gotoma.pl/',
  },
  {
    company: 'nova',
    extension: 'png',
    href: 'http://www.nova-ns.eu/',
  },
  {
    company: 'mpec',
    extension: 'png',
    href: 'http://www.mpecns.pl/',
  },
  {
    company: 'sądeckie-wodociągi',
    extension: 'png',
    href: 'https://swns.pl/',
  },
  {
    company: 'q-graf',
    extension: 'png',
    href: 'https://www.q-graf.eu/',
  },
  {
    company: 'brdej',
    extension: 'png',
    href: 'http://meblebrdej.pl/',
  },
];

const Patrons = () => {
  return (
    <StyledPatron>
      <StyledLines />
      <h1>Pomagają nam</h1>
      <StyledPatronContainer>
        {NameOfPatron.map(({ company, extension, href }) => (
          <Patron key={company} src={`${company}.${extension}`} alt={company} href={href}/>
        ))}
      </StyledPatronContainer>
    </StyledPatron>
  );
};

export default Patrons;
