import GeneralPoster from '@/presentation/components/generic/GeneralPoster';
import { useGames } from '@/presentation/hooks/useGames';
import { router } from 'expo-router';
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

        // Screenshots: el mapper ahora debe proveer un array de URLs (strings).
        // Aquí asumimos que cada elemento es la URL; como fallback aceptamos objetos con `url`.
        const screenshots = game.screenshots ?? [];
        if (Array.isArray(screenshots) && screenshots.length > 0) {
            screenshots.forEach((ss: any, idx: number) => {
                // Si el mapper devolvió la URL como string, la usamos directamente.
                if (typeof ss === 'string' && ss.length > 0) {
                    members.push({ id: game.id * 1000 + idx, name: `${game.name} - Screenshot`, poster: ss });
                    return;
                }

                // Fallback: si por alguna razón el elemento es un objeto con `url`, úsalo.
                if (ss && typeof ss.url === 'string' && ss.url.length > 0) {
                    members.push({ id: game.id * 1000 + idx, name: `${game.name} - Screenshot`, poster: ss.url });
                    return;
                }

                // Si no es ninguno de los anteriores, ignoramos el elemento. El mapper debe
                // encargarse de transformar `image_id` a URL para evitar lógica aquí.
            });
        }
    }

    return (
        <View>
            <Text className="text-3xl font-bold px-4 m-10 text-center color-white">Screenshots</Text>
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
                            onPress={(pressedId) => {
                                // `pressedId` already contains the id we assigned to the poster.
                                // Use it directly as the target id instead of recomputing/multiplying.
                                const targetId = String(pressedId);
                                // push a concrete path string; cast to any to avoid the strict route literal union error
                                // Use the singular 'screenshot' route (file: app/screenshot/[id].tsx)
                                router.push(`/screenshot/${targetId}` as any);
                            }}
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