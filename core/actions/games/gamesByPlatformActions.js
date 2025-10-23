import { igdbApi } from '../../api/games-api';

export const gameByPlatformActions = async (platformId) => {
  try {
    const query = `
      fields *, cover.image_id;
      where platforms = ${platformId};
      sort name asc;
      limit 500;
    `;
    const { data: dataBruta } = await igdbApi.post('/games', query);

    const data = dataBruta.map(juego => ({
      ...juego,
 	coverUrl: juego.cover?.image_id
  	? `https://images.igdb.com/igdb/image/upload/t_cover_big/${juego.cover.image_id}.jpg`
  	: null,
    }));

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('No se pudo cargar la lista de juegos');
  }
};