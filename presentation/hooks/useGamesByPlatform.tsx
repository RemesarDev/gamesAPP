import { getGameByPlatformActions } from '@/core/actions/games/getGamesByPlatform.actions';
import { useQuery } from '@tanstack/react-query';

// Optional genre filter: pass a genreId (number) or an array of ids. Backwards compatible.
export const useGameByPlatform = (id: number, genreId?: number | number[]) => {
  const gameQuery = useQuery({
    queryKey: ['games', id, genreId ?? 'all'],
    queryFn: () => getGameByPlatformActions(id, genreId),
    staleTime: 1000 * 60 * 60 * 24,
  });
  return { gameQuery };
}