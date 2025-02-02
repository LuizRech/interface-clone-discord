import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';

  
export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;
  padding: 24px 9.5px 0 16px;

  background-color: var(--secondary);
`;

export const Category = styled.div`
  display: flex;
  align-tems: center;
  justify-content: space-between;

  margin-bottom: 6px;
  
  > span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
  }
`;

export const AddCategoryIcon = styled(FiPlus)`
  width: 21px;
  heigth: 21px;

  color: var(--symbol);

  cursor: pointer;
`;
