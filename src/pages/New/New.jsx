import { useState } from 'react';
import { BackButton } from '../../components/BackButton/BackButton';
import { Header } from '../../components/Header/Header';
import { Input } from '../../components/Input/Input';
import { MovieTag } from '../../components/MovieTag/MovieTag';
import { Container } from './NewStyles';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

export function New() {
  const { user } = useAuth();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [rating, setRating] = useState();

  const [newTag, setNewTag] = useState('');
  const [tags, setTags] = useState([]);

  const navigate = useNavigate();
  // console.log(user);
  function handleAddTag() {
    setTags((prev) => [...prev, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(tagToDelete) {
    setTags((prev) => prev.filter((tag) => tag !== tagToDelete));
  }

  async function handleSaveMovie() {
    if (!title || !rating) {
      alert(`O título e avaliação são obrigatórios`);
    }

    if (newTag) {
      alert('A tag não foi adicionada');
    }
    console.log(user.id);
    await api.post('/movies', {
      title,
      rating,
      description,
      tags,
      user_id: user.id,
    });
    alert('Filme cadastrado com sucesso');
    navigate(-1);
  }

  function handleSaveCancel() {
    const cancel = confirm(
      'Tem certeza que deseja sair sem salvar as alterações?'
    );
    if (cancel) {
      navigate(-1);
    }
  }

  return (
    <Container>
      <Header />
      <main>
        <BackButton />
        <section className='movie-input'>
          <h1>Novo filme</h1>
          <div className='inputs'>
            <Input
              placeholder='Título'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder='Sua nota de 0 a 5'
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <textarea
            placeholder='Observações'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div className='marcadores'>
            <h2>Marcadores</h2>
            <div className='tags'>
              {tags &&
                tags.map((tag, index) => (
                  <MovieTag
                    key={index}
                    value={tag}
                    onClick={() => {
                      handleRemoveTag(tag);
                    }}
                  />
                ))}
              <MovieTag
                placeholder='Nova tag'
                isNew
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </div>
          <div className='actions'>
            <button
              className='btn-del'
              type='button'
              onClick={handleSaveCancel}
            >
              Cancelar
            </button>
            <button
              className='btn-save'
              type='button'
              onClick={handleSaveMovie}
            >
              Salvar alterações
            </button>
          </div>
        </section>
      </main>
    </Container>
  );
}
