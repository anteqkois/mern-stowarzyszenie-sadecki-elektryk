import React from 'react';
import styled from 'styled-components';

const StyledImageBlock = styled.div`
  position: relative;

  ::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 21%,
      rgba(255, 255, 255, 0.2757878151260504) 40%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  img {
    width: 100vw;
    //height: 150px;
    height: 40vw;
    object-fit: cover;
  }

  h1 {
    width: 100%;
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -120%);
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.accent};
    font-size: ${({ theme }) => theme.typography.sizeH3};
    font-weight: ${({ theme }) => theme.typography.weightBlack};
    text-shadow: 1px 3px 10px ${({ theme }) => theme.colors.text};
    z-index: ${({ theme }) => theme.zIndex.level1};
  }

  ${({ theme }) => theme.media.tablet} {
    img {
      //height: 300px;
    }
    h1 {
      font-size: ${({ theme }) => theme.typography.sizeH2};
      /* left: 50%;
      top: 100%;
      transform: translate(-50%, -100%); */
    }
  }
  ${({ theme }) => theme.media.bigTablet} {
    img {
      //height: 300px;
    }
    h1 {
      font-size: ${({ theme }) => theme.typography.sizeH1};
    }
  }
`;

const ImageBlock = ({ img, title }) => {
  return (
    <StyledImageBlock>
      <img
        src={img}
        alt="Zdjęcie z wydarzenia organizowanego przez Stowarzyszenie Sądecki Elektryk"
      />
      <h1>{title}</h1>
    </StyledImageBlock>
  );
};

export default ImageBlock;
