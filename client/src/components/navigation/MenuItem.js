import React, {useRef} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledItem = styled(Link)`
  padding: 15px 10px;
  text-decoration: none;
  position: relative;
  list-style-type: none;
  text-align: center;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.typography.weightBold};
  text-transform: uppercase;
  cursor: pointer;
  transition: all ease-out 0.25s;

  ::before {
    content: '';
    height: 3px;
    width: 100%;
    position: absolute;
    bottom: 5px;
    left: 0;

    background: ${({ withshadowandbackground, theme }) =>
      withshadowandbackground ? theme.colors.gradient : theme.colors.primary};
    transform: rotateY(-90deg);
    transition: all ease-out 0.25s;
  }
  :hover::before {
    transform: rotateY(0deg);
  }

  ${({ theme }) => theme.media.tablet} {
    color: ${({ withshadowandbackground, theme }) =>
      withshadowandbackground ? theme.colors.text : theme.colors.textOposite};
    margin: 0 0.6em;
  }
`;

const MenuItem = ({ setIsActive, label, link, withshadowandbackground }) => {

  const item = useRef(null)
  
    const handleClick = () => {
      item.current.blur();
      setIsActive && setIsActive(false);
    };
  return (
    <StyledItem
      onClick={handleClick}
      to={link}
      withshadowandbackground={withshadowandbackground}
      ref={item}
    >
      {label}
    </StyledItem>
  );
};

export default MenuItem;
