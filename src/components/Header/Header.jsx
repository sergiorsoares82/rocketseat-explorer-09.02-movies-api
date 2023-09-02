import { Container } from './HeaderStyles';

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <input type='text' id='' placeholder='Pesquise pelo título do filme' />
      <div className='user'>
        <div className='left'>
          <span>Rodrigo Gonçalves</span>
          <a href=''>sair</a>
        </div>
        <img src='/image 1.png' alt='' />
      </div>
    </Container>
  );
}
