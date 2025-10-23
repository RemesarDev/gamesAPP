import { igdbApi } from '../../api/games-api';

export const consolesActions = async () => {
  try {
    const query = `
      fields abbreviation, generation, id, name, platform_logo.url;
      sort generation asc;
      limit 50;
    `;
    const { data } = await igdbApi.post('/platforms', query);

    // Convertir URLs relativas en absolutas
    const consolesWithLogo = data.map(console => ({
      ...console,
      logoUrl: console.platform_logo?.url
        ? `https:${console.platform_logo.url}`
        : null,
    }));

    console.log(consolesWithLogo);
    return consolesWithLogo;
  } catch (error) {
    console.log(error);
    throw new Error('No se pudo cargar la lista de consolas');
  }
};