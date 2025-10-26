import GeneralHorizontalList from '@/presentation/components/generic/GeneralHorizontalList';
import { usePlatformByFamily } from '@/presentation/hooks/usePlatformByFamily';
import React from 'react';
import { View } from 'react-native';

interface Props {
    familyId: number;
}

const FamilySection = ({ familyId }: Props) => {
    const { platformByFamilyQuery, familyQuery } = usePlatformByFamily(familyId);


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
