import { Container } from './SignInStyles';
import backimage from '../../assets/backimage.jpg';
import { Input } from '../../components/Input/Input';
import { FiMail, FiLock } from 'react-icons/fi';

export function SignIn() {
  return (
    <Container>
      <div className='sign-side'>
        <div className='login-area'>
          <div className='title'>
            <h1>Rocket Movies</h1>
            <span className='subtitle'>
              Aplicação para acompanhar tudo que assistir
            </span>
          </div>
          <h2>Faça seu login</h2>
          <form action=''>
            <Input placeholder='Email' icon={FiMail} />
            <Input placeholder='Senha' icon={FiLock} />
            <button>Entrar</button>
          </form>
          <a href='/signup'>Criar conta</a>
        </div>
      </div>
      <div className='image-side'>
        <img src={backimage} alt='' />
      </div>
    </Container>
  );
}
