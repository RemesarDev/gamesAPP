import { getPlatformByFamilyActions } from '@/core/actions/platform/getPlatformByFamily.actions';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';


const App = () => {
  useEffect(() => {
    const testApi = async () => {
      try {
       const NintendoConsolas = await getPlatformByFamilyActions(5);
        console.log('Familia Nintendo:', NintendoConsolas);
      } catch (error) {
        console.error('Error al cargar consolas:', error);
      }
    };

    testApi();
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white px-4">
      <Text className="text-2xl font-bold text-blue-600 mb-2">Prueba de IGDB</Text>
      <Text className="text-base text-gray-500 text-center">
        Revisa la consola para ver si se cargaron las consolas correctamente.
      </Text>
    </View>
  );
};

export default App;