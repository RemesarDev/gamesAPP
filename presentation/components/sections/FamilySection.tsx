import GeneralHorizontalList from '@/presentation/components/generic/GeneralHorizontalList';
import { usePlatformByFamily } from '@/presentation/hooks/usePlatformByFamily';
import React from 'react';
import { Text, View } from 'react-native';

interface Props {
    familyId: number;
}

const FamilySection = ({ familyId }: Props) => {
    const { platformByFamilyQuery, familyQuery } = usePlatformByFamily(familyId);

    if (platformByFamilyQuery.isLoading) {
        return (
            <View className="py-4 items-center">
                <Text className="mt-2">Cargando {familyQuery.data?.name ?? ''}...</Text>
            </View>
        );
    }

    if (platformByFamilyQuery.isError) {
        return (
            <View className="py-4 items-center">
                <Text>Error cargando {familyQuery.data?.name ?? ` ${familyId}`}</Text>
            </View>
        );
    }

    const platforms = platformByFamilyQuery.data?.map((platform) => ({
        id: platform.id,
        poster: platform.logoUrl ?? '',
        name: platform.name,
    }));

    return (
        <View className="mb-6">
            <GeneralHorizontalList familyQuery={familyQuery} members={platforms ?? []} />
        </View>
    );
};

export default FamilySection;
