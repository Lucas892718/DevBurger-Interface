import React from 'react';
import Logo from '../../assets/LogoDevBurger.png';
import { navLinks } from './navLinks';
import { SignOut, House } from '@phosphor-icons/react';
import {
  Container,
  NavLinkContainer,
  Footer,
  NavLink,
  SpanContainer,
  ToHome
} from './styles';
import { useUser } from '../../hooks/UserContext';
import { useResolvedPath } from 'react-router-dom';
export function SideNavAdmin() {
  const { logout } = useUser();

  const { pathname } = useResolvedPath();
  return (
    <Container>
      <img src={Logo} alt="Logo-DevBurger" />

      <NavLinkContainer>
        {navLinks.map((NavigateLink) => (
          <NavLink
            key={NavigateLink.id}
            to={NavigateLink.path}
            $isActive={pathname === NavigateLink.path}
          >
            {NavigateLink.icon}
            <span>{NavigateLink.label} </span>
          </NavLink>
        ))}
      </NavLinkContainer>

      <Footer>
        <ToHome to={'/cardapio'}>
          <House size={32} />
        </ToHome>
        <NavLink to={'/login'} onClick={logout}>
          <SpanContainer>
            <SignOut />
            <span>Deslogar</span>
          </SpanContainer>
        </NavLink>
      </Footer>
    </Container>
  );
}
