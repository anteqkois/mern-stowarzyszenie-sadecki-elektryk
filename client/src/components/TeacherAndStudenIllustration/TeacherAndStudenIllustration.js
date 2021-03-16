import React from 'react'
import styled from 'styled-components';
import {ReactComponent as TeacherAndStudent} from '../../assets/StudentAndTeacher.svg';
import {ReactComponent as StainTwo} from '../../assets/StainTwo.svg';

const StyledTeacherAndStudenIllustration = styled.div`
  position: relative;
  height: 40vw;
`;

const StyledStainTwo = styled(StainTwo)`
    width: 60vw;
    position: absolute;
    right: 0;
`;

const StyledTeacherAndStudent = styled(TeacherAndStudent)`
    height: 60%;
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-60%);
`;

const TeacherAndStudenIllustration = () => {
  return (
    <StyledTeacherAndStudenIllustration>
      <StyledStainTwo />
      <StyledTeacherAndStudent />
    </StyledTeacherAndStudenIllustration>
  );
}

export default TeacherAndStudenIllustration
