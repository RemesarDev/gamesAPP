import { Genre } from '@/infraestructure/interfaces/genre';
import { GenreMapper } from '@/infraestructure/mappers/genres.mapper';
import { igdbApi } from '../../api/games-api';

export const getGenresActions = async (): Promise<Genre[]> => {
  try {
    const query = `
      fields id, name;
      sort name asc;
      limit 50;
    `;
    const { data } = await igdbApi.post('/genres', query);
    const genres = data.map(GenreMapper.fromIGDBToGenre);
    return genres;
    
  } catch (error) {
    console.log(error);
    throw new Error('No se pudo cargar la lista de géneros');
  }
};