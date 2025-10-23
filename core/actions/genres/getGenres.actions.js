import { igdbApi } from '../../api/games-api';

export const genresActions = async () => {
  try {
    const query = `
      fields id, name;
      sort name asc;
      limit 50;
    `;
    const { data } = await igdbApi.post('/genres', query);

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('No se pudo cargar la lista de generos');
  }
};