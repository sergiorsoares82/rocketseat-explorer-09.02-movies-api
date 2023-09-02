import { Container } from './SignUpStyles';
import backimage from '../../assets/backimage.jpg';
import { Input } from '../../components/Input/Input';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

export function SignUp() {
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
          <h2>Crie sua conta</h2>
          <form action=''>
            <Input placeholder='Nome' type='text' icon={FiUser} />
            <Input placeholder='Email' type='email' icon={FiMail} />
            <Input placeholder='Senha' type='password' icon={FiLock} />
            <button>Cadastrar</button>
          </form>
          <a href='/'>
            <FiArrowLeft /> Voltar para o login
          </a>
        </div>
      </div>
      <div className='image-side'>
        <img src={backimage} alt='' />
      </div>
    </Container>
  );
}
