import GeneralHorizontalList from '@/presentation/components/generic/GeneralHorizontalList';
import { useGameByPlatform } from '@/presentation/hooks/useGamesByPlatform';
import { useGenres } from '@/presentation/hooks/useGenres';
import React from 'react';
import { View } from 'react-native';

interface Props {
    platformId: number;
    genreId: number;
}

// Shows a horizontal list of games for a platform filtered by a specific genre
const GamesSection = ({ platformId, genreId }: Props) => {
    const { gameQuery } = useGameByPlatform(platformId, genreId);
    const { genresQuery } = useGenres();

    // Only render once we know there are games; otherwise, render nothing
    if (gameQuery.isLoading || gameQuery.isError) return null;

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
        <View className="mb-6">
            <GeneralHorizontalList title={genreName} members={members} />
        </View>
    );
};

export default GamesSection;
