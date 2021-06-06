import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from '../components/utils/Button';

const StyledContainer = styled.main`
  padding: 5px 10px;

  header {
    text-align: center;
    margin: 20px 0;
    font-size: ${({ theme }) => theme.typography.sizeH5};
    font-weight: ${({ theme }) => theme.typography.weightBold};
    text-transform: uppercase;
  }

  ul {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
  }
  li {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);
    padding: 20px 10px;
    margin: 20px 0;
    width: 100%;
    max-width: 500px;
    list-style-type: none;
    color: ${({ theme }) => theme.colors.accent};
    font-weight: ${({ theme }) => theme.typography.weightBold};
    border-left: ${({ theme }) => theme.colors.noActive} 1px solid;
    border-bottom: ${({ theme }) => theme.colors.noActive} 1px solid;
    border-radius: 10px;
    background: rgb(231, 230, 230);
    background: linear-gradient(
      39deg,
      rgba(190, 190, 190, 1) 0%,
      rgba(210, 210, 210, 1) 41%,
      rgba(251, 251, 251, 1) 95%
    );
    background-size: 150%;
    box-shadow: 0 4px 20px 0 rgba(31, 38, 135, 0.3);
    transition: background 0.4s ease-in-out;


    button {
      text-align: center;
    }

    :hover {
      background-position: right;
    }
  }
  ${({ theme }) => theme.media.desktop} {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;


const testData = [
  {
    _id: '60151f1133b10306b42ad8ad',
    category: 'nature',
    __v: 0,
  },
  {
    _id: '60151f1133b10306b42ad8ab',
    category: 'culture',
    __v: 0,
  },
  {
    _id: '60151f1133b10306b42ad8aa',
    category: 'mechanics',
    __v: 0,
  },
  {
    _id: '60151f1133b10306b42ad8ae',
    category: 'programing',
    __v: 0,
  },
  {
    _id: '60151f1133b10306b42ad8ac',
    category: 'learn',
    __v: 0,
  },
];


const Categories = () => {

  const [categories, setCategories] = useState(testData);
  const [isLoading, setIsLoading] = useState(false)
  
    return isLoading ? (
      <div>Loading...</div>
    ) : (
      <StyledContainer>
        <header>Wszyskie projekty</header>
        <ul>
          {categories.map(({ category, _id}) => (
            <li key={_id}>
              <p>{category}</p>
              <Button option="ghost">Usuń</Button>
            </li>
          ))}
        </ul>
      </StyledContainer>
    );
};

export default Categories;
