import MarcoFondo from '@/presentation/components/generic/MarcoFondo';
import GamesSection from '@/presentation/components/sections/GamesSection';
import { useGenres } from '@/presentation/hooks/useGenres';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

const PlatformPage = () => {
    const params = useLocalSearchParams();
    const idParam = params.id as string | undefined;
    const platformId = idParam ? Number(idParam) : NaN;

    if (!idParam || isNaN(platformId)) {
        return (
            <MarcoFondo>
                <View className="flex-1 items-center justify-center py-8">
                    <Text>ID de plataforma inválido</Text>
                </View>
            </MarcoFondo>
        );
    }

    const { genresQuery } = useGenres();

    if (genresQuery.isLoading) {
        return (
            <MarcoFondo>
                <View className="flex-1 items-center justify-center py-8">
                    <ActivityIndicator size="large" />
                    <Text className="mt-2">Cargando géneros...</Text>
                </View>
            </MarcoFondo>
        );
    }

    if (genresQuery.isError) {
        return (
            <MarcoFondo>
                <View className="flex-1 items-center justify-center py-8">
                    <Text>Error al cargar géneros</Text>
                </View>
            </MarcoFondo>
        );
    }

    return (
        <MarcoFondo>
            <ScrollView>
                {(genresQuery.data ?? []).map((genre) => (
                    <GamesSection key={genre.id} platformId={platformId} genreId={genre.id} />
                ))}
            </ScrollView>
        </MarcoFondo>
    );
};

export default PlatformPage;
