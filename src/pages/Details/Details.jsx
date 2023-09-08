import { Header } from '../../components/Header/Header';
import { Container } from './DetailsStyle';
import { BackButton } from '../../components/BackButton/BackButton';
import { Rating } from '../../components/Rating/Rating';
import { Tag } from '../../components/Tag/Tag';
import UserImg from '../../../public/image 1.png';
import { FiClock } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { useAuth } from '../../hooks/auth';

export function Details() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const [date, setDate] = useState('');
  const params = useParams();
  const { user } = useAuth();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function navigateBackOnePage() {
    navigate(-1);
  }

  async function handleSaveMovie() {
    await api.put(`/movie`, {});
    navigate(-1);
  }

  async function handleDeleteMovie() {
    await api.delete(`/movies/${params.movieId}`);
    navigate(-1);
  }

  useEffect(() => {
    async function loadMovieDetails() {
      const response = await api.get(`/movies/${params.movieId}`);
      setMovie(response.data);
      setDate(movie.created_at);
    }
    loadMovieDetails();
  }, []);
  return (
    <Container>
      <Header />
      <main>
        <BackButton type='button' onClick={navigateBackOnePage} />
        <div className='movie-info'>
          <div className='movie-main-heading'>
            <div className='title'>{movie.title}</div>
            <Rating rating={movie.rating} />
          </div>
          <div className='movie-sub-heading'>
            <img src={avatarURL} alt='' />
            <span className='author'>{`Por ${user.name}`}</span>
            <FiClock />
            <span className='time'>{movie.created_at}</span>
          </div>
          <div className='tags'>
            {movie.tags &&
              movie.tags.map((tag) => <Tag key={tag.id} title={tag.name} />)}
          </div>
          <div className='description'>
            <p>{movie.description}</p>
          </div>
        </div>
        <div className='actions'>
          {/* <button className='btn-del' type='button' onClick={handleDeleteMovie}>
            Excluir filme
          </button> */}
          <button
            className='btn-save'
            type='button'
            onClick={handleDeleteMovie}
          >
            Excluir filme
          </button>
        </div>
      </main>
    </Container>
  );
}
