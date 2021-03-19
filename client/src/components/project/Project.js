import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const StyledProject = styled.div`
  display: grid;
  padding: 15px;
  position: relative;
  max-width: 500px;

  ::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translate(-50%, 0);
    height: 1px;
    width: calc(100% - 30px);
    background-color: ${({ theme }) => theme.colors.noActive};
  }

  h1 {
    padding: 1.3em 0;
    font-size: ${({ theme }) => theme.typography.sizeH6};
    font-weight: ${({ theme }) => theme.typography.weightExtraBold};
    color: ${({ theme }) => theme.colors.accent};
    line-height: 1.1em;
    text-transform: uppercase;
  }
  p {
    //padding: 0.7em 0;
    color: ${({ theme }) => theme.colors.label};

    :nth-of-type(2) {
      padding: 0.7em 0 1em 0;
      color: ${({ theme }) => theme.colors.text};
      line-height: 1.15em;
    }
  }
  button {
    place-self: center;
  }
`;

const Project = ({ slug, _id, title, category, date, description }) => {
  const dateToConvert = new Date(date);
  const dateToPut = `${dateToConvert.getDate()} ${dateToConvert.toLocaleString(
    'default',
    {
      month: 'long',
    },
  )} ${dateToConvert.getFullYear()}`;

  return (
    <StyledProject>
      <h1>{title}</h1>
      <p>{dateToPut}</p>
      <p>{description}</p>
      <Button>Więcej</Button>
    </StyledProject>
  );
};

export default Project;
