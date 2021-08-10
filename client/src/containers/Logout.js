import React,{useEffect} from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../components/utils/Button';

const StyledLogout = styled.div`
  position: relative;
  > div {
    :nth-of-type(1) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: ${({ theme }) => theme.colors.gradient};
      z-index: ${({ theme }) => theme.zIndex.level2};
    }
    :nth-of-type(2) {
      position: fixed;
      top: calc(50% + 35px);
      left: 50%;
      width: 90vw;
      max-width: 1000px;
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

const StyledLink = styled(Link)`
all: unset;
`;

const Logout = () => {

  useEffect(() => {
    sessionStorage.removeItem('isLogined');
  }, [])
  
  return (
    <StyledLogout>
      <div></div>
      <div>
      Zostałeś wylogowany !
      <StyledLink  to={'/'} >
        <Button >Strona główna</Button>
      </StyledLink>
      </div>
    </StyledLogout>
  );
};

export default Logout;
