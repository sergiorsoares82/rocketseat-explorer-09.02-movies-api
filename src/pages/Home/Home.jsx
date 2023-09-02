import { Header } from '../../components/Header/Header';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { Container } from './HomeStyles';
import { FiPlus } from 'react-icons/fi';

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <section className='heading'>
          <span>Meus filmes</span>
          <button>
            <FiPlus /> Adicionar Filme
          </button>
        </section>
        <section className='cards'>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </section>
      </main>
    </Container>
  );
}
