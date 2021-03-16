import React from 'react';
import styled from 'styled-components';
import Button from '../button/Button';


const StyledDescriptionOfAssociation = styled.div`
  width: 100vw;
  padding: 15px;

  h1{
    font-size: ${({theme}) => theme.typography.sizeH5};
    margin: 0.6em 0;
    display: none;
  }

  p{
    max-width: 70ch;
  }

  ${({theme}) => theme.media.tablet}{
    h1{
      display: block;
    }
  }
`;

const DescriptionOfAssociation = ({className}) => {
  return (
    <StyledDescriptionOfAssociation className={className}>
      <h1>Kim jesteśmy ?</h1>
      <p>
        To stowarzyszenie założone przez nauczycieli, by wspierać szkołę oraz
        młodzież przez organizowanie imprez, wydarzeń oraz realizację projektów
        dzięki którym młodzież mogłaby rozwijać swoje pasje i zainteresowania.
        To grupa ludzi gotowych pomagać i wspierać. Stowarzyszenie Sądecki
        Elektryk w 2017 roku otrzymało tytuł Laureata Grand Prix Nagrody
        Marszałka Województwa Małopolskiego "Kryształy Soli" w kategorii
        "edukacja i nauka". Zostało ono nagrodzone m.in za niekonwencjonalne
        podejście do popularyzacji nauki wśród młodych oraz kreowanie
        odpowiednich postaw społecznych.
      </p>
      <Button>Ostatnie Projekty</Button>
    </StyledDescriptionOfAssociation>
  );
};

export default DescriptionOfAssociation;
