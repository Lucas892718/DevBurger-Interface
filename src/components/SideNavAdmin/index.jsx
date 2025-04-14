import React from 'react';
import Logo from '../../assets/LogoDevBurger.png';
import { navLinks } from './navLinks';
import { SignOut } from '@phosphor-icons/react';
import { Container, NavLinkContainer, Footer, NavLink } from './styles.js';
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
        <NavLink to={'/login'} onClick={logout}>
          <SignOut />
          <span>Sair</span>
        </NavLink>
      </Footer>
    </Container>
  );
}
