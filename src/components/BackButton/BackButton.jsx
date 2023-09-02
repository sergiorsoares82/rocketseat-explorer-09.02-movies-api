import { Container } from './BackButtonStyle';
import { FiArrowLeft } from 'react-icons/fi';

export function BackButton() {
  return (
    <Container>
      <a href=''>
        <FiArrowLeft /> Voltar
      </a>
    </Container>
  );
}
