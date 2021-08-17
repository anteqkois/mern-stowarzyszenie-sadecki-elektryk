import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { WidthDeviceContext } from '../../context/Context';

import Button from '../utils/Button';

const StyledDescriptionOfAssociation = styled.div`
  padding: 0 15px;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.level1};

  h1 {
    display: none;
  }

  p {
    max-width: 55ch;
    margin: 2em 0;
    color: ${({ theme }) => theme.colors.text};
  }

  ${({ theme }) => theme.media.tablet} {
    padding-left: 10vw;
    height: 400px;
    h1 {
      display: inline-block;
      text-transform: uppercase;
      margin: 0.6em 0;
      max-width: 18ch;
      line-height: 1.1em;
      font-size: ${({ theme }) => theme.typography.sizeH3};
      font-weight: ${({ theme }) => theme.typography.weightExtraBold};
      color: ${({ theme }) => theme.colors.textOposite};
    }
    p {
      color: ${({ theme }) => theme.colors.textOposite};
    }
    div {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  ${({ theme }) => theme.media.desktop} {
    h1 {
      font-size: ${({ theme }) => theme.typography.sizeH2};
    }
  }
`;
const StyledLink = styled(Link)`
  all: unset;
`;

const StyledButton = styled(Button)`
  left: 50%;
  transform: translateX(-50%);

  ${({ theme }) => theme.media.tablet} {
    left: 0;
    transform: translateX(40%);
  }
`;

const DescriptionOfAssociation = () => {

  const { isMobile } = useContext(WidthDeviceContext);

  return (
    <StyledDescriptionOfAssociation >
      <div>
        <h1>Stowarzyszenie Sądecki Elektryk</h1>
        <p>
          To stowarzyszenie założone przez nauczycieli, by wspierać szkołę oraz
          młodzież przez organizowanie imprez, wydarzeń oraz realizację
          projektów dzięki którym młodzież mogłaby rozwijać swoje pasje i
          zainteresowania. To grupa ludzi gotowych pomagać i wspierać.
          Stowarzyszenie Sądecki Elektryk w 2017 roku otrzymało tytuł Laureata
          Grand Prix Nagrody Marszałka Województwa Małopolskiego "Kryształy
          Soli" w kategorii "edukacja i nauka". Zostało ono nagrodzone m.in za
          niekonwencjonalne podejście do popularyzacji nauki wśród młodych oraz
          kreowanie odpowiednich postaw społecznych.
        </p>
        <StyledLink to="/projects">
          <StyledButton option={isMobile ? 'normal' : 'white'}>Ostatnie Projekty</StyledButton>
        </StyledLink>
      </div>
    </StyledDescriptionOfAssociation>
  );
};

export default DescriptionOfAssociation;
