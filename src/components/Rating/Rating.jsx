import { Container } from './RatingStyles';
import Fullstar from '../../assets/star.svg';
import Emptystar from '../../assets/empty-star.svg';

export function Rating({ rating }) {
  return (
    <Container>
      <img src={rating >= 1 ? Fullstar : Emptystar} alt='' />
      <img src={rating >= 2 ? Fullstar : Emptystar} alt='' />
      <img src={rating >= 3 ? Fullstar : Emptystar} alt='' />
      <img src={rating >= 4 ? Fullstar : Emptystar} alt='' />
      <img src={rating >= 5 ? Fullstar : Emptystar} alt='' />
    </Container>
  );
}
