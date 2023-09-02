import { Container } from './MovieTagStyles';
import { FiPlus, FiX } from 'react-icons/fi';

export function MovieTag({ isNew, value, onClick, ...rest }) {
  return (
    <Container $isnew={isNew}>
      <input type='text' value={value} id='' />
      <button
        type='button'
        onClick={onClick}
        className={isNew ? 'btn-add' : 'btn-del'}
      >
        {isNew ? <FiX /> : <FiPlus />}
      </button>
    </Container>
  );
}
