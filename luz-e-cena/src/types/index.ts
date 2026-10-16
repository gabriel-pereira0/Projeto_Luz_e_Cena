export type categoria = '2D' | '3D';

export type censura = 'Livre' | '10 anos' | '12 anos' | '14 anos' | '16 anos';

export interface Movie {
  id: number;
  src: string;
  alt: string;
  titulo: string;
  genero: string;
  categoria: categoria;
  duracao: number;
  censura: censura;
}
