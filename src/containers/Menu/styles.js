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
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 490px;
  width: 100%;
  display: flex;

  background-color: ${(props) => props.theme.secondBlack};
  position: relative;
  @media (min-width: 10px) and (max-width: 430px) {
    height: 350px;
  }

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

    @media (max-width: 700px) {
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      align-items: center;
      text-align: center;
      font-size: 55px;
    }
  }

  span {
    color: ${(props) => props.theme.white};
    font-size: 27px;
    font-weight: 300;
    @media (max-width: 700px) {
      font-size: 20px;
      text-align: center;
      max-width: 90%;
    }
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 20px 0;
  margin: 30px auto;
  @media (min-width: 45px) and (max-width: 900px) {
    display: flex;
    flex-wrap: wrap;
  }

  @media (min-width: 10px) and (max-width: 430px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    background-color: rgba(15, 15, 15, 0.86);
    border-radius: 35px;
    width: 95%;
    color: ${(props) =>
      props.$isActiveCategory ? props.theme.darkRed : props.theme.white};
  }
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

  @media (max-width: 900px) {
    border-bottom: none;
    font-weight: bold;

    justify-content: center;
    align-items: center;
    display: flex;
  }
`;

export const Title = styled.h1``;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 40px;
  justify-content: center;
  max-width: 1270px;
  gap: 60px;
  margin: 50px auto 0;
`;

export const CategoryMenu2 = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 20px 0;
  margin: 30px auto;
  @media (min-width: 45px) and (max-width: 900px) {
    display: flex;
    flex-wrap: wrap;
  }

  @media (min-width: 10px) and (max-width: 430px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    background-color: rgba(15, 15, 15, 0.86);
    border-radius: 35px;
    width: 95%;
    color: ${(props) =>
      props.$isActiveCategory ? props.theme.darkRed : props.theme.white};
  }
`;
