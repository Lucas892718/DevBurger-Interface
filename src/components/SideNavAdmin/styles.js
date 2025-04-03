import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${(props) => props.theme.black};
  width: 100%;

  img {
    align-self: center;
    width: 60%;
    margin: 40px 0;
  }
`;
export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-top: 20px;

  :hover {
    background-color: ${(props) => props.theme.purple};
  }
`;
export const NavLink = styled(Link)`
  display: flex;
  justify-content: flex-start;

  align-items: center;
  gap: 15px;
  padding: 12px 20px;
  text-decoration: none;
  width: 100%;
  color: ${(props) => props.theme.white};
  font-size: 22px;
  background-color: ${(props) =>
    props.$isActive ? props.theme.purple : props.theme.transparent};
`;
export const Footer = styled.footer`
  width: 100%;
  margin-top: auto;
`;
