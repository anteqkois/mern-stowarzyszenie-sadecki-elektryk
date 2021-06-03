import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.level1};

  label {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: -15%;
    color: ${({ theme }) => theme.colors.label};
    font-weight: ${({ theme }) => theme.typography.weightBold};
    transform-origin: left;
    transition: transform 0.25s ease-out;
    z-index: ${({ theme }) => theme.zIndex.levelMinus1};
  }

  input {
    all: unset;
    border-bottom: 2px solid ${({ theme }) => theme.colors.label};

    :focus,
    :valid {
      border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
    }

    :focus ~ label,
    :valid ~ label {
      color: ${({ theme }) => theme.colors.accent};
      transform-origin: left;
      transform: translateY(-90%) scale(0.95);
      transition: transform 0.25s ease-out;
    }
  }
`;

const Input = ({ type, name, label, handleChange, value }) => {
  return (
    <StyledInput>
      <input
        onChange={handleChange}
        type={type}
        name={name}
        value={value}
        required
      ></input>
      <label >{label}</label>
    </StyledInput>
  );
};

export default Input;
