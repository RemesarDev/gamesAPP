import { Game } from '@/infraestructure/interfaces/game';
const DEFAULT_LOGO_URL = 'https://img.freepik.com/vector-gratis/fondo-videojuego-degradado_52683-110709.jpg';
const formatUnixDate = (timestamp: number | undefined): string => {
  if (!timestamp) return '';
  const date = new Date(timestamp * 1000); // Convertir segundos a milisegundos
  return `${date.getDate().toString().padStart(2, '0')}/${
    (date.getMonth() + 1).toString().padStart(2, '0')
  }/${date.getFullYear()}`;
};


export const GameMapper = {
  fromIGDBToGame: (rawGame: any): Game => ({
    id: rawGame.id,
    name: rawGame.name,
    slug: rawGame.slug,
    summary: rawGame.summary,
    storyline: rawGame.storyline,
    rating: rawGame.rating,
    aggregatedRating: rawGame.aggregated_rating,
    releaseDate: formatUnixDate(rawGame.first_release_date),
    coverUrl: rawGame.cover?.image_id
      ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${rawGame.cover.image_id}.jpg`
      : DEFAULT_LOGO_URL,
    genres: rawGame.genres,
    platforms: rawGame.platforms,
    involvedCompanies: rawGame.involved_companies,
    screenshots: rawGame.screenshots,
    videos: rawGame.videos,
    ageRatings: rawGame.age_ratings,
    multiplayerModes: rawGame.multiplayer_modes,
    gameModes: rawGame.game_modes,
    playerPerspectives: rawGame.player_perspectives,
    category: rawGame.category,
    status: rawGame.status,
    themes: rawGame.themes,
    websites: rawGame.websites,
  }),
};