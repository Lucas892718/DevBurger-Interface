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
    @media (max-width: 700px) {
      width: 30%;
      margin: 20px 20px;
      align-self: center;
    }
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

export const SpanContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 25px;
  flex-direction: row;
  align-items: center;
`;
export const Footer = styled.footer`
  width: 100%;
  margin-top: auto;
`;

export const ToHome = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 12px 20px;
  text-decoration: none;
  width: 95%;
  max-width: 700px;
  margin: 0 auto;
  border-radius: 15px;
  color: ${(props) => props.theme.white};
  background-color: rgb(70, 0, 59);
  @media (max-width: 700px) {
    margin-top: 20px;
  }
`;
