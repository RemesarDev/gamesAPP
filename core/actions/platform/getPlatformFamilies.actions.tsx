import { PlatformFamily } from '@/infraestructure/interfaces/platformFamilies';
import { PlatformFamilyMapper } from '@/infraestructure/mappers/platformFamily.mapper';
import { igdbApi } from '../../api/games-api';

export const platformFamiliesActions = async (): Promise<PlatformFamily[]> => {
  try {
    const query = `
      fields id, name, slug;
      sort name asc;
      limit 100;
    `;
    const { data } = await igdbApi.post('/platform_families', query);
    return data.map(PlatformFamilyMapper.fromIGDBToPlatformFamily);
  } catch (error) {
    console.log(error);
    throw new Error('No se pudo cargar la lista de familias de consolas');
  }
};