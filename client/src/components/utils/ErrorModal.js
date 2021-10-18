import React, { useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router';

import Delete from '../utils/Delete';

const StyledError = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.level4};
  > div {
    :nth-of-type(1) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: ${({ theme }) => theme.colors.noActive};
      z-index: ${({ theme }) => theme.zIndex.levelMinus1};
      opacity: 0.7;
    }

    :nth-of-type(2) {
      position: fixed;
      top: 50%;
      left: 50%;
      width: 90vw;
      max-width: 1000px;
      padding: 70px 0;
      border-radius: 10px;
      text-align: center;
      font-size: ${({ theme }) => theme.typography.sizeH6};
      font-weight: ${({ theme }) => theme.typography.weightBold};
      background: ${({ theme }) => theme.colors.primary};
      color: rgba(255, 15, 15, 1);
      box-shadow: 0 8px 25px 0 rgba(31, 38, 135, 0.37);
      border-radius: 10px;
      border: 3px solid rgba(255, 15, 15, 1);
      transform: translate(-50%, -50%);
    }
  }
  ${({ theme }) => theme.media.tablet} {
    > div:nth-of-type(2) {
      font-size: ${({ theme }) => theme.typography.sizeH5};
    }
  }
`;

const StyledDelete = styled(Delete)`
  position: absolute;
  top: 0;
  right: 0;
  height: 50px;
  width: 50px;
  :hover {
    transform: translate(0, 0);
  }
`;

export const ErrorModal = ({ error, setRedirectPath, handleResetError }) => {
  const [redirect, setRedirect] = useState(false);

  const handleCloseModal = () => {
    setRedirectPath && setRedirect(true);
    handleResetError();
  };

  redirect && (
    <Redirect
      to={{
        pathname: setRedirectPath,
        // state: { state: redirectObject.state },
      }}
    />
  );

  return (
    <StyledError>
      <div></div>
      <div>
        {error}
        <StyledDelete onClick={handleCloseModal} />
      </div>
    </StyledError>
  );
};

export default ErrorModal;