import { Link } from 'react-router-dom';
import { Container } from './HeaderStyles';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { api } from '../../services/api';

export function Header({ handleSearchChange }) {
  const { user } = useAuth();
  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  const [search, setSearch] = useState('');
  return (
    <Container>
      <h1>RocketMovies</h1>
      <input
        type='text'
        id=''
        placeholder='Pesquise pelo título do filme'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearchChange(search);
        }}
      />
      <div className='user'>
        <div className='left'>
          <span>{user.name}</span>
          <a href=''>sair</a>
        </div>
        <Link to='/profile'>
          <img src={avatarURL} alt='' />
        </Link>
      </div>
    </Container>
  );
}
