import { Platform } from '@/infraestructure/interfaces/platform';

export const PlatformMapper = {
  fromIGDBToPlatform: (rawPlatform: any): Platform => ({
    id: rawPlatform.id,
    name: rawPlatform.name,
    logoUrl: rawPlatform.platform_logo?.url
      ? `https:${rawPlatform.platform_logo.url}`
      : null,
    generation: rawPlatform.generation,
    slug: rawPlatform.slug,
    summary: rawPlatform.summary,
  }),
};