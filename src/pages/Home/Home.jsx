import { api } from '../../services/api';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { Container } from './HomeStyles';
import { FiPlus } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export function Home() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');

  function handleTitleSearch(value) {
    setTitle(value);
  }

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await api.get(`/movies?title=${title}`);
        setMovies(response.data);
      } catch (error) {
        if (error.response.status === 401)
          [localStorage.removeItem('@rocketmovies:user')];
        console.log(error);
      }
    }
    fetchMovies();
  }, [title]);

  return (
    <Container>
      <Header handleSearchChange={handleTitleSearch} />
      <main>
        <section className='heading'>
          <span>Meus filmes</span>
          <Link to='/new'>
            <FiPlus /> Adicionar Filme
          </Link>
        </section>
        <section className='cards'>
          {movies &&
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                description={movie.description}
                rating={movie.rating}
                tags={movie.movieTags}
              />
            ))}
        </section>
      </main>
    </Container>
  );
}
