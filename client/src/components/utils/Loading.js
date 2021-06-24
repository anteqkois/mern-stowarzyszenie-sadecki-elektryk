import React from 'react'
import styled from 'styled-components';

const StyledLoading = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  display: flex;
  gap: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.sizeH5};
  font-weight: ${({ theme }) => theme.typography.weightBold};
  color: ${({ theme }) => theme.colors.accent};
  transform: translate(-50%, -50%);
`;

const Loading = () => {
  return (
    <StyledLoading>
      <h5>Ładowanie...</h5>
    </StyledLoading>
  );
}

export default Loading
