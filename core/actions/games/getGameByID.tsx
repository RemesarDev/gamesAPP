import { Game } from '@/infraestructure/interfaces/game';
import { GameMapper } from '@/infraestructure/mappers/game.mapper';
import { igdbApi } from '../../api/games-api';

export const getGameById = async (id: number): Promise<Game> => {
  try {
    const query = `
      fields *, cover.image_id, genres.name, screenshots.image_id;
      where id = ${id};
      limit 1;
    `;
    const { data } = await igdbApi.post('/games', query);

    if (!data || data.length === 0) {
      throw new Error(`No se encontró el juego con ID ${id}`);
    }

    return GameMapper.fromIGDBToGame(data[0]);
  } catch (error) {
    console.error(error);
    throw new Error('No se pudo cargar el juego');
  }
};