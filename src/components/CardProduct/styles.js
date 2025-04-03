import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.mainBlack};

  margin-bottom: 50px;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    cursor: grab;
    gap: 20px;
  }
  p {
    font-size: 23px;
    color: ${(props) => props.theme.orange};

    font-weight: 800;
    line-height: 20px;
    margin-top: 40px;
  }
  strong {
    font-size: 22px;
    color: ${(props) => props.theme.white};

    font-weight: 800;
    line-height: 20px;
  }
`;

export const CardImage = styled.img`
  height: 100px;
  position: absolute;
  top: -50px;
  border-radius: 50px 20px 20px 0;
`;
