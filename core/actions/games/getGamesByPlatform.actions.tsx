import { Game } from '@/infraestructure/interfaces/game';
import { GameMapper } from '@/infraestructure/mappers/game.mapper';
import { igdbApi } from '../../api/games-api';

// Optional genre filter support: pass a single genreId or an array of genreIds
export const getGameByPlatformActions = async (
  platformId: number,
  genreId?: number | number[],
): Promise<Game[]> => {
  try {
    const genresFilter = Array.isArray(genreId)
      ? (genreId.length > 0 ? ` & genres = (${genreId.join(',')})` : '')
      : typeof genreId === 'number'
        ? ` & genres = (${genreId})`
        : '';

    const query = `
      fields *, cover.image_id;
      where platforms = ${platformId}${genresFilter};
      sort name asc;
      limit 500;
    `;
    const { data } = await igdbApi.post('/games', query);
    const games = data.map(GameMapper.fromIGDBToGame);

    //console.log(games);
    return games;
  } catch (error) {
    console.log(error);
    throw new Error('No se pudo cargar la lista de juegos');
  }
};