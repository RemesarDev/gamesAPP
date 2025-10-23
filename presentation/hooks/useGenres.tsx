
import { getGenresActions } from '@/core/actions/genres/getGenres.actions';
import { useQuery } from '@tanstack/react-query';

export const useGenres = () => {
  const genresQuery = useQuery({
    queryKey: ['genres'],
    queryFn: ()=>getGenresActions(),
    staleTime: 1000 * 60 * 60 * 24,
  })
  return{genresQuery}
}