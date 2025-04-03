import styled from 'styled-components';
import select from 'react-select';

export const ProductImg = styled.img`
  height: 100px;
  padding: 12px;
  border-radius: 17px;
`;

export const SelectStatus = styled(select)`
  width: 200px;
`;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  margin: 28px 0;
  gap: 50px;
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
