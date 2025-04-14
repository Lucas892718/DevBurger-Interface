import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
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
  padding-left: 20px; /* Adicionado aqui */

  &::placeholder {
    color: ${(props) => props.theme.white};
    font-size: 20px;
    font-weight: 400;
  }
`;

export const ContainerItemsFiltred = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CardProduct = styled.div``;

export const ProductNotFound = styled.h1`
  font-size: 25px;
  font-weight: 700;
  box-shadow: violet inset 0 0 50px 10px;
  border-radius: 5px;
  color: ${(props) => props.theme.black};
  text-align: center;
  visibility: visible;
  margin: 20px 0;
  padding: 20px;
`;
