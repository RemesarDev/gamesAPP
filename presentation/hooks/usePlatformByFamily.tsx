
import { getPlatformByFamilyActions } from '@/core/actions/platform/getPlatformByFamily.actions';
import { useQuery } from '@tanstack/react-query';

export const usePlatformByFamily = (id:number) => {
  const platformByFamilyQuery = useQuery({
    queryKey: ['platformByFamily', id],
    queryFn: ()=>getPlatformByFamilyActions(id),
    staleTime: 1000 * 60 * 60 * 24,
  })
  return{platformByFamilyQuery}
}