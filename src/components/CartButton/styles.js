import styled from 'styled-components';

export const ContainerButton = styled.button`
  background-color: rgb(146, 89, 172);

  width: 100%;
  height: 52px;
  border: 0;
  border-radius: 5px;
  font-size: 30px;
  color: ${(props) => props.theme.secondDarkPurple};

  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  img {
    height: 52px;
  }

  &:hover {
    opacity: 0.9;
  }
`;
