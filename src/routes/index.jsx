import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { EditProduct, NewProducts } from '../containers/Admin';
import { UserLayout, AdminLayout } from '../layouts';
import { PrivateRoute } from './protectedRoutes';
import {
  Login,
  Cart,
  Menu,
  Home,
  Register,
  CompletePayment,
  Checkout,
  Orders,
  Products
} from '../containers';

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <UserLayout />
          </PrivateRoute>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/complete" element={<CompletePayment />} />
      </Route>

      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <AdminLayout />
          </PrivateRoute>
        }
      >
        <Route path="/admin/pedidos" element={<Orders />} />
        <Route path="/admin/novos-produtos" element={<NewProducts />} />
        <Route path="/admin/editar-produtos" element={<EditProduct />} />
        <Route path="/admin/produtos" element={<Products />} />
      </Route>

      <Route path="/cadastro" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
