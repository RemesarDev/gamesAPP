import React from 'react';
import { Text, View } from 'react-native';

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

    return (
        <View>
            <Text>FooterGame - ID: {idStr}</Text>
        </View>
    );
}

export default FooterGame