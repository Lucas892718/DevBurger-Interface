import React from 'react';
import { UserCircle, ShoppingCart, LineVertical } from '@phosphor-icons/react';
import { useResolvedPath } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';

import LeaveButton from '../confirmLeaveButton';
import {
  Container,
  Content,
  HeaderLink,
  LinkContainer,
  Navigation,
  Options,
  Profile
} from './styles.js';

export function Header() {
  const { pathname } = useResolvedPath();

  const { userInfo } = useUser();
  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink to={'/'} $isActive={pathname === '/'}>
              Home
            </HeaderLink>
            <LineVertical size={24} color="#ffffff" />
            <HeaderLink to={'/cardapio'} $isActive={pathname === '/cardapio'}>
              Cardápio
            </HeaderLink>
          </div>
        </Navigation>

        <Options>
          <Profile>
            <UserCircle color="#fdfdfd" size={25} />
            <div>
              <p>
                Olá, <span>{userInfo.name}</span>
              </p>
              <LeaveButton />
            </div>
          </Profile>
          <LinkContainer>
            <ShoppingCart color="#ffffff" size={24} />
            <HeaderLink to={'/carrinho'}>Carrinho</HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  );
}
