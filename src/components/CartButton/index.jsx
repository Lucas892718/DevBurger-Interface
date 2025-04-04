import React from 'react';
import { ContainerButton } from './styles.js';
import CartBtn from '../../assets/Cart.svg';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export function CartButton({ onClick, ...props }) {
  const handleClick = (e) => {
    if (onClick) onClick(e);
    toast.success('Produto adicionado ao carrinho');
  };
  return (
    <ContainerButton onClick={handleClick} {...props}>
      <img src={CartBtn} alt="Carrinho-de-compras" />
    </ContainerButton>
  );
}

CartButton.propTypes = {
  onClick: PropTypes.func
};
