import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Emial} from '../../assets/iconmonstr-email-2.svg';
import { ReactComponent as Messenger} from '../../assets/iconmonstr-facebook-messenger-1.svg';

const StyledCreated = styled.div`
  display: flex;
  flex-direction: column;


`;

const Created = () => {
  return (
    <StyledCreated>
      <h4>Created by Antek Kois</h4>
      <a href="mailto:koisantek96@gmail.com"><Emial/>koisantek96@gmail.com</a>
      <a href="https://www.messenger.com/t/antek.kois"><Messenger/>Antek Kois</a>
    </StyledCreated>
  );
};

export default Created;
