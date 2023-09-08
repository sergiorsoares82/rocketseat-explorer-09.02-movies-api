import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Avatar, Container, Form } from './ProfileStyle';
import { Input } from '../../components/Input/Input';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
// import { Button } from '../../components/Button/';

export function Profile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const userData = {
      name,
      email,
      avatar: user.avatar,
      passwordOld,
      passwordNew,
    };

    updateProfile({ user: userData, avatarFile });
  }

  function handleChangeAvatar(e) {
    const file = e.target.files[0];
    setAvatarFile(file); // esse arquivo é passado para ser salvo

    const imagePreview = URL.createObjectURL(file); // cria uma DOMString
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <Link to='/'>
          <FiArrowLeft />
        </Link>
      </header>
      <Form>
        <Avatar>
          <img src={avatar} alt='Foto do usuário' />
          <label htmlFor='avatar'>
            <FiCamera />
            <input id='avatar' type='file' onChange={handleChangeAvatar} />
          </label>
        </Avatar>
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
          placeholder='Senha atual'
          type='password'
          icon={FiLock}
          value={passwordOld}
          onChange={(e) => setPasswordOld(e.target.value)}
        />
        <Input
          placeholder='Nova Senha'
          type='password'
          icon={FiLock}
          value={passwordNew}
          onChange={(e) => setPasswordNew(e.target.value)}
        />
        <button type='button' title='Salvar' onClick={handleUpdate}>
          Salvar
        </button>
      </Form>
    </Container>
  );
}
