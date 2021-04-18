import React from 'react'
import styled from 'styled-components';
import {ReactComponent as TeacherAndStudent} from '../../assets/StudentAndTeacher.svg';

const StyledTeacherAndStudenIllustration = styled.div`
  position: relative;
  height: 40vw;
  top: 100px;
`;


const StyledTeacherAndStudent = styled(TeacherAndStudent)`
    height: 60%;
    position: absolute;
    right: 10vw;
    top: 50%;
    transform: translateY(-60%);
`;

const TeacherAndStudenIllustration = () => {
  return (
    <StyledTeacherAndStudenIllustration>
      <StyledTeacherAndStudent />
    </StyledTeacherAndStudenIllustration>
  );
}

export default TeacherAndStudenIllustration
