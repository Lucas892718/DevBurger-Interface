import styled from 'styled-components';

import texture from '../../assets/BackGround.png';
import BackGround from '../../assets/LoginBackground.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.secondWhite};
  min-height: 100vh;
  background:
    linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),
    url(${BackGround});
  min-height: 100vh;

  @media (max-width: 500px) {
    overflow-x: hidden;
  }
`;

export const Banner = styled.h1`
  background-image: url(${texture});
  background-color: ${(props) => props.theme.white};

  position: relative;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 100%;
  }
`;

export const Title = styled.h1`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.gren};

  font-size: 40px;
  font-weight: 700;
  flex-direction: column;
  position: relative;

  hr {
    width: 57px;
    height: 5px;
    border-color: transparent;
    background-color: ${(props) => props.theme.purple};
  }
  @media (max-width: 600px) {
    font-size: 35px;
    text-align: center;
    flex-wrap: nowrap;
  }
`;
export const Content = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr 30%;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;
