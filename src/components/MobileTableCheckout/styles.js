import styled from 'styled-components';

export const ProductImage = styled.img`
  height: 80px;
  width: 100px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    color: ${(props) => props.theme.white};

    border-radius: 5px;
    background-color: ${(props) => props.theme.purple};
    border-color: transparent;
    transition: all 0.4s;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.secondDarkPurple};
    }
  }
`;
