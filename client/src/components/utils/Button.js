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
  color: ${({ theme, white }) =>
    white ? theme.colors.accent : theme.colors.primary};
  background: ${({ theme, white }) =>
    white
      ? theme.colors.primary
      : 'linear-gradient(35.25deg, #4d0a83 38.05%, #a2141b 90%)'};
  background-size: 150%;
  border-radius: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
  transition: all 0.4s ease 0s;
  cursor: pointer;
  outline: none;

  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    border-radius: 5px;
    //box-shadow: 0px 15px 20px ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme, white }) =>
      white
        ? `0px 5px 20px -5px ${theme.colors.primary}`
        : `0px 15px 20px ${theme.colors.accent}`};
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
  }

  :hover,
  :focus {
    //color: ${({ theme }) => theme.colors.primary};
    //transition: color ease-in-out 0.25s;
    //background-image: linear-gradient(35.25deg, #4d0a83 18.05%, #a2141b 60.82%);
    background-position: right;
    transform: translateY(-4px);

    ::before {
      opacity: 1;
      transition: opacity 0.4s ease-in-out;
    }
  }
`;

const Button = ({children, className, onClick, white}) => {
  return (
    <StyledButton onClick={onClick} className={className} white={white}>
      {children}
    </StyledButton>
  )
}

export default Button
