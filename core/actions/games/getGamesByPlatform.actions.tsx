import { Game } from '@/infraestructure/interfaces/game';
import { GameMapper } from '@/infraestructure/mappers/game.mapper';
import { igdbApi } from '../../api/games-api';

export const getGameByPlatformActions = async (platformId: number): Promise<Game[]> => {
  try {
    const query = `
      fields *, cover.image_id;
      where platforms = ${platformId};
      sort name asc;
      limit 500;
    `;
    const { data } = await igdbApi.post('/games', query);
    const games = data.map(GameMapper.fromIGDBToGame);

    console.log(games);
    return games;
  } catch (error) {
    console.log(error);
    throw new Error('No se pudo cargar la lista de juegos');
  }
};