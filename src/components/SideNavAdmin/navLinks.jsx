import React from 'react';
import { List, ListPlus, Receipt } from '@phosphor-icons/react';
export const navLinks = [
  {
    id: 1,
    path: '/admin/pedidos',
    label: 'Pedidos',
    icon: <Receipt />
  },
  {
    id: 2,
    path: '/admin/produtos',
    label: 'Produtos',
    icon: <List />
  },
  {
    id: 3,
    path: '/admin/novos-produtos',
    label: 'Adicionar um produto',
    icon: <ListPlus />
  }
];
