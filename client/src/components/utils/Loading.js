import React from 'react';
import styled from 'styled-components';

import Spinner from './Spinner';

const StyledLoading = styled.div`
  max-width: 100vw;
  padding-block: 20px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  h5 {
    text-transform: uppercase;
    /* background-image: ${({ theme }) => theme.colors.gradient};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent; */
    text-align: center;
    font-size: ${({ theme }) => theme.typography.sizeH5};
    color: ${({ theme }) => theme.colors.accent};
  }
`;
const Loading = ({ loadingMessage = 'Ładowanie' }) => {
  return (
    <StyledLoading>
      <h5>{loadingMessage}</h5>
      <Spinner/>
    </StyledLoading>
  );
};

export default Loading;
