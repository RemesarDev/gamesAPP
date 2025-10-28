import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const ScreenshotPage = () => {
    const { id } = useLocalSearchParams();

    return (
        <View className="flex-1 items-center justify-center bg-black">
            <Text className="text-white text-lg">ID recibido: {String(id)}</Text>
        </View>
    );
};

export default ScreenshotPage;

