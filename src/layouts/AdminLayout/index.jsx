import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { SideNavAdmin } from '../../components';
import { Container } from './styles.js';
export function AdminLayout() {
  const { admin: isAdmin } = JSON.parse(
    localStorage.getItem('devburger:UserInfo')
  );

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
