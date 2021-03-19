import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import { ReactComponent as StainThree } from '../../assets/StainThree.svg';

const StyledDescriptionOfAssociation = styled.div`
  //width: 100vw;
  //height: 400px;
  padding: 0 15px;
  position: relative;

  h1 {
    font-size: ${({ theme }) => theme.typography.sizeH5};
    display: none;
  }

  p {
    max-width: 55ch;
    margin: 1.5em 0;
  }

  ${({ theme }) => theme.media.tablet} {
    padding-left: 10vw;
    height: 400px;
    h1 {
      display: inline-block;
      color: ${({ theme }) => theme.colors.primary};
    }
    p {
      color: ${({ theme }) => theme.colors.primary};
    }
    div {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

const StyledButton = styled(Button)`
  left: 50%;
  transform: translateX(-50%);

  ${({ theme }) => theme.media.tablet} {
    left: 0;
    transform: translateX(50%);
    color: ${({ theme }) => theme.colors.primary};
    border: 3px solid ${({ theme }) => theme.colors.primary};

    ::before {
      background-color: ${({ theme }) => theme.colors.primary};
    }

    :hover,
    :focus {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const StyledStainThree = styled(StainThree)`
  display: none;
  ${({ theme }) => theme.media.tablet} {
    display: inline-block;
    min-width: 700px;
    width: 65vw;
    max-width: 900px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: ${({ theme }) => theme.zIndex.levelMinus1};
  }
`;

const DescriptionOfAssociation = ({ className }) => {
  return (
    <StyledDescriptionOfAssociation className={className}>
      <StyledStainThree />
      <div>
        <h1>Kim jesteśmy ?</h1>
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
        <StyledButton>Ostatnie Projekty</StyledButton>
      </div>
    </StyledDescriptionOfAssociation>
  );
};

export default DescriptionOfAssociation;
