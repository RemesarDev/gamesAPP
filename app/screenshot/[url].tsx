import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Image, Pressable, Text, View } from 'react-native';

const ScreenshotPage = () => {
    const { url } = useLocalSearchParams();
    const router = useRouter();
    const decodedUrl = url ? decodeURIComponent(String(url)) : null;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    if (!decodedUrl) {
        return (
            <View className="flex-1 items-center justify-center bg-black">
                <Text className="text-white text-lg">No se recibió URL de imagen</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            {loading && (
                <ActivityIndicator
                    color="#ffffff"
                    size="large"
                    style={{ position: 'absolute', top: '50%', left: '50%', marginLeft: -20, marginTop: -20 }}
                />
            )}

            {error ? (
                <View className="flex-1 items-center justify-center">
                    <Text className="text-white text-lg">Error al cargar la imagen</Text>
                </View>
            ) : (
                // Press on the image to go back
                <Pressable style={{ flex: 1 }} onPress={() => router.back()}>
                    <Image
                        source={{ uri: decodedUrl }}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode="contain"
                        onLoadEnd={() => setLoading(false)}
                        onError={() => {
                            setLoading(false);
                            setError(true);
                        }}
                    />
                </Pressable>
            )}
        </View>
    );
};

export default ScreenshotPage;

