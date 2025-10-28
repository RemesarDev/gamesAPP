import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const ScreenshotPage = () => {
    const { url } = useLocalSearchParams();

    return (
        <View className="flex-1 items-center justify-center bg-black">
            <Text className="text-white text-lg">URL recibido: {String(url)}</Text>
        </View>
    );
};

export default ScreenshotPage;

