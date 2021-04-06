import React from 'react';
import styled from 'styled-components';
import Button from '../utils/Button';
import programing from '../../assets/iconmonstr-programing.svg';
import nature from '../../assets/iconmonstr-nature.svg';
import culture from '../../assets/iconmonstr-culture.svg';
import learn from '../../assets/iconmonstr-learn.svg';
import mechanicsm from '../../assets/iconmonstr-mechanics.svg';

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
    padding: 1.1em 0;
    font-size: ${({ theme }) => theme.typography.sizeH6};
    font-weight: ${({ theme }) => theme.typography.weightExtraBold};
    color: ${({ theme }) => theme.colors.accent};
    line-height: 1.1em;
    text-transform: uppercase;
  }

  img{
    position: absolute;
    right: 5%;
    top: 5%;
    width: 70%;
    max-width: 300px;
    opacity: 0.15;
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

  ${({ theme }) => theme.media.tablet} {
    max-width: 600px;

    ::after {
      content: unset;
    }

    h1 {
      font-size: ${({ theme }) => theme.typography.sizeH4};
    }
    p {
      :nth-of-type(2) {
        max-width: 55ch;
      }
    }
    button {
      place-self: start;
      transform: translateX(150%);
    }
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

  let categoryOfProject = learn;

  switch (category) {
    case 'programing':
      categoryOfProject = programing;
      break;
    case 'nature':
      categoryOfProject = nature;
      break;
    case 'culture':
      categoryOfProject = culture;
      break;
    case 'learn':
      categoryOfProject = learn;
      break;
    case 'mechanicsm':
      categoryOfProject = mechanicsm;
      break;
    default:
      break;
  }

  return (
    <StyledProject>
      <h1>{title}</h1>
      <img src={categoryOfProject} alt='category of project' />
      <p>{dateToPut}</p>
      <p>{description}</p>
      <Button>Więcej</Button>
    </StyledProject>
  );
};

export default Project;
