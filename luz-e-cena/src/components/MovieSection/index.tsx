import styles from './MovieSection.module.css';
import FiledSet from '../FieldSet';
import InputText from '../InputText';
import Button from '../Button';
import { FaSearch } from 'react-icons/fa';
import MovieList from '../MovieList';
import useFetchMovies from '../../hooks/useFetchMovies';

const MovieSection = () => {
  const { movies } = useFetchMovies();

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
