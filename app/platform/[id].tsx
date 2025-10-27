import GeneralHorizontalList from '@/presentation/components/generic/GeneralHorizontalList';
import MarcoFondo from '@/presentation/components/generic/MarcoFondo';
import { useGameByPlatform } from '@/presentation/hooks/useGamesByPlatform';
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

    const { gameQuery } = useGameByPlatform(platformId);

    if (gameQuery.isLoading) {
        return (
            <MarcoFondo>
                <View className="flex-1 items-center justify-center py-8">
                    <ActivityIndicator size="large" />
                    <Text className="mt-2">Cargando juegos de la plataforma...</Text>
                </View>
            </MarcoFondo>
        );
    }

    if (gameQuery.isError) {
        return (
            <MarcoFondo>
                <View className="flex-1 items-center justify-center py-8">
                    <Text>Error al cargar los juegos de la plataforma</Text>
                </View>
            </MarcoFondo>
        );
    }

    const games = gameQuery.data ?? [];
    const members = games.map((g) => ({ id: g.id, poster: g.coverUrl ?? '', name: g.name }));

    return (
        <MarcoFondo>
            <ScrollView>
                <Text className="text-3xl font-bold px-4 m-4 text-center color-black">Juegos</Text>
                <GeneralHorizontalList members={members} />
            </ScrollView>
        </MarcoFondo>
    );
};

export default PlatformPage;
