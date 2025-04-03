import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.black};
  border-radius: 20px;
  margin-bottom: 15px;
  border: none;
  color: ${(props) => props.theme.white};
  font-size: 20px;
  font-weight: 400;
  padding-left: 20px;

  &::placeholder {
    color: ${(props) => props.theme.white};
    font-size: 20px;
    font-weight: 400;
    padding-left: 20px;
    display: flex;
  }
`;

export const ContainerItemsFiltred = styled.div``;

export const CardProduct = styled.div``;

export const ProductNotFound = styled.h1`
  font-size: 20px;
  color: red; /* Apenas para garantir que o texto fique visível */
  text-align: center;
  visibility: visible;
`;
