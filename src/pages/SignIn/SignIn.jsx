import { Container } from './SignInStyles';
import backimage from '../../assets/backimage.jpg';
import { Input } from '../../components/Input/Input';
import { FiMail, FiLock } from 'react-icons/fi';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  function handleSignIn() {
    signIn(email, password);
  }

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
            <Input
              type='text'
              placeholder='Email'
              icon={FiMail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type='password'
              placeholder='Senha'
              icon={FiLock}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='button' onClick={handleSignIn}>
              Entrar
            </button>
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
