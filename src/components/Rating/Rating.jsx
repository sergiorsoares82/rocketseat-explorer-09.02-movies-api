import { Container } from './RatingStyles';
import Fullstar from '../../assets/star.svg';
import Emptystar from '../../assets/empty-star.svg';

export function Rating() {
  return (
    <Container>
      <img src={Fullstar} alt='' />
      <img src={Fullstar} alt='' />
      <img src={Fullstar} alt='' />
      <img src={Fullstar} alt='' />
      <img src={Emptystar} alt='' />
    </Container>
  );
}
