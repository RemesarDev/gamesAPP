import GeneralHorizontalList from '@/presentation/components/generic/GeneralHorizontalList';
import { usePlatformByFamily } from '@/presentation/hooks/usePlatformByFamily';
import { useRouter } from 'expo-router';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

interface Props {
    familyId: number;
}

// Altura aproximada de la sección (ajústala a tu UI real)
const SECTION_MIN_HEIGHT = 220;

const FamilySection = ({ familyId }: Props) => {
    const { platformByFamilyQuery, familyQuery } = usePlatformByFamily(familyId);
    const router = useRouter();

    if (platformByFamilyQuery.isLoading) {
        return (
            <View
                className="mb-6"
                style={{ minHeight: SECTION_MIN_HEIGHT, justifyContent: 'center', alignItems: 'center' }}
            >
                <ActivityIndicator size="small" color="#ffffff" />
            </View>
        );
    }

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
        <View className="mb-6" style={{ minHeight: SECTION_MIN_HEIGHT }}>
            <GeneralHorizontalList
                familyQuery={familyQuery}
                members={platforms ?? []}
                onItemPress={handlePress}
            />
        </View>
    );
};

export default FamilySection;
