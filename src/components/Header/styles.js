import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: rgb(31, 31, 31);
  @media (max-width: 768px) {
    height: 145px;
  }
`;

export const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  height: 72px;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
      margin-bottom: 5px;
    }
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
  margin: 0 5px;
  font-weight: 500;
  transition: color 300ms ease-in;
  color: #fff;
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

  @media (max-width: 768px) {
    gap: 20px;
    margin-top: 15px;
  }
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
      font-size: 20px;
      font-weight: 700;

      @media (min-width: 200px) and (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    gap: 0;
  }
`;
