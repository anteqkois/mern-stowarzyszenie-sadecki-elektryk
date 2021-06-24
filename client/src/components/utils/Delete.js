import React, { useRef } from 'react';
import styled from 'styled-components';

const StyledDelete = styled.div`
  padding: 0.5em 1em;
  position: relative;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.typography.sizeH6};
  font-weight: ${({ theme }) => theme.typography.weightBold};
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
    box-shadow: ${({ theme }) => `0px 15px 20px ${theme.colors.text}`};
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
  }

  :hover,
  :focus {
    transform: translateY(-4px);

    ::before {
      opacity: 1;
      transition: opacity 0.4s ease-in-out;
    }
  }
`;

const StyledCross = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  background-color: ${({ theme }) => theme.colors.text};
  width: 5px;
  height: 80%;
  border-radius: 5px;
  transform: translate(-50%, -50%) rotate(45deg);

  ::before {
    content: '';
    position: absolute;
    left: 50%;
    background-color: ${({ theme }) => theme.colors.text};
    width: 5px;
    height: 100%;
    border-radius: 5px;
    transform: translate(-50%, 0) rotate(90deg);
  }
`;

const Delete = ({ className, children, onClick = null }) => {

  const button = useRef(null);

  const handleClick = () => {
    button.current.blur();
    onClick && onClick();
  };
  
  return (
    <StyledDelete className={className} ref={button} onClick={handleClick}>
      {children ? children : <StyledCross></StyledCross>}
    </StyledDelete>
  );
};

export default Delete;
