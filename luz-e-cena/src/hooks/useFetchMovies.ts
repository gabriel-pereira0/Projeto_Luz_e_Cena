import { useEffect, useState } from 'react';
import { getMovies } from '../api';
import type { Movie } from '../types';

const useFetchMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    async function fetchMovies() {
      setIsLoading(true);
      setError(null);
      try {
        const movies = await getMovies();

        if (!ignore) {
          setMovies(movies);
        }
      } catch (err) {
        setError('Erro ao buscar filmes. Tente novamente!');
        if (!ignore) {
          console.error(err);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();

    return () => {
      ignore = true;
    };
  }, []);

  return { movies, isLoading, error };
};

export default useFetchMovies;
