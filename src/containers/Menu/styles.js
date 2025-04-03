import styled from 'styled-components';
import BannerImage from '../../assets/BackGroundBanner.png';
import MenuBackGround from '../../assets/LoginBackground.png';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.mainBlack} url(${MenuBackGround});
  overflow-x: hidden;
  position: relative;
`;
export const Banner = styled.div`
  background-image: url(${BannerImage});
  height: 490px;
  width: 100%;
  display: flex;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme.secondBlack};

  h1 {
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 25px 0;
    left: 15%;

    font-size: 96px;
    color: ${(props) => props.theme.white};

    font-weight: 400;
    font-family: 'Road Rage', serif;
  }

  span {
    color: ${(props) => props.theme.white};

    font-size: 27px;
    font-weight: 300;
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 20px 0;
  margin: 30px auto;
`;

export const CategoryButton = styled(Link)`
  margin: 0 20px;
  text-decoration: none;
  cursor: pointer;
  background: none;
  font-size: 23px;
  font-weight: 600;
  padding-bottom: 5px;
  line-height: 20px;
  border-bottom: ${(props) =>
    props.$isActiveCategory ? `4px solid ${props.theme.orange}` : 'none'};

  color: ${(props) =>
    props.$isActiveCategory ? props.theme.orange : props.theme.white};
`;

export const Title = styled.h1``;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  justify-content: center;
  max-width: 1270px;
  gap: 60px;
  margin: 50px auto 0;
`;
