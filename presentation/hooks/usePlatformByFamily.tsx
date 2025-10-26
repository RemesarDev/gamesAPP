
import { getPlatformByFamilyActions } from '@/core/actions/platform/getPlatformByFamily.actions';
import { getPlatformFamilyByIdActions } from '@/core/actions/platform/getPlatformFamilyById.actions';
import { useQuery } from '@tanstack/react-query';

export const usePlatformByFamily = (id: number) => {
  const platformByFamilyQuery = useQuery({
    queryKey: ['platformByFamily', id],
    queryFn: () => getPlatformByFamilyActions(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  const familyQuery = useQuery({
    queryKey: ['platformFamily', id],
    queryFn: () => getPlatformFamilyByIdActions(id),
    staleTime: 1000 * 60 * 60 * 24,
    enabled: id > 0,
  });

  return { platformByFamilyQuery, familyQuery };
};