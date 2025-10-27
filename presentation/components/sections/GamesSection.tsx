import GeneralHorizontalList from '@/presentation/components/generic/GeneralHorizontalList';
import { useGameByPlatform } from '@/presentation/hooks/useGamesByPlatform';
import { useGenres } from '@/presentation/hooks/useGenres';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

interface Props {
    platformId: number;
    genreId: number;
}

// Altura aproximada de la sección (ajústala a tu UI real)
const SECTION_MIN_HEIGHT = 220;

// Shows a horizontal list of games for a platform filtered by a specific genre
const GamesSection = ({ platformId, genreId }: Props) => {
    const { gameQuery } = useGameByPlatform(platformId, genreId);
    const { genresQuery } = useGenres();

    // Estado de carga: reserva espacio y muestra spinner
    if (gameQuery.isLoading) {
        return (
            <View
                className="mb-6"
                style={{ minHeight: SECTION_MIN_HEIGHT, justifyContent: 'center', alignItems: 'center' }}
            >
                <ActivityIndicator size="small" color="#ffffff" />
            </View>
        );
    }

    // Errores o vacío: no mostrar sección
    if (gameQuery.isError) return null;

    const games = gameQuery.data ?? [];
    if (!games.length) return null;

    const genreName = React.useMemo(() => {
        const list = genresQuery.data ?? [];
        const found = list.find((g: { id: number; name: string }) => g.id === genreId);
        return found?.name;
    }, [genresQuery.data, genreId]);

    const members = games.map((g: any) => ({
        id: g.id,
        poster: g.coverUrl ?? '',
        name: g.name,
    }));

    return (
        <View className="mb-6" style={{ minHeight: SECTION_MIN_HEIGHT }}>
            <GeneralHorizontalList title={genreName} members={members} />
        </View>
    );
};

export default GamesSection;
