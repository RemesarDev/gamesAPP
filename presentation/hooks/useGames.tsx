
import { getGameById } from '@/core/actions/games/getGameByID';
import { useQuery } from '@tanstack/react-query';

export const useGames = (id:number) => {
  const gameQuery = useQuery({
    queryKey: ['game', id],
    queryFn: ()=>getGameById(id),
    staleTime: 1000 * 60 * 60 * 24,
  })
  return{gameQuery}
}