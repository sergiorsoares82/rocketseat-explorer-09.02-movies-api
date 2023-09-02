import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Avatar, Container, Form } from './ProfileStyle';
import { Input } from '../../components/Input/Input';
// import { Button } from '../../components/Button/';

export function Profile() {
  return (
    <Container>
      <header>
        <Link to='/'>
          <FiArrowLeft />
        </Link>
      </header>
      <Form>
        <Avatar>
          <img
            src='https://github.com/rodrigorgtic.png'
            alt='Foto do usuário'
          />
          <label htmlFor='avatar'>
            <FiCamera />
            <input id='avatar' type='file' />
          </label>
        </Avatar>
        <Input placeholder='Nome' type='text' icon={FiUser} />
        <Input placeholder='Email' type='email' icon={FiMail} />
        <Input placeholder='Senha atual' type='password' icon={FiLock} />
        <Input placeholder='Nova Senha' type='password' icon={FiLock} />
        <button>Salvar</button>
      </Form>
    </Container>
  );
}
