import React from 'react';
import { Banner, Container, Content } from './styles.js';
import { CategoriesCarousel, OffersCarousel } from '../../components';
import { useUser } from '../../hooks/UserContext';
import { useNavigate } from 'react-router-dom';
export function Home() {
  const navigate = useNavigate();
  return (
    <main>
      <button
        onClick={() => navigate('/admin/produtos')}
        style={{ backgroundColor: 'transparent' }}
      >
        .
      </button>
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
