import styled from 'styled-components';
import { FiAtSign } from 'react-icons/fi';

export const Container = styled.div`
  grid-area: CD;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--primary);
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px 0;

  max-height: calc(100vh - 46px - 68px); // 100% H menos header menos input de texto, na parte inferior
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary)
  }
`;

export const InputWrapper = styled.div`
  width: 100%;

  padding: 0 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;

  padding: 0 10px 0 57px;
  
  border-radius: 7px;

  color: var(--white);
  background-color: var(--chat-input);

  position: relative;

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;

    top: -50%;
    left: 14px;

    transition: 180ms ease-in-out;
  }
`;

export const InputIcon = styled(FiAtSign)`
  width: 24px;
  height: 20px;

  color: var(--gray);
`;
