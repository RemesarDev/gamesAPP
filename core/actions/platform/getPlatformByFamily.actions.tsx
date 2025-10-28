import { Platform } from '@/infraestructure/interfaces/platform';
import { PlatformMapper } from '@/infraestructure/mappers/platform.mapper';
import { igdbApi } from '../../api/games-api';

export const getPlatformByFamilyActions = async (familyId: number): Promise<Platform[]> => {
  try {
    const query = `
      fields id, name, generation, slug, summary, platform_logo.url;
      where platform_family = ${familyId};
      sort generation desc;
      limit 50;
    `;
    const { data } = await igdbApi.post('/platforms', query);
    const platforms = data.map(PlatformMapper.fromIGDBToPlatform);

    //console.log(platforms);
    return platforms;

  } catch (error) {
    console.log(error);
    throw new Error('No se pudo cargar la lista de consolas');
  }
};