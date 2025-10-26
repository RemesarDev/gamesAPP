import { usePlatformsFamilies } from '@/presentation/hooks/usePlatformsFamilies';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import FamilySection from './FamilySection';

const FamiliesSections = () => {
    const { familyQuery } = usePlatformsFamilies();

    if (familyQuery.isLoading) {
        return (
            <View className="flex-1 items-center justify-center py-8">
                <ActivityIndicator size="large" />
                <Text className="mt-2">Cargando familias...</Text>
            </View>
        );
    }

    if (familyQuery.isError) {
        return (
            <View className="flex-1 items-center justify-center py-8">
                <Text>Error al cargar familias</Text>
            </View>
        );
    }

    return (
        <ScrollView>
            {(familyQuery.data ?? []).map((family) => (
                <FamilySection key={family.id} familyId={family.id} />
            ))}
        </ScrollView>
    );
};

export default FamiliesSections;
