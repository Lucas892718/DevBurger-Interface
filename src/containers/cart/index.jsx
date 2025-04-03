import React from 'react';
import Logo from '../../assets/LogoDevBurger.png';

import { Banner, Container, Content, Title } from './styles';
import { CartItems, CartResume } from '../../components';
export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt="Logo DevBurger" />
      </Banner>

      <Title>
        Checkout - pedido
        <hr />
      </Title>

      <Content>
        <CartItems />
        <CartResume />
      </Content>
    </Container>
  );
}
