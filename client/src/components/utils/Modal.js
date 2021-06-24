import React from 'react';
import styled from 'styled-components';

import Delete from '../utils/Delete';

const StyledModal = styled.div`
position: relative;
  > div {
    :nth-of-type(1) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: ${({ theme }) => theme.colors.noActive};
      z-index: ${({ theme }) => theme.zIndex.level2};
      opacity: 0.7;
    }
    :nth-of-type(2) {
      position: fixed;
      top: 50%;
      left: 50%;
      width: 80vw;
      height: 70vh;
      display: flex;
      gap: 40px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      text-align: center;
      font-size: ${({ theme }) => theme.typography.sizeH6};
      font-weight: ${({ theme }) => theme.typography.weightBold};
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.accent};
      box-shadow: 0 8px 25px 0 rgba(31, 38, 135, 0.37);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      transform: translate(-50%, -50%);
      z-index: ${({ theme }) => theme.zIndex.level3};
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
:hover{
  transform: translate(0, 0);
}
`;


const Modal = ({ children, setIsOpen}) => {

  return (
    <StyledModal>
      <div></div>
      <div>
        {children}
        <StyledDelete onClick={setIsOpen} />
      </div>
    </StyledModal>
  );
};

export default Modal;
