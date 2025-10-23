import { PlatformFamily } from '@/infraestructure/interfaces/platformFamilies';

export const PlatformFamilyMapper = {
  fromIGDBToPlatformFamily: (rawFamily: any): PlatformFamily => ({
    id: rawFamily.id,
    name: rawFamily.name,
    slug: rawFamily.slug,
  }),
};
