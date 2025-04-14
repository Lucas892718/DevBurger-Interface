import styled from 'styled-components';

export const Container = styled.div`
  height: 58px;
  width: 100%;
  top: 250px;
  background-color: ${(props) => props.theme.purple};
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-weight: 500;
    font-size: 16px;
    color: #${(props) => props.theme.white};
  }

  span {
    color: rgb(0, 255, 64);
    font-weight: 800;
  }

  @media (max-width: 521px) {
    p {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
    span {
      margin-left: 5px;
    }
  }
`;

export const CopyrightContainer = styled.div``;
