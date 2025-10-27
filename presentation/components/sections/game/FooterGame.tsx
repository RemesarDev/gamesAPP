import GeneralPoster from '@/presentation/components/generic/GeneralPoster';
import { useGames } from '@/presentation/hooks/useGames';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

interface Props {
    id?: string | string[] | number;
}

const FooterGame = ({ id }: Props) => {
    // Normalizar id a string (tomamos el primer elemento si viene como array)
    const idStr = typeof id === 'number' ? String(id) : Array.isArray(id) ? id[0] : id;

    if (!idStr) {
        return (
            <View>
                <Text>FooterGame - ID inválido</Text>
            </View>
        );
    }

    const idNum = Number(idStr);
    const { gameQuery } = useGames(Number.isNaN(idNum) ? -1 : idNum);

    // Preparar miembros para la lista horizontal: cover + screenshots
    const members: any[] = [];

    if (gameQuery?.data) {
        const game = gameQuery.data as any;

        // Cover (game.coverUrl ya viene mapeada en GameMapper)
        if (game.coverUrl) {
            // Usamos id numérico para que encaje con GeneralPoster
            members.push({ id: game.id, name: `${game.name} - Cover`, poster: game.coverUrl });
        }

        // Screenshots: pueden venir como array de objetos con image_id
        const screenshots = game.screenshots ?? [];
        if (Array.isArray(screenshots) && screenshots.length > 0) {
            screenshots.forEach((ss: any, idx: number) => {
                // ss puede ser un objeto con image_id o ya una url/string
                if (ss?.image_id) {
                    const url = `https://images.igdb.com/igdb/image/upload/t_screenshot_big/${ss.image_id}.jpg`;
                    // Generar un id numérico único por combinación game+idx
                    members.push({ id: game.id * 1000 + idx, name: `${game.name} - Screenshot`, poster: url });
                } else if (typeof ss === 'string') {
                    members.push({ id: game.id * 1000 + idx, name: `${game.name} - Screenshot`, poster: ss });
                }
            });
        }
    }

    return (
        <View>
            {members.length > 0 ? (
                <FlatList
                    horizontal
                    data={members}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({ item }) => (
                        <GeneralPoster
                            id={item.id}
                            poster={item.poster}
                            smallPoster={false}
                            desktopAspect={true}
                        />
                    )}
                />
            ) : (
                <Text>FooterGame - No hay imágenes disponibles</Text>
            )}
        </View>
    );
}

export default FooterGame