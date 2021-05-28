import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Student } from '../../assets/StudentAndTeacher.svg';

const StyledStudenIllustration = styled.div`
  width: 35vw;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const StyledStudent = styled(Student)`
  width: 90%;
`;

const StudenIllustration = () => {
  return (
    <StyledStudenIllustration>
      <StyledStudent />
    </StyledStudenIllustration>
  );
};

export default StudenIllustration;
