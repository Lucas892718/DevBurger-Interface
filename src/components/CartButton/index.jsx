import React from 'react';
import { ContainerButton } from './styles.js';
import CartBtn from '../../assets/Cart.svg';

export function CartButton({ ...props }) {
  return (
    <ContainerButton {...props}>
      <img src={CartBtn} alt="Carrinho-de-compras" />
    </ContainerButton>
  );
}
