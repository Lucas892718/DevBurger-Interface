import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { SideNavAdmin } from '../../components';
import { Container } from './styles.js';
export function AdminLayout() {
  const userInfo = localStorage.getItem('devburger:UserInfo');

  if (!userInfo) {
    return <Navigate to="/login" />;
  }

  const { admin: isAdmin } = JSON.parse(userInfo);

  return isAdmin ? (
    <Container>
      <SideNavAdmin />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </Container>
  ) : (
    <Navigate to="/login" />
  );
}
