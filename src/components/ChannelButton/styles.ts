import styled from 'styled-components';
import { FiHash } from 'react-icons/fi';
import { MdPersonAdd, MdSettings } from 'react-icons/md';

  
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: background-color 0.2s;

  > div {
    display: flex;
    align-items: center;
  }
  > div span {
    margin-left: 5px;
    color: var(--senary);
  }
  &:hover,
  &.active {
    background-color: var(--quinary);
    > div span {
      color: var(--white);
    }

    > .leftIcons {
      display: inline;
    }
  }

  > .leftIcons {
    display: none;
  }
`;


export const HashtagIcon = styled(FiHash)`
  width: 20px;
  height: 20px;

  color: var(--symbol);
`;

export const InviteIcon = styled(MdPersonAdd)`
  width: 16px;
  height: 16px;

  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(MdSettings)`
  width: 16px;
  height: 16px;

  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2;

  margin-left: 4px;

  &:hover {
    color: var(--white);
  }
`;

