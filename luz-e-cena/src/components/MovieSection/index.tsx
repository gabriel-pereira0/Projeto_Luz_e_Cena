import styles from './MovieSection.module.css';
import FiledSet from '../FieldSet';
import InputText from '../InputText';
import Button from '../Button';
import { FaSearch } from 'react-icons/fa';
import MovieList from '../MovieList';
import useFetchMovies from '../../hooks/useFetchMovies';
import useFilterMovies from '../../hooks/useFilterMovies';

const MovieSection = () => {
  const { movies, isLoading, error } = useFetchMovies();
  const { searchTerm, setSearchTerm, filteredMovies, handleSearch } =
    useFilterMovies(movies);

  return (
    <main>
      <section className={styles.container}>
        <FiledSet variant='secondary'>
          <InputText
            value={searchTerm}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(event.target.value)
            }
            placeholder='Pesquisar filme'
          />
          <Button variant='icon' onClick={handleSearch}>
            <FaSearch />
          </Button>
        </FiledSet>
        <h1 className={styles.titulo}>Em cartaz</h1>
        {isLoading && <p>Carregando filmes...</p>}
        {error && <p className={styles.error}>{error}</p>}
        <MovieList movies={filteredMovies} />
      </section>
    </main>
  );
};

export default MovieSection;
