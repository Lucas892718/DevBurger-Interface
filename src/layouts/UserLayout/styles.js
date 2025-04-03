import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1; // Faz o main ocupar o espaço disponível e empurra o footer pra baixo
  }
`;
