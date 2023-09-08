import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  async function signIn(email, password) {
    try {
      const response = await api.post('/sessions', { email, password });
      const { user, token } = response.data;

      localStorage.setItem('@rocketmovies:user', JSON.stringify(user));
      localStorage.setItem('@rocketmovies:token', token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const obj = { user, token };

      setData({ user, token });
    } catch (error) {
      alert(error.response.data.message || error.message);
    }
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append('avatar', avatarFile);

        const response = await api.patch('/users/avatar', fileUploadForm);

        user.avatar = response.data.user.avatar;
      }

      await api.put('/users/update', user);

      localStorage.setItem('@rocketmovies:user', JSON.stringify(user));

      setData({ user, token: data.token });
      alert('Perfil atualizado!');
    } catch (error) {
      alert(error.response.data.message || data.message);
    }
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('@rocketmovies:user'));
    const token = localStorage.getItem('@rocketmovies:token');

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    setData({ user, token });
  }, []);
  return (
    <AuthContext.Provider value={{ signIn, updateProfile, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
