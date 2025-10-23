import { igdbApi } from '../../api/games-api';

export const platformFamiliesActions = async () => {
  try {
    const query = `
      fields id, name;
      sort generation asc;
      limit 10;
    `;
    const { data } = await igdbApi.post('/platform_families', query);

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('No se pudo cargar la lista de familia de consolas');
  }
};