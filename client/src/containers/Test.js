import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    width: 200px;
    height: 200px;
    background-color: blueviolet;
  }
`;

const StyledSvg = styled.svg`
  path {
    /* d: path(
      'M50 0 C100 2 100 50 100 50 C100 98 54 100 50 100 C0 98 0 50 0 50 C0 0 50 0 50 0'
    ); */
    d: ${({ isDarkMod }) =>
      isDarkMod
        ? `path('M50 0 C100 2 100 50 100 50 C100 98 54 100 50 100 C0 98 0 50 0 50 C0 0 50 0 50 0')`
        : `path('M45 0 C20 30 30 90 100 60 C90 98 54 100 50 100 C0 98 0 50 0 50 C0 0 50 0 45 0')`};
    fill: ${({ isDarkMod }) => (isDarkMod ? '#e1dfe9' : '#DE8704')};
    transition: all 1s ease;

    /* &:hover {
      d: path(
        'M45 0 C20 30 30 90 100 60 C90 98 54 100 50 100 C0 98 0 50 0 50 C0 0 50 0 45 0'
      );
      fill: #DE8704;
      transition: all 2s ease;
    } */
  }
`;

const Test = () => {
  const [isDarkMod, setIsDarkMod] = useState(false);

  return (
    <StyledDiv onClick={()=> setIsDarkMod(!isDarkMod)}>
      <StyledSvg
      isDarkMod={isDarkMod}
        width="500"
        height="500"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          //d="M45 0 C20 30 30 90 100 60 C90 98 54 100 50 100 C0 98 0 50 0 50 C0 0 50 0 45 0"
          //d="M50 0 C100 2 100 50 100 50 C100 98 54 100 50 100 C0 98 0 50 0 50 C0 0 50 0 50 0"
          fill="#E1DFE9"
          />
      </StyledSvg>
    </StyledDiv>
  );
};

export default Test;

// z Q
/* moon d: path('M40 0 Q20 80 100 70 Q85 95 50 100 Q5 95 0 50 Q5 10 40 0'); */
// sun d="M50 0 Q95 5 100 50 Q95 95 50 100 Q5 95 0 50 Q5 5 50 0"



      // <StyledSvg
      //   width="99"
      //   height="99"
      //   viewBox="-1 -1 100 100"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
      //     fill="#E1DFE9"
      //   />
      // </StyledSvg>
      // <StyledSvg
      //   width="100"
      //   height="100"
      //   viewBox="0 0 100 100"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M50 0 Q95 5 100 50 Q95 95 50 100 Q5 95 0 50 Q5 5 50 0"
      //     fill="#E1DFE9"
      //   />
      //   {/* <path d="M50 0 v100 M0 50 h100" fill="#E1DFE9" />
      //   <circle cx="50" cy="50" r="50" fill="red" opacity="0.5" /> */}
      // </StyledSvg>
      // <StyledSvg
      //   width="100"
      //   height="100"
      //   viewBox="0 0 100 100"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M40 0 Q20 80 100 70 Q85 95 50 100 Q5 95 0 50 Q5 10 40 0"
      //     fill="#E1DFE9"
      //   />
      //   {/* <path d="M50 0 v100 M0 50 h100" fill="#E1DFE9" />
      //   <circle cx="50" cy="50" r="50" fill="red" opacity="0.5" /> */}
      // </StyledSvg>




{/* <svg
  width="99"
  height="99"
  viewBox="0 0 99 99"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M98.0225 49.0112C98.0225 76.0794 76.0794 98.0225 49.0112 98.0225C21.9431 98.0225 0 76.0794 0 49.0112C0 21.9431 21.9431 0 49.0112 0C76.0794 0 98.0225 21.9431 98.0225 49.0112Z"
    fill="#E1DFE9"
  />
</svg>;
<svg
  width="91"
  height="105"
  viewBox="0 0 91 105"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M90.4767 88.6707C84.7282 94.4192 77.7344 98.7682 70.0363 101.381C62.3382 103.995 54.1421 104.802 46.0821 103.741C38.0221 102.68 30.3143 99.7785 23.5548 95.2619C16.7953 90.7454 11.1654 84.7345 7.10066 77.6941C3.03589 70.6537 0.645182 62.7726 0.113484 54.6604C-0.418213 46.5483 0.92335 38.4226 4.03439 30.9118C7.14544 23.4011 11.9426 16.7067 18.0547 11.3466C24.1668 5.98638 31.4301 2.10408 39.2826 0C39.2826 0 28.5 33.1942 43 58.1942C57.5 83.1942 90.4767 88.6707 90.4767 88.6707Z"
    fill="#E1DFE9"
  />
</svg>; */}



// path {
//   d: path("
//     M90.4767 88.6707c84.7282 94.4192 77.7344 98.7682 70.0363 101.381c62.3382
//       103.995 54.1421 104.802 46.0821 103.741c38.0221 102.68 30.3143 99.7785
//       23.5548 95.2619c16.7953 90.7454 11.1654 84.7345 7.10066 77.6941c3.03589
//       70.6537 0.645182 62.7726 0.113484 54.6604c-0.418213 46.5483 0.92335
//       38.4226 4.03439 30.9118c7.14544 23.4011 11.9426 16.7067 18.0547
//       11.3466c24.1668 5.98638 31.4301 2.10408 39.2826 0c39.2826 0 28.5 33.1942
//       43 58.1942c57.5 83.1942 90.4767 88.6707 90.4767 88.6707z
//   ");
//   fill: "#E1DFE9";
//   transition: all 0.35s ease;

//   &:hover {
//     d: path("
//       M98.0225 52.0112c98.0225 79.0794 76.0794 101.022 49.0112 101.022c21.9431
//         101.022 0 79.0794 0 52.0112c0 24.9431 21.9431 3 49.0112 3c76.0794 3
//         98.0225 24.9431 98.0225 52.0112z
//     ");
//     transition: all 0.35s ease;
//   }
// }
