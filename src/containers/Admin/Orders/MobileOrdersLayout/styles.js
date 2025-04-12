import styled from 'styled-components';
import select from 'react-select';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductImg = styled.img`
  height: 100px;
  padding: 12px;
  border-radius: 17px;

  @media (max-width: 700px) {
    width: 100%;
    max-width: 200px;
    margin-top: 8px;
    border-radius: 8px;
  }
`;

export const SelectStatus = styled(select)`
  width: 200px;
`;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  margin: 28px 0;
  gap: 20px;
  width: 100%;
  padding: 0 auto;

  @media (max-width: 700px) {
    display: grid;
  }
`;
export const FilteredOptions = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${(props) =>
    props.$isActiveStatus ? props.theme.purple : props.theme.darkgray};
  border-bottom: ${(props) =>
    props.$isActiveStatus ? `2px solid ${props.theme.purple}` : 'none'};
  font-size: 18px;
  line-height: 20px;
  padding-bottom: 5px;
`;

export const ProductCard = styled.tr`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  padding: 12px;
  gap: 8px;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 3fr;
  align-items: center;
  gap: 8px;
`;

export const Tr = styled.tr`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  border-radius: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.mainBlack};
  background-color: rgba(88, 88, 88, 0.28);
`;

export const Td = styled.td`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
  text-align: center;
`;

export const Label = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.purple};
  margin-bottom: 4px;
`;

export const Value = styled.span``;
