import styled from 'styled-components';
import LeftBackGround from '../../assets/LeftBackGroundImg.png';
import loginBackGround from '../../assets/LoginBackground.png';

import { Link as ReactLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LeftContainer = styled.div`
  background: url('${LeftBackGround}');
  background-size: cover;
  background-position: center;

  width: 100%;
  height: 100%;
  max-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 85%;
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
`;

export const Title = styled.h1`
  font-family: 'Road Rage', serif;
  font-weight: 500;
  font-size: 40px;
  color: ${(props) => props.theme.white};

  line-height: 40px;

  span {
    color: ${(props) => props.theme.purple};
    font-family: 'Road Rage', serif;
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
