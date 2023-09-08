import { Container } from './SignUpStyles';
import backimage from '../../assets/backimage.jpg';
import { api } from '../../services/api';
import { Input } from '../../components/Input/Input';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      alert('Todos os campos devem ser preenchidos!');
    }
    api
      .post('/users/create', { name, email, password })
      .then((response) => {
        console.log(response);
        alert('Usuário cadastrado com sucesso!');
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
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
          <h2>Crie sua conta</h2>
          <form action=''>
            <Input
              placeholder='Nome'
              type='text'
              icon={FiUser}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder='Email'
              type='email'
              icon={FiMail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder='Senha'
              type='password'
              icon={FiLock}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='button' onClick={handleSignUp}>
              Cadastrar
            </button>
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
