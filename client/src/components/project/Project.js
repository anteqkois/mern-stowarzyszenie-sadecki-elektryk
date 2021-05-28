import React from 'react';
import { Link } from 'react-router-dom';
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

  background: rgb(231, 230, 230);
  background: linear-gradient(
    39deg,
    rgba(231, 230, 230, 1) 0%,
    rgba(240, 240, 240, 1) 41%,
    rgba(241, 241, 241, 1) 95%
  );
  box-shadow: 0 8px 25px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  h1 {
    padding: 1.1em 0;
    font-size: ${({ theme }) => theme.typography.sizeH6};
    font-weight: ${({ theme }) => theme.typography.weightExtraBold};
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${({ theme }) => theme.colors.accent};
    line-height: 1.1em;
    text-transform: uppercase;
  }

  img {
    position: absolute;
    right: 5%;
    top: 5%;
    width: 70%;
    max-width: 300px;
    opacity: 0.1;
    z-index: ${({ theme }) => theme.zIndex.levelMinus1};
  }
  p {
    color: ${({ theme }) => theme.colors.label};

    :nth-of-type(2) {
      padding: 0.7em 0 1em 0;
      color: ${({ theme }) => theme.colors.text};
      line-height: 1.15em;
    }
  }
  a {
    all: unset;
    place-self: center;
    margin: 0.5em;
  }

  ${({ theme }) => theme.media.bigTablet} {
    max-width: 600px;

    place-self: start;
    transform: translate(45%, 0);
    :nth-last-of-type(2n) {
      place-self: end;
      transform: translate(-45%, 0);
    }

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
      <img src={categoryOfProject} alt="category of project" />
      <p>{dateToPut}</p>
      <p>{description}</p>
      <Link to="/projects">
        <Button>Więcej Projektów</Button>
      </Link>
    </StyledProject>
  );
};

export default Project;
