import GeneralHorizontalList from '@/presentation/components/generic/GeneralHorizontalList';
import { usePlatformByFamily } from '@/presentation/hooks/usePlatformByFamily';
import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

interface Props {
    familyId: number;
}

const FamilySection = ({ familyId }: Props) => {
    const { platformByFamilyQuery, familyQuery } = usePlatformByFamily(familyId);
    const router = useRouter();


    const platforms = platformByFamilyQuery.data?.map((platform) => ({
        id: platform.id,
        poster: platform.logoUrl ?? '',
        name: platform.name,
    }));

    const handlePress = (id: number) => {
        // Navigate to /platform/[id]
        router.push({ pathname: '/platform/[id]', params: { id: String(id) } });
    };

    return (
        <View className="mb-6">
            <GeneralHorizontalList familyQuery={familyQuery} members={platforms ?? []} onItemPress={handlePress} />
        </View>
    );
};

export default FamilySection;
