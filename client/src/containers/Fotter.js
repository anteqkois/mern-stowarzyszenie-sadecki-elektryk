import React from 'react';
import styled from 'styled-components';
import Association from '../components/fotter/Association';
import Created from '../components/fotter/Created';
import Copyright from '../components/fotter/Copyright';

const StyledFotter = styled.footer`
  width: 100vw;
  padding: 3em 5%;
  display: grid;
  grid-template-rows: 0.8fr 1fr 0.3fr;
  grid-row-gap: 2em;
  place-content: center;
  background: rgb(21, 1, 37);
  color: ${({ theme }) => theme.colors.primary};
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 19%,
    rgba(27, 2, 50, 1) 75%,
    rgba(39, 4, 68, 1) 110%
  );

  a {
    all: unset;
    color: ${({ theme }) => theme.colors.label};
    font-size: ${({ theme }) => theme.typography.sizeTiny};
    padding: 0.6em 0;
    display: flex;
    gap: 1em;
    align-items: center;
    transition: color ease-in-out 0.2s;
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.primary};
      transition: color ease-in-out 0.2s;
    }
  }
  h4 {
    //font-size: ${({ theme }) => theme.typography.sizeH6};
    font-weight: ${({ theme }) => theme.typography.weightBold};
    text-transform: uppercase;
    padding: 1em 0;
  }

  ${({ theme }) => theme.media.tablet} {
    grid-template-rows: 1fr 0.5fr;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
`;

const Fotter = () => {
  return (
    <StyledFotter>
      <Created />
      <Association />
      <Copyright />
    </StyledFotter>
  );
};

export default Fotter;
