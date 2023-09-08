import { Container } from './BackButtonStyle';
import { FiArrowLeft } from 'react-icons/fi';

export function BackButton({ onClick }) {
  return (
    <Container>
      <button type='button' onClick={onClick}>
        <FiArrowLeft /> Voltar
      </button>
    </Container>
  );
}
