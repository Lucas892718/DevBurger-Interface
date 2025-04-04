import React from 'react';
import { ContainerButton } from './styles.js';
import CartBtn from '../../assets/Cart.svg';
import { toast } from 'react-toastify';
export function CartButton({ ...props }) {
  return (
    <ContainerButton
      {...props}
      onClick={() => {
        toast.success('Produto adicionado ao carrinho');
        setTimeout(() => {}, 500);
      }}
    >
      <img src={CartBtn} alt="Carrinho-de-compras" />
    </ContainerButton>
  );
}
