import { Container } from './MovieCardStyle';
import { Tag } from '../Tag/Tag';
import { Rating } from '../Rating/Rating';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

export function MovieCard({ id, title, rating, description, tags }) {
  const navigate = useNavigate();
  async function handleMovieClick(clickedMovieId) {
    navigate(`/details/${clickedMovieId}`);
  }

  return (
    <Container onClick={() => handleMovieClick(id)}>
      <div className='title'>{title}</div>
      <Rating rating={rating} />
      <p className='summary'>{description}</p>
      <div className='tags'>
        {tags && tags.map((tag) => <Tag key={tag.id} title={tag.name} />)}
      </div>
    </Container>
  );
}
