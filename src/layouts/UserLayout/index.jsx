import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../../components';
import { Wrapper, MainContent } from './styles.js';

export function UserLayout() {
  return (
    <Wrapper>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </Wrapper>
  );
}
