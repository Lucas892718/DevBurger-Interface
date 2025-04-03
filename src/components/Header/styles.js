import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: rgb(31, 31, 31);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  height: 72px;
  justify-content: center;

  div {
    margin-left: 56px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

export const HeaderLink = styled(Link)`
  color: ${({ $isActive }) =>
    $isActive
      ? (props) => props.theme.purple
      : (props) => props.theme.darkGray};

  border-bottom: ${({ $isActive }) =>
    $isActive ? `2px solid ${(props) => props.theme.purple}` : 'none'};
  text-decoration: none;
  font-size: 16px;
  margin: 0 15px;
  font-weight: 500;
  transition: color 300ms ease-in;
  &:hover {
    color: ${(props) => props.theme.purple};
  }
  p {
    width: 50px;
    height: 10px;
    background-color: ${(props) => props.theme.purple};
  }
`;
export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
`;
export const Profile = styled.div`
  display: flex;
  font-size: 13px;
  align-items: center;
  gap: 12px;

  p {
    line-height: 90%;
    margin: 10px 0;
    font-size: 15px;
    color: #fff;
    font-weight: 300;
    span {
      color: ${(props) => props.theme.gren};

      font-weight: 700;
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
