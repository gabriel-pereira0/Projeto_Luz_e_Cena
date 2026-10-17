import styles from './MovieSection.module.css';
import FiledSet from '../FieldSet';
import InputText from '../InputText';
import Button from '../Button';
import { FaSearch } from 'react-icons/fa';
import MovieList from '../MovieList';
import { useEffect, useState } from 'react';
import type { Movie } from '../../types';
import { getMovies } from '../../api';

const MovieSection = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    let ignore = false;

    async function fetchMovies() {
      try {
        const movies = await getMovies();

        if (!ignore) {
          setMovies(movies);
        }
      } catch (err) {
        if (!ignore) {
          console.error('Erro ao buscar filmes:', err);
        }
      }
    }

    fetchMovies();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <main>
      <section className={styles.container}>
        <FiledSet variant='secondary'>
          <InputText placeholder='Pesquisar filme' />
          <Button variant='icon'>
            <FaSearch />
          </Button>
        </FiledSet>
        <h1 className={styles.titulo}>Em cartaz</h1>
        <MovieList movies={movies} />
      </section>
    </main>
  );
};

export default MovieSection;
