import styled from 'styled-components';

export const Wrapper = styled.div`
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;

export const Root = styled.table`
  max-width: 800px;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  border-collapse: collapse;
  background-color: ${(props) => props.theme.secondWhite};
  border-radius: 20px;
`;

export const Header = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 16px;
  text-align: left;
  color: #fff;
  background-color: #484848;
  border-bottom: 1px dashed gray;

  &:last-child {
    border-top-right-radius: 20px;
  }

  &:first-child {
    border-top-left-radius: 20px;
  }
`;

export const Td = styled.td`
  padding: 16px;
  color: #484848;
  font-weight: 500;
  line-height: 115%;
`;

export const Body = styled.tbody`
  background-color: ${(props) => props.theme.secondWhite};
  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;
