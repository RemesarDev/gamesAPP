import { Platform } from '@/infraestructure/interfaces/platform';
const DEFAULT_LOGO_URL = 'https://img.freepik.com/vector-gratis/fondo-videojuego-degradado_52683-110709.jpg';

export const PlatformMapper = {
  fromIGDBToPlatform: (rawPlatform: any): Platform => ({
    id: rawPlatform.id,
    name: rawPlatform.name,
    logoUrl: rawPlatform.platform_logo?.url
      ? `https:${rawPlatform.platform_logo.url}`
      : DEFAULT_LOGO_URL,
    generation: rawPlatform.generation,
    slug: rawPlatform.slug,
    summary: rawPlatform.summary,
  }),
};