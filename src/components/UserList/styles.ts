import styled from 'styled-components';

  
export const Container = styled.div`
  grid-area: UL;

  display: flex;
  flex-direction: column;

  padding: 3px 6px 0 16px;

  background-color: var(--secondary);

  max-heigth: calc(100vh - 46px); // 100% da tela menos a altura da primeira linha, que tem 46px de altura

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

export const Role = styled.span`
  margin-top: 20px;

  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  color: var(--gray);
`;

export const User = styled.div`
  display: flex;
  align-items: center;

  margin-top: 5px;
  padding: 5px;

  cursor: pointer;

  border-radius: 5%;

  background: transparent;
  transition: background 0.2;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  > strong {
    margin-left: 13px;
    font-weight: 500;
    color: var(--white);
    opacity: 0.7;

    white-space: nowrap; // nao permitir quebrar linha
    text-overflow: ellipsis; // texto que tiver faltando ele cobre com os tres pontinhos (...)
    overflow: hidden; // o que passar para fora da tela nao vai aparecer   
  }

  > span {
    margin-left: 9px;

    background-color: var(--discord);
    color: var(--white);
    
    border-radius: 4px;
    padding: 4px 5px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0; // Nao permite o avatar ficar esmagado, oval

  width: 32px;
  height: 32px;
  
  background-color: var(--primary);
  border-radius: 50%;

  &.bot {
    background-color: var(--mention-detail);
  }
`;
