// ./styles.js
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 280px) 1fr;
  height: 100vh;
  width: 100%;

  > div,
  > aside {
    background-color: ${(props) => props.theme.black};
    height: 100%;
  }

  main {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    background-color: ${(props) => props.theme.secondWhite};
    padding: 40px 20px;
    height: 100vh;
  }

  section {
    margin: 0 auto;
    max-width: 1280px;
    width: 100%;
  }
`;
