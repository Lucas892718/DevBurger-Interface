import React, { useState, useEffect } from 'react';
import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/currenyFormat.js';
import { toast } from 'react-toastify';
import { api } from '../../services/api.js';
import { Container } from './styles.js';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';
export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryPrice] = useState(500);

  const { cartProducts, clearCart } = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);

    setFinalPrice(sumAllItems);
  }, [cartProducts]);

  const submitOrder = async () => {
    const products = cartProducts.map((product) => {
      return {
        id: product.id,
        quantity: product.quantity,
        price: product.price
      };
    });

    try {
      const { data } = await api.post('/create-payment-intent', { products });
      navigate(`/checkout`, {
        state: data
      });
      clearCart();
    } catch (err) {
      toast.error('Ocorreu um erro, tente novamente', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      });
    }
  };

  return (
    <div>
      <Container>
        <div className="container-top">
          <h1 className="title">Resumo do pedido</h1>
          <p className="itens">Itens</p>
          <p className="item-price">{formatPrice(finalPrice)}</p>
          <p className="delivery-text">Taxa de entega</p>
          <p className="delivery-price">{formatPrice(deliveryPrice)}</p>
        </div>
        <div className="container-bottom">
          <p className="total">Total</p>
          <p className="total-price">
            {formatPrice(finalPrice + deliveryPrice)}
          </p>
        </div>
      </Container>
      <Button
        onClick={() =>
          cartProducts.length === 0
            ? toast.error('Não é possivel realizar pedido sem produtos😠')
            : submitOrder()
        }
      >
        Confirmar Pedido
      </Button>
    </div>
  );
}
