import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Emial } from '../../assets/iconmonstr-email-2.svg';
import { ReactComponent as Facebook } from '../../assets/iconmonstr-facebook-6.svg';
import { ReactComponent as Code } from '../../assets/iconmonstr-code-13.svg';

const StyledAssociation = styled.div`
  display: flex;
  flex-direction: column;

`;

const Association = () => {
  return (
    <StyledAssociation>
      <h4>Stowarzyszenie Sądecki Elektryk</h4>
      <a href="http://stowarzyszenie.zsem.edu.pl/">
        <Code/>
        Stowarzyszenie Sądecki Elektryk - strona
      </a>
      <a href="https://www.facebook.com/SadeckiElektryk/">
        <Facebook/>
        Stowarzyszenie Sądecki Elektryk
      </a>
      <a href="mailto:stowarzyszenie@zsem.edu.pl">
        <Emial/>
        stowarzyszenie@zsem.edu.pl</a>
    </StyledAssociation>
  );
};

export default Association;
