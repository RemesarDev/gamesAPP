import MarcoFondo from '@/presentation/components/generic/MarcoFondo';
import FooterGame from '@/presentation/components/sections/game/FooterGame';
import { useGames } from '@/presentation/hooks/useGames';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

const GameScreen = () => {
  const { id } = useLocalSearchParams();
  const { gameQuery } = useGames(+id);

  if (gameQuery.isLoading || !gameQuery.data) {
    return (
      <View className='flex flex-1 justify-center items-center'>
        <Text className='mb-4'>Espere por favor</Text>
        <ActivityIndicator color='purple' size={30} />
      </View>
    )
  }

  return (

    <MarcoFondo>
      <ScrollView>
        <Text>{id}</Text>
        <FooterGame id={id} />
      </ScrollView>
    </MarcoFondo>
  )
}

export default GameScreen