import styled from 'styled-components';
import LeftBackGround from '../../assets/LeftBackGroundImg.png';
import loginBackGround from '../../assets/LoginBackground.png';

import { Link as ReactLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  @media (max-width: 600px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  background: url('${LeftBackGround}');
  background-size: cover;
  background-position: center;

  width: 100%;
  height: auto;
  max-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 50%;

    @media (max-width: 600px) {
      width: 100%;
      max-width: 90%;
      margin-top: 120px;
      height: auto;
    }
  }
  @media (max-width: 600px) {
    max-width: 100%;
    width: 100%;
    margin-top: 100px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100%;
  width: 100%;
  max-width: 50%;
  padding-bottom: 25px;

  background: url('${loginBackGround}');
  background-size: cover;
  background-position: center;
  background-color: ${(props) => props.theme.mainBlack};

  p {
    color: white;
    font-size: 20px;
    font-weight: 600;
    a {
      color: white;
      text-decoration-line: underline;
      text-decoration-color: ${(props) => props.theme.white};
    }
  }
  @media (max-width: 600px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-family: 'Road Rage', serif;
  font-weight: 500;
  font-size: 40px;
  color: ${(props) => props.theme.purple};
  line-height: 40px;
  span {
    color: ${(props) => props.theme.purple};
    font-family: 'Road Rage', serif;
  }
  @media (max-width: 600px) {
    margin-top: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
    outline: none;
    color: black;
    font-weight: bold;
  }

  label {
    font-weight: 600;
    font-size: 18px;
    color: ${(props) => props.theme.white};
  }
  p {
    font-size: 14px;
    line-height: 80%;
    color: ${(props) => props.theme.darkRed};

    font-weight: 700;
    height: 10px;
  }
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: lime;
`;
