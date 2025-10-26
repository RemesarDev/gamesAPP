import { getPlatformFamilyByIdActions } from '@/core/actions/platform/getPlatformFamilyById.actions';
import { useQuery } from '@tanstack/react-query';

export const usePlatformFamily = (id: number) => {
    const familyQuery = useQuery({
        queryKey: ['platformFamily', id],
        queryFn: () => getPlatformFamilyByIdActions(id),
        staleTime: 1000 * 60 * 60 * 24,
        enabled: id > 0,
    });

    return { familyQuery };
};
