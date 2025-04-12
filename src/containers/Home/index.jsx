import React from 'react';
import { Banner, Container, Content } from './styles.js';
import { CategoriesCarousel, OffersCarousel } from '../../components';

export function Home() {
  return (
    <main>
      <Banner>
        <h1>Bem-vindo(a)!!</h1>
      </Banner>

      <Container>
        <Content>
          <CategoriesCarousel />
          <OffersCarousel />
        </Content>
      </Container>
    </main>
  );
}
