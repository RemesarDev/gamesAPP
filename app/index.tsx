import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { consolesActions } from '../core/actions/consoles/consolesActions'

const App = () => {
  useEffect(() => {
    const testApi = async () => {
      try {
        const consoles = await consolesActions();
        console.log('Consolas:', consoles);
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