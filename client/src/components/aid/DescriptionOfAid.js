  import React from 'react'
  import styled from 'styled-components';

  const StyledDescriptionOfAid = styled.div`
    max-width: 50ch;
    p, strong{
      padding: 15px;
    }
    strong{
      display: block;
        color: ${({ theme }) => theme.colors.accent};
        font-weight: ${({ theme }) => theme.typography.weightBold};
    }
    ${({ theme }) => theme.media.bigTablet} {
      max-width: 65ch;
    }
  `;

  const DescriptionOfAid = () => {
    return (
      <StyledDescriptionOfAid>
        <p>
          Pierwszym sposobem jest po prostu przekazanie darowizny na rzecz
          stowarzyszenia. Darowizny można przekazywać na konto:
        </p>
        <strong>Bank BGŻ BNP Paribas S.A 98 2030 0045 1110 0000 0387 2230</strong>
        <p>
          Drugim sposobem, dzięki nawiązaniu współpracy i podpisaniu umowy z
          Pallotyńską Fundacją Misyjną Salvatt.pl, jest przekazanie 1% odpisu przy
          rocznych rozliczeniach podatkowych na rzecz stowarzyszenia. Jak to
          zrobić ? Poniżej wyjaśnimy Ci szybko jak wypełnić sekcję w zeznaniu PIT
          dotyczącą przekazania 1% podatku na rzecz organizacji pożytku
          publicznego.
        </p>
      </StyledDescriptionOfAid>
    );
  }

  export default DescriptionOfAid;
