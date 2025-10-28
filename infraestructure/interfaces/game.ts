export interface Game {
  id: number;
  name: string;
  slug?: string;
  summary?: string;
  storyline?: string;
  rating?: number;
  aggregatedRating?: number;
  releaseDate?: number;
  coverUrl?: string | null;
  genres?: number[];
  platforms?: number[];
  involvedCompanies?: number[];
  // screenshots now stored as array of image URLs (strings)
  screenshots?: string[];
  videos?: number[];
  ageRatings?: number[];
  multiplayerModes?: number[];
  gameModes?: number[];
  playerPerspectives?: number[];
  category?: number;
  status?: number;
  themes?: number[];
  websites?: number[];
}