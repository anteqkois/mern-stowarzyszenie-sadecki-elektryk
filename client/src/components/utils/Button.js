import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
  all: unset;
  //box-sizing: border-box;

  padding: 0.5em 1em;
  position: relative;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.typography.sizeH6};
  font-weight: ${({ theme }) => theme.typography.weightBold};
  color: ${({ theme }) => theme.colors.primary};
  background-image: linear-gradient(35.25deg, #4d0a83 38.05%, #a2141b 90%);
  background-size: 150%;
  border-radius: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
  transition: all 0.4s ease 0s;
  cursor: pointer;
  outline: none;

  /* ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    /* width: 100%;
    height: 100%; 
    background: ${({ theme }) => theme.colors.gradient};
    transform: scaleX(0);
    transition: transform ease-in-out 0.25s;
    z-index: ${({ theme }) => theme.zIndex.levelMinus1};



    background: #63328b;
    background-image: linear-gradient(
270deg
,#ec4e32 -20%,#4d0a83 70%);
    background-size: 200%;
    transition: all .25s ease-in-out,background-position .5s ease-in-out;
  } */

  :hover,
  :focus {
    //color: ${({ theme }) => theme.colors.primary};
    //transition: color ease-in-out 0.25s;
    //background-image: linear-gradient(35.25deg, #4d0a83 18.05%, #a2141b 60.82%);
    background-position: right;
    box-shadow: 0px 15px 20px ${({ theme }) => theme.colors.accent};
    transform: translateY(-4px);
    //transition: all ease-in-out 1s;

    /* ::before {
      transform: scaleX(1.02) scaleY(1.02);
      transition: transform ease-in-out 0.25s;
    } */
  }
`;

const Button = ({children, className, onClick}) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      {children}
    </StyledButton>
  )
}

export default Button
