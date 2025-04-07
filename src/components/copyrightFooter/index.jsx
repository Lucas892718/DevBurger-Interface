import React from 'react';
import { Container, CopyrightContainer } from './styles';
export function Footer() {
  return (
    <Container>
      <CopyrightContainer>
        <p>
          Desenvolvido por <span>DevClub</span> - 2025 - Todos os direitos
          reservados
        </p>
      </CopyrightContainer>
    </Container>
  );
}
