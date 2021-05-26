import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Student } from '../../assets/StudentAndTeacher.svg';

const StyledStudenIllustration = styled.div`
  width: 35vw;
  display: flex;
  justify-content: center;
  align-items: center;
  //position: relative;
`;
const StyledStudent = styled(Student)`
  width: 90%;
  /* position: absolute;
  right: 10vw;
  top: 50%;
  transform: translateY(-60%); */
`;

const StudenIllustration = () => {
  return (
    <StyledStudenIllustration>
      <StyledStudent />
    </StyledStudenIllustration>
  );
};

export default StudenIllustration;
