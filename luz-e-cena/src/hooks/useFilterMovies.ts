import { useMemo, useState } from 'react';
import type { Movie } from '../types';

const useFilterMovies = (movies: Movie[]) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.titulo.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()),
    );
  }, [movies, searchTerm]);

  const handleSearch = () => {
    setSearchTerm((currentSearchTerm) => currentSearchTerm.trim());
  };
  return { searchTerm, setSearchTerm, filteredMovies, handleSearch };
};

export default useFilterMovies;
