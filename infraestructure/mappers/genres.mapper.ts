import { Genre } from '@/infraestructure/interfaces/genre';

export const GenreMapper = {
  fromIGDBToGenre: (rawGenre: any): Genre => ({
    id: rawGenre.id,
    name: rawGenre.name,
  }),
};