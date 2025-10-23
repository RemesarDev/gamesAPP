import { getGameByPlatformActions } from '@/core/actions/games/getGamesByPlatform.actions';
import { useQuery } from '@tanstack/react-query';

export const useGameByPlatform = (id:number) => {
  const gameQuery = useQuery({
    queryKey: ['games', id],
    queryFn: ()=>getGameByPlatformActions(id),
    staleTime: 1000 * 60 * 60 * 24,
  })
  return{gameQuery}
}