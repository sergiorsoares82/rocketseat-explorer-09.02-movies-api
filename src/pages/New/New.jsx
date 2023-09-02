import { BackButton } from '../../components/BackButton/BackButton';
import { Header } from '../../components/Header/Header';
import { Input } from '../../components/Input/Input';
import { MovieTag } from '../../components/MovieTag/MovieTag';
import { Container } from './NewStyles';
import { FiArrowLeft } from 'react-icons/fi';

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <BackButton />
        <section className='movie-input'>
          <h1>Novo filme</h1>
          <div className='inputs'>
            <Input placeholder='Título' />
            <Input placeholder='Sua nota de 0 a 5' />
          </div>
          <textarea placeholder='Observações'></textarea>
          <div className='marcadores'>
            <h2>Marcadores</h2>
            <div className='tags'>
              <MovieTag value='Ficção Científica' />
              <MovieTag value='Ação' isNew />
            </div>
          </div>
          <div className='actions'>
            <button className='btn-del'>Excluir filme</button>
            <button className='btn-save'>Salvar alterações</button>
          </div>
        </section>
      </main>
    </Container>
  );
}
