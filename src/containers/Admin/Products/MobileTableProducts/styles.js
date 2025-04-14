import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  .tableContainer {
    width: 90%;
    max-width: 100%;
    margin: 0 auto;
    overflow-x: auto;
  }
`;

export const TableBodyProducts = styled.tbody`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  justify-content: center;
`;
export const TdImage = styled.div`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 200px;
  border: 12px;
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: contain;
  display: block;
  margin: 0 auto;
`;

export const Tr = styled.tr`
  border-top: 2px dashed rgb(0, 0, 0);
`;

export const Td = styled.td`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  text-align: center;
`;

export const InfoGrid = styled.div``;

export const InfoItem = styled.div``;

export const Label = styled.span`
  color: ${(props) => props.theme.purple};
  font-size: 15px;
  font-weight: bold;
  line-height: 20px;
`;

export const Value = styled.span``;

export const EditButton = styled.button`
  border: transparent;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  svg {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.purple};
    border-radius: 8px;
    margin-top: 20px;
    height: 30px;
    width: 30px;
  }
`;
