import { PlatformFamily } from '@/infraestructure/interfaces/platformFamilies';
import { PlatformFamilyMapper } from '@/infraestructure/mappers/platformFamily.mapper';
import { igdbApi } from '../../api/games-api';

export const getPlatformFamilyByIdActions = async (id: number): Promise<PlatformFamily> => {
    try {
        const query = `
      fields id, name, slug;
      where id = ${id};
      limit 1;
    `;
        const { data } = await igdbApi.post('/platform_families', query);
        return PlatformFamilyMapper.fromIGDBToPlatformFamily(data[0]);
    } catch (error) {
        console.log(error);
        throw new Error('No se pudo cargar la familia de plataformas');
    }
};
