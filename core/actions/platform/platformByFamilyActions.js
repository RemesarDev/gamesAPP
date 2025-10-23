import { igdbApi } from '../../api/games-api';

export const platformsByFamilyActions = async (familyId) => {
  try {
    const query = `
      fields id, name, platform_logo.url;
      where platform_family = ${familyId};
      sort generation asc;
      limit 50;
    `;
    const { data: dataBruta } = await igdbApi.post('/platforms', query);

    const data = dataBruta.map(plataforma => ({
      ...plataforma,
      logoUrl: plataforma.platform_logo?.url
        ? `https:${plataforma.platform_logo.url}`
        : null,
    }));

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('No se pudo cargar la lista de consolas');
  }
};