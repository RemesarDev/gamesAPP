import { Game } from '@/infraestructure/interfaces/game';

export const GameMapper = {
  fromIGDBToGame: (rawGame: any): Game => ({
    id: rawGame.id,
    name: rawGame.name,
    slug: rawGame.slug,
    summary: rawGame.summary,
    storyline: rawGame.storyline,
    rating: rawGame.rating,
    aggregatedRating: rawGame.aggregated_rating,
    releaseDate: rawGame.first_release_date,
    coverUrl: rawGame.cover?.image_id
      ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${rawGame.cover.image_id}.jpg`
      : null,
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